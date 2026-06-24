import { join } from 'node:path';
import { z } from 'zod';

/**
 * SQLite adapter for product FAQs.
 *
 * This module encapsulates all of the SQLite-specific concerns for the
 * product FAQ feature: opening the database, creating the schema, seeding
 * some starting test data, and running the paginated read query. The rest of
 * the feature depends only on the small surface exported here, so the storage
 * backend can change without touching the components or server actions.
 */

// `node:sqlite` is an experimental builtin that Turbopack/webpack cannot
// externalize through a normal `import` (it falls back to `require()` in an
// ESM context and throws "require is not defined"). Resolving it through
// `process.getBuiltinModule` is a plain runtime call the bundler never
// rewrites, so the module loads correctly on the Node.js runtime.
const { DatabaseSync } = process.getBuiltinModule('node:sqlite');

type Database = InstanceType<typeof DatabaseSync>;

const FaqRow = z.object({
  id: z.number(),
  product_id: z.number(),
  locale: z.string(),
  question: z.string(),
  answer: z.string(),
});

type FaqRow = z.infer<typeof FaqRow>;

interface QueryFaqsParams {
  productId: number;
  locale: string;
  limit: number;
  offset: number;
}

interface QueryFaqsResult {
  faqs: FaqRow[];
  hasNextPage: boolean;
}

// The database file lives at the project root. It is generated on first use
// and is intentionally git-ignored rather than committed.
const DB_PATH = join(process.cwd(), 'faqs.db');

// Starting test data so the FAQ component renders out of the box. Product 117
// gets several FAQs to demonstrate pagination ("Load More").
const SEED_FAQS: Array<Omit<FaqRow, 'id'>> = [
  {
    product_id: 117,
    locale: 'en',
    question: 'What material is this product made from?',
    answer: 'It is crafted from sustainably sourced, full-grain leather.',
  },
  {
    product_id: 117,
    locale: 'en',
    question: 'Is this product covered by a warranty?',
    answer: 'Yes. Every purchase includes a one-year limited manufacturer warranty.',
  },
  {
    product_id: 117,
    locale: 'en',
    question: 'How should I care for this product?',
    answer: 'Wipe clean with a damp cloth and condition the leather every few months.',
  },
  {
    product_id: 117,
    locale: 'en',
    question: 'Where is this product shipped from?',
    answer: 'Orders ship from our fulfillment center and typically arrive in 3-5 business days.',
  },
  {
    product_id: 117,
    locale: 'en',
    question: 'Can I return this product if I change my mind?',
    answer: 'Absolutely. Unused items can be returned within 30 days for a full refund.',
  },
];

let database: Database | undefined;

const createSchema = (db: Database) => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS product_faqs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      locale TEXT NOT NULL,
      question TEXT NOT NULL,
      answer TEXT NOT NULL
    );
  `);
};

const seedFaqs = (db: Database) => {
  const { count } = z
    .object({ count: z.number() })
    .parse(db.prepare('SELECT COUNT(*) AS count FROM product_faqs').get());

  if (count > 0) {
    return;
  }

  const insert = db.prepare(
    `INSERT INTO product_faqs (product_id, locale, question, answer)
     VALUES (?, ?, ?, ?)`
  );

  SEED_FAQS.forEach((faq) => {
    insert.run(faq.product_id, faq.locale, faq.question, faq.answer);
  });
};

/**
 * Open a SQLite database at `path`, ensuring the schema and seed data exist.
 * Pass `:memory:` (or a temp path) in tests to get an isolated, pre-seeded
 * database without touching the real `faqs.db`.
 *
 * @param {string} path - The database file path; defaults to the project DB.
 * @returns {Database} A ready-to-query database connection.
 */
const createFaqsDatabase = (path: string = DB_PATH): Database => {
  const db = new DatabaseSync(path);

  createSchema(db);
  seedFaqs(db);

  return db;
};

// Lazily open the database the first time a query is run, reusing the same
// connection thereafter.
const getDatabase = (): Database => {
  if (!database) {
    database = createFaqsDatabase();
  }

  return database;
};

/**
 * Read a page of FAQs for a product and locale from `db`, ordered by insertion.
 * One extra row beyond `limit` is fetched so the caller can tell whether
 * another page exists without a separate count query.
 *
 * @param {Database} db - The database connection to read from.
 * @param {QueryFaqsParams} params - The product, locale, page size and offset.
 * @returns {QueryFaqsResult} The page of FAQ rows and whether more remain.
 */
const queryFaqs = (
  db: Database,
  { productId, locale, limit, offset }: QueryFaqsParams
): QueryFaqsResult => {
  const rows = z.array(FaqRow).parse(
    db
      .prepare(
        `SELECT id, product_id, locale, question, answer
         FROM product_faqs
         WHERE product_id = ? AND locale = ?
         ORDER BY id
         LIMIT ? OFFSET ?`
      )
      .all(productId, locale, limit + 1, offset)
  );

  return {
    faqs: rows.slice(0, limit),
    hasNextPage: rows.length > limit,
  };
};

/**
 * Read a page of FAQs from the shared application database.
 *
 * @param {QueryFaqsParams} params - The product, locale, page size and offset.
 * @returns {QueryFaqsResult} The page of FAQ rows and whether more remain.
 */
const queryProductFaqs = (params: QueryFaqsParams): QueryFaqsResult =>
  queryFaqs(getDatabase(), params);

export {
  type FaqRow,
  type QueryFaqsParams,
  type QueryFaqsResult,
  createFaqsDatabase,
  queryFaqs,
  queryProductFaqs,
  seedFaqs,
};

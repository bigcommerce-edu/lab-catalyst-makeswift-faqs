import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
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

let database: DatabaseSync | undefined;

const createSchema = (db: DatabaseSync) => {
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

const seedFaqs = (db: DatabaseSync) => {
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

// Lazily open the database (and ensure the schema and seed data exist) the
// first time a query is run, reusing the same connection thereafter.
const getDatabase = (): DatabaseSync => {
  if (!database) {
    database = new DatabaseSync(DB_PATH);
    createSchema(database);
    seedFaqs(database);
  }

  return database;
};

/**
 * Read a page of FAQs for a product and locale, ordered by insertion. One extra
 * row beyond `limit` is fetched so the caller can tell whether another page
 * exists without a separate count query.
 *
 * @param {QueryFaqsParams} params - The product, locale, page size and offset.
 * @returns {QueryFaqsResult} The page of FAQ rows and whether more remain.
 */
const queryProductFaqs = ({
  productId,
  locale,
  limit,
  offset,
}: QueryFaqsParams): QueryFaqsResult => {
  const db = getDatabase();

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

export { type FaqRow, type QueryFaqsParams, type QueryFaqsResult, queryProductFaqs };

'use client';

import { clsx } from 'clsx';
import { forwardRef, ReactNode, Ref, useState } from 'react';

interface Member {
  name?: string;
  position?: string;
  image?: string;
}

interface Props {
  // TODO: Add `className` prop
  //  - The Makeswift control will combine all configured styles into a single class name, so this is a simple string
  members: Member[];
  // TODO: Add new props to the interface
  //  - `highlightColor` and `thumbnailTextColor` should be optional strings
  //  - `thumbnailOrientation` should be an optional string of the specific value 'vertical' or 'horizontal'
  //  - `itemsPerRow` should be an optional number
}

export const TeamMembers = forwardRef((
  { 
    // TODO: Add `className` prop to the destructuring
    members,
    // TODO: Add `highlightColor`, `thumbnailTextColor`, `thumbnailOrientation`, and `itemsPerRow` to the destructuring
  }: Props, 
  ref: Ref<HTMLDivElement>
) => {
  // TODO: Update this constant to be based on whether `thumbnailOrientation` is 'vertical' or 'horizontal'
  const vertical = true;
  const fadeInDuration = 500;
  
  const [activeMember, setActiveMember] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([0]);

  const changeActiveMember = (index:number) => {
    const prevActiveIndex = activeMember;

    const newVisibleMembers = [...visibleMembers, index];

    setVisibleMembers(newVisibleMembers);

    setTimeout(() => {
      setActiveMember(index);

      setTimeout(() => {
        setVisibleMembers(newVisibleMembers.filter(thisIndex => thisIndex !== prevActiveIndex));
      }, fadeInDuration * 1.5);
    }, 10);
  };

  return (
    // TODO: Add the `className` prop to the collection of class names aggregated with `clsx`
    <div
      className={clsx(
        "w-full",
        vertical && "flex gap-4"
      )}
      ref={ref}
    >
      {(members.length > 0) ?

      <>
        <div 
          className={clsx(
            vertical && "flex-none",
            vertical || "p-4"
          )}
        >
          {/* TODO: Utilize the `itemsPerRow` prop for styling
              - Add a `style` attribute to set a `--itemsPerRow` CSS variable based on the prop
              - Add a dynamic `grid-cols` classname based on the CSS variable
          */}
          <ul 
            className={clsx(
              vertical || "grid gap-x-4 gap-y-8 md:px-16 justify-items-center"
            )}
          >
            {/* TODO: Update style classees for each <li> to use highlight and text color props 
                  - Add a `style` attribute to set `--highlightColor` and `--textColor` CSS variables based on the appropriate props
                  - Update the style class names to switch from hard-coded values to values based on the CSS variables
            */}
            {members.map((member, index) => (
              <li 
                className={clsx(
                  `max-w-24 sm:max-w-48 text-center border border-2 p-2 
                  rounded-md cursor-pointer transition-colors duration-300`,
                  "text-black",
                  index === activeMember ? "border-black" : "border-transparent",
                )} 
                key={index} onClick={() => changeActiveMember(index)}
              >
                <img alt={member.name} className="rounded-full mx-auto max-w-[60%]" src={member.image} />
                <h3 className="text-sm font-bold">
                  {member.name}
                </h3>
                <p className="text-sm">
                  {member.position}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={clsx(
          "relative overflow-hidden",
          vertical && "flex-auto min-h-[560px]",
          vertical || "relative h-[560px]"
          )}>
          {members.map((member, index) => {
            if (!visibleMembers.includes(index)) return null;

            return (
              <div  
                className={clsx(
                  "absolute transition-opacity duration-[var(--fadeDuration)] w-full",
                  (index !== activeMember) ? "opacity-0" : "opacity-100"
                )}
                key={index}
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                style={{
                  "--fadeDuration": `${fadeInDuration}ms`,
                } as React.CSSProperties}
              >
                <h2 className="text-xl">{member.name}</h2>
              </div>
            )
          })}
        </div>
      </>

      : 

      <div className="w-full"><h3 className="text-lg text-center">Add a Team Member</h3></div>

      }
    </div>
  )
});

export default TeamMembers;

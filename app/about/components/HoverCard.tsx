/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

// Props definition for the hover card, expecting any React node as children and a data object
type HoverCardProps = {
  children: React.ReactNode;
  data: {
    title: string;
    company: string;
    imageSrc: string;
    time: string;
    link: string;
    bullets: string[];
  };
};

const WorkplaceCard: React.FC<HoverCardProps> = ({ children, data }) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      {children}
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <img
            className="Image large"
            src={data.imageSrc}
            alt={data.title}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <div className="Text bold">{data.title}</div>
              <div className="Text faded">{data.company}</div>
              <div className="Text">{data.time}</div>
              {data.bullets.map((bullet, index) => (
                <div key={index} className="Text">{bullet}</div>
              ))}
            </div>
          </div>
        </div>
        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default WorkplaceCard;

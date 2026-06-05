import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type PhasesAccordionItempProps = {
  index?: number;
  title: string;
  description: string;
};

type PhasesAccordionItemElement = React.ReactElement<PhasesAccordionItempProps>;

type PhasesAccordionProps = {
  children: PhasesAccordionItemElement | PhasesAccordionItemElement[];
};

// kolom kiri
type PhasesStepIndicatorProps = {
  index?: number;
};
// menampilkan nomor urut

function PhasesStepIndicator({ index }: PhasesStepIndicatorProps) {
  // wrapper class
  const wrapperClasses = cn(
    "group relative mb-4 last:mb-0 md:mb-8 [&:nth-last-child(2)]:mb-0",
    "[&:nth-last-child(2)>.line-decoration]:h-1/2",
  );

  // line class
  const lineClasses =
    "line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:h-[calc(100%+2rem)]";

  // number circle class
  const numberCircleClasses =
    "flex-center bg-primary-300 text-neutral-25 text-sm-semibold md:text-md-semibold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full";

  // glow class

  const glowClasses =
    "flex-center absolute inset-x-0 top-1/2 aspect-square rounded-full -translate-y-1/2 shadow-[0_0_25px_rgba(0,147,221,0.6)] blur-3xl";

  return (
    <div className={wrapperClasses}>
      <div className={lineClasses} />
      <span className={numberCircleClasses}>{index}</span>
      <span className={glowClasses}>{index}</span>
    </div>
  );
}
// main component
const PhasesAccordion: React.FC<PhasesAccordionProps> = ({ children }) => {
  return (
    <Accordion type="multiple">
      <div className="grid grid-cols-[2.5rem_auto] gap-x-4 md:gris-cols-[3rem_auto] md:gap-x-6">
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, { index: idx + 1 }),
        )}
      </div>
    </Accordion>
  );
};
//kolom kanan

export const PhasesAccordionItem: React.FC<PhasesAccordionItempProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <>
      <PhasesStepIndicator index={index} />
      <AccordionItem value={`item-${index}`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </>
  );
};

export default PhasesAccordion;

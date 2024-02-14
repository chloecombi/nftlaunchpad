'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="flex flex-col items-center m-20">
      <h2 className="text-5xl font-bold mb-9">FAQ's</h2>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:text-2xl">
              What is FOMO Launchpad?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              A Launchpad made by Snazzy Society for the community.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:text-2xl">
              Why should we use FOMO Launchpad?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Fast and Reliable launchpad with low fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:text-2xl">
              Which blockchain is FOMO Launchpad compatible with?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              FOMO Launchpad is purely based under SEI Blockchain.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:text-2xl">
              Which marketplace can we list our collection?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Pallet Exchange, MRKT Market place and Dagora
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

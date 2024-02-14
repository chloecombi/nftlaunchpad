import { cn } from '@/lib/utils';
import useStore from '@/store/useStore';
import React from 'react';

type TStep = {
  stepNumber: number;
  smallTitle?: string;
  sectionTitle?: string;
};

export default function Step({ stepNumber = 1, sectionTitle = '' }: TStep) {
  const step = useStore((state) => state.step);

  return (
    <section className="uppercase flex items-center gap-4">
      <p
        className={cn(
          'w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold dark:text-white border-[0.5px] border-muted-foreground',
          {
            'bg-green-500':
              stepNumber === step,
          }
        )}
      >
        {stepNumber}
      </p>
      <div className="flex flex-col">
        <p className="text-sm text-white font-bold">{sectionTitle}</p>
      </div>
    </section>
  );
}

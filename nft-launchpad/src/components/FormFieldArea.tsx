'use client';

import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import useStore from '@/store/useStore';

type TFooter = {
  className?: string;
  onHandleNextStep?: () => void;
  onHandlePreviousStep?: () => void;
};

export default function FormFieldArea({
  className,
  onHandleNextStep,
  onHandlePreviousStep,
}: TFooter) {
  const step = useStore((state) => state.step);
  return (
    <footer
      className={cn('py-4 flex mx-auto', className)}
    >
      {step === 1 && <div className="w-full hidden lg:block" />}

      {step > 1 && (
        <Button variant="ghost" onClick={onHandlePreviousStep}>
          Go Back
        </Button>
      )}
      <Button onClick={onHandleNextStep}>
        {step === 4 ? 'Confirm' : 'Next Step'}
      </Button>
    </footer>
  );
}

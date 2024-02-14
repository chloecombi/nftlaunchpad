import Sidebar from '@/app/Sidebar';
import { cn } from '@/lib/utils';
import React from 'react';
import useStore from '../store/useStore';
import FormFieldArea from './FormFieldArea';

type TContainer = {
  children: React.ReactNode;
  className?: string;
  onNext: () => void;
  onPreviousStep?: () => void;
};

export default function Container({
  children,
  className,
  onNext,
  onPreviousStep,
}: TContainer) {
  const { step, isSubmitted } = useStore((state) => state);
  return (
    <>
      <section
        className={cn(
          'px-6 py-8 lg:px-[100px] lg:pt-10 lg:mx-auto lg:w-[1024px] rounded-[15px] lg:static left-1/2 lg:left-0 lg:p-4 min-h-[376px] lg:min-h-[600px] ',
          className
        )}
      >
        <Sidebar />
        <div className="w-full mr-[60px] relative">
          {children}
          {!isSubmitted && (
            <FormFieldArea
              className={cn('hidden lg:inline-flex', step === 3 && 'mt-24')}
              onHandleNextStep={onNext}
              onHandlePreviousStep={onPreviousStep}
            />
          )}
        </div>
      </section>
      {!isSubmitted && (
        <FormFieldArea
          className={cn('inline-flex lg:hidden left-0 right-0', {
            '-bottom-32': step === 2,
          })}
          onHandleNextStep={onNext}
          onHandlePreviousStep={onPreviousStep}
        />
      )}
    </>
  );
}

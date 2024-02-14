'use client';
import React from 'react';
import Step from '@/components/Step';
import CollectionDetails from '@/components/sections/CollectionDetails';
import UploadPage from '@/components/sections/Upload';
import useStore from '../../../store/useStore';
import Deploy from '@/components/sections/Deploy';
import Success from '@/components/sections/Success';
import Phases from '@/components/sections/Phases';

const Collections = () => {
  const { step } = useStore((state) => state);
  return (
    <div className="flex flex-col justify-center my-20">
      <div className="text-3xl md:text-5xl  font-bold text-center mt-5">
        Create Collection
      </div>
      <section className="relative w-full bg-no-repeat bg-cover lg:hidden">
        <div className="flex justify-center pt-[37px] pb-[34px]">
          <Step stepNumber={1} />
          <Step stepNumber={2} />
          <Step stepNumber={3} />
          <Step stepNumber={4} />
          <Step stepNumber={5} />
        </div>
      </section>
      {step === 1 && <CollectionDetails />}
      {step === 2 && <Phases />}
      {step === 3 && <UploadPage />}
      {step === 4 && <Deploy />}
      {step === 5 && <Success />}
    </div>
  );
};

export default Collections;

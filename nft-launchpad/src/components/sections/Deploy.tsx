import React from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import useStore from '@/store/useStore';
import { CheckCircle } from 'lucide-react';

export default function Addons() {
  const { step, increaseStep, decreaseStep } = useStore((state) => state);

  const onNext = () => {
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <SectionHeader title="Deploy" description="" />
      <div className="flex items-center flex-col gap-5">
        <p className="text-2xl text-center mt-4">Your NFT has been Deployed</p>
        <CheckCircle className="h-12 w-12 text-green-500" />
        <p className="text-center">
          Congratulations!! Your NFT has been successfully Deployed
        </p>
      </div>
    </Container>
  );
}

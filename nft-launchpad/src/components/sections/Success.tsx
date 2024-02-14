import React from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import useStore from '../../store/useStore';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useRouter } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  const { step, decreaseStep, isSubmitted, onSubmit, } = useStore(
    (state) => state
  );

  const onNext = () => {
    router.push('/');
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <SectionHeader title="Success" description="" />
      <Label htmlFor="Transaction hash">Transaction hash</Label>
      <Input
        type="text"
        id="Transaction hash"
        value="0x1fa11da2bc26a14a283bbcc47c89f5baab54e55f93a99545d83766c9929a0988"
        className="mb-10"
      />
      <Label htmlFor="Collection Address">Collection Address</Label>
      <Input
        type="text"
        id="Collection Address"
        value="0x235eE805F962690254e9a440E01574376136ecb1"
      />
    </Container>
  );
}

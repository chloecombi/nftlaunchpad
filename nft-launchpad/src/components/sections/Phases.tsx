'use client';

import React, { useState } from 'react';
import * as z from 'zod';

import SectionHeader from '../SectionHeader';
import { useForm } from 'react-hook-form';

import { Input } from '../ui/input';
import useStore from '../../store/useStore';
import Container from '../Container';
import { MinusCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function Phases() {
  const { step, personalInfo, setPersonalInfo, increaseStep, decreaseStep } =
    useStore((state) => state);

  const [phases, setPhases] = useState([{ name: '', price: '' }]);

  const addPhase = () => {
    setPhases([...phases, { name: '', price: '' }]);
  };

  const removePhase = (index: number) => {
    const newPhases = [...phases];
    newPhases.splice(index, 1);
    setPhases(newPhases);
  };

  const onNext = () => {
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <div className="flex items-center justify-between">
        <SectionHeader title="Phases" description="" />
        <Button onClick={addPhase}>Add Phases</Button>
      </div>

      {phases.map((phase, index) => (
        <div className="flex gap-4 mb-3" key={index}>
          <div className="flex-grow">
            <Label className="dark:text-stone-300 block mb-4">
              Phase Name {index + 1}:
            </Label>
            <Input
              value={phase.name}
              onChange={(e) => {
                const newPhases = [...phases];
                newPhases[index].name = e.target.value;
                setPhases(newPhases);
              }}
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between mb-4">
              <Label className="dark:text-stone-300">
                Unit Price {index + 1}:
              </Label>
              {index > 0 && (
                <MinusCircle
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => removePhase(index)}
                />
              )}
            </div>
            <Input
              value={phase.price}
              onChange={(e) => {
                const newPhases = [...phases];
                newPhases[index].price = e.target.value;
                setPhases(newPhases);
              }}
            />
          </div>
        </div>
      ))}
    </Container>
  );
}

{
  /* <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={() => form.handleSubmit(onSubmitHandler)}
        >
          <div className="flex gap-4">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Phase Name:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="symbol"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Unit Price 1:
                    <MinusCircle />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Phase Name2:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="symbol"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Unit Price2:
                    <MinusCircle />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-4">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Phases Name3:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="symbol"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Unit Prices3:
                    <MinusCircle />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4">
            <FormField
              control={control}
              name="royaltyWallet"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Creator Wallet:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="royaltyPercentage"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Creator Percent:
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form> */
}

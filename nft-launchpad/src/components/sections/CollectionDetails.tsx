'use client';

import React from 'react';
import * as z from 'zod';

import SectionHeader from '../SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import useStore from '../../store/useStore';
import Container from '../Container';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  name: z.string().min(5, { message: 'Name is required' }).max(100),
  symbol: z.string().min(1, { message: 'Symbol is required' }),
  supply: z.string().min(1, { message: 'Supply is required' }),
  royaltyWallet: z.string().min(1, { message: 'Royalty Wallet is required' }),
  royaltyPercentage: z
    .string()
    .min(1, { message: 'Royalty Percentage is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export default function CollectionDetails() {
  const { personalInfo, setPersonalInfo, increaseStep } = useStore(
    (state) => state
  );
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...personalInfo },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const onSubmitHandler = (values: ValidationSchema) => {
    increaseStep(1);
  };

  return (
    <Container onNext={form.handleSubmit(onSubmitHandler)}>
      <SectionHeader
        title="Collection Details"
        description=""
      />
      <Form {...form}>
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
                    Name:
                    <FormMessage className="text-rose-800">
                      {errors.name?.message}
                    </FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn('', {
                        'border-rose-700': errors.name?.message,
                      })}
                      placeholder=""
                      {...field}
                    />
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
                    Symbol:
                    <FormMessage className="text-rose-800">
                      {errors.symbol?.message}
                    </FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn('', {
                        'border-rose-700': errors.symbol?.message,
                      })}
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                  Description:
                  <FormMessage className="text-rose-800">
                    {errors.description?.message}
                  </FormMessage>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="description"
                    className={cn('', {
                      'border-rose-700': errors.description?.message,
                    })}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="supply"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                  Supply:
                  <FormMessage className="text-rose-800">
                    {errors.supply?.message}
                  </FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn('', {
                      'border-rose-700': errors.supply?.message,
                    })}
                    placeholder=""
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={control}
              name="royaltyWallet"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormLabel className="flex items-center justify-between font-normal font-xl dark:text-stone-300">
                    Royalty Wallet:
                    <FormMessage className="text-rose-800">
                      {errors.royaltyWallet?.message}
                    </FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn('', {
                        'border-rose-700': errors.royaltyWallet?.message,
                      })}
                      placeholder=""
                      {...field}
                    />
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
                    Royalty Percentage:
                    <FormMessage className="text-rose-800">
                      {errors.royaltyPercentage?.message}
                    </FormMessage>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(
                        'placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue',
                        {
                          'border-rose-700': errors.royaltyPercentage?.message,
                        }
                      )}
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </Container>
  );
}

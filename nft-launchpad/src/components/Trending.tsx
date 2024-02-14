import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';

const Trending = () => {
  return (
    <div className="mx-10">
      <h2 className="text-3xl font-bold text-center">
        Upcoming <span className="text-yellow-400">FOMO</span>{' '}
      </h2>
      <div className="m-10">
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <Card className="rounded-lg flex-shrink-0 w-[280px]">
            <CardHeader className="p-2 h-[280px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="mt-2 px-4">
                <p className="font-bold text-xs">
                  THE CHAMELEON by SNAZZY SOCIETY
                </p>
                <p className="text-muted-foreground mt-2">Date: TBA</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between border-t p-4">
                <p className="font-medium">Price: TBA</p>
                <p className="font-medium">Supply: TBA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg flex-shrink-0 w-[280px]">
            <CardHeader className="p-2 h-[280px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft5.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="mt-2 px-4">
                <p className="font-bold text-xs">
                  THE CHANLENCGE by SNAZZY SOCIETY
                </p>
                <p className="text-muted-foreground mt-2">Date: TBA</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between border-t p-4">
                <p className="font-medium">Price: TBA</p>
                <p className="font-medium">Supply: TBA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg flex-shrink-0 overflow-hidden w-[280px]">
            <CardHeader className="p-2 h-[280px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft6.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="mt-2 px-4">
                <p className="font-bold text-xs">
                  THE DANCERER by SNAZZY SOCIETY
                </p>
                <p className="text-muted-foreground mt-2">Date: TBA</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between border-t p-4">
                <p className="font-medium">Price: TBA</p>
                <p className="font-medium">Supply: TBA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg flex-shrink-0 overflow-hidden w-[280px]">
            <CardHeader className="p-2 h-[280px]">
              <div className="relative aspect-square ">
                <Image
                  fill
                  alt="Generated"
                  src="/nft4.jpeg"
                  className="rounded-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="mt-2 px-4">
                <p className="font-bold text-xs">
                  THE IGOONIA by SNAZZY SOCIETY
                </p>
                <p className="text-muted-foreground mt-2">Date: TBA</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 flex items-center justify-between border-t p-4">
                <p className="font-medium">Price: TBA</p>
                <p className="font-medium">Supply: TBA</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trending;

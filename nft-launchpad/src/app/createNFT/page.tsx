'use client';
import { LayoutGrid, MoveRight } from 'lucide-react';
import Link from 'next/link';


const CreateNFT = () => {
  
  return (
    <div className="flex h-[calc(100vh-120px)]">
    <div className="w-full md:w-1/2 flex flex-col px-20 justify-center">
      <h1 className="text-4xl font-bold">Create</h1>
      <Link href="/createNFT/collections">
          <div className="p-4 bg-neutral-800 rounded-xl mt-6 flex items-center justify-between cursor-pointer hover:bg-neutral-800/70">
          <div>
              <div className="text-lg font-medium flex items-center gap-5">
              <LayoutGrid />
              <p>Drop a Collection</p>
              </div>
              <div className="text-muted-foreground mt-3 text-sm">
              Launch your NFT Collection for other to mint.
              </div>
          </div>
          <div className="mr-5">
              <MoveRight />
          </div>
          </div>
      </Link>
      <Link href="/createNFT/mint">
          <div className="p-4 bg-neutral-800 rounded-xl mt-6 flex items-center justify-between cursor-pointer hover:bg-neutral-800/70">
          <div>
              <div className="text-lg font-medium flex items-center gap-5">
              <LayoutGrid />
              <p>Mint an NFT</p>
              </div>
              <div className="text-muted-foreground mt-3 text-sm">
              Create a collection and mint NFTs directly to your wallet
              </div>
          </div>
          <div className="mr-5">
              <MoveRight />
          </div>
          </div>
      </Link>
    </div>
    <div className="hidden md:block md:w-1/2"></div>
  </div>
  )
};

export default CreateNFT;

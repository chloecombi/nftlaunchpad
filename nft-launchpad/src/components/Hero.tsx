'use client';
import React from 'react';
import Link from 'next/link';
import HoverCard from './HoverCard';

const Hero = () => {
  return (
    <div className="container relative overflow-hidden min-h-[calc(100vh-68px)] w-screen mb-20 mt-10 lg:mt-0">
      <div className="mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row gap-10 items-center z-10">
        <div className="w-full lg:w-1/2 lg:h-[calc(100vh-68px)] ml-10 flex flex-col justify-center lg:items-start md:items-center z-10">
          <div className="max-w-2xl">
            <h1 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl dark:text-white text-center lg:text-start">
              <span className="text-yellow-400 ">Don't</span> miss out!
            </h1>
          </div>
          <div className="mt-3 w-full md:max-w-xl text-center lg:text-start ">
            <h2 className="block font-bold text-gray-800 text-3xl md:text-5xl dark:text-white">
              Bring your NFT's to life using{' '}
              <span className="text-yellow-400">FOMO Launchpad</span>
            </h2>
          </div>
          <div className="mt-8 gap-3 flex">
            <Link
              className="
                inline-flex 
                justify-center items-center 
                gap-x-3 text-center 
                bg-gradient-to-tl 
                from-blue-600 
                to-violet-600
                 hover:from-violet-600 
                 hover:to-blue-600 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800 text-lg"
              href="/createNFT"
            >
              Submit Project
            </Link>
            <button
              type="button"
              className="relative group py-3 px-4 ps-3 inline-flex items-center gap-x-2 font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="relative md:mt-4 lg:w-1/2 flex gap-4">
          <div className="absolute right-0 top-0 md:-top-[100px] lg:-top-[160px] h-[600px] w-[600px] lg:h-[700px] lg:w-[700px] rounded-full bg-[url('/blob.svg')] bg-no-repeat rotate-12"></div>
          <div className="hidden md:block">
            <HoverCard image="/nft4.jpeg" createdBy="LAMO BAE" />
          </div>
          <HoverCard image="/nft5.jpeg" createdBy="CAiO naE" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

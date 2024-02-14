'use client';
import React, { useState } from 'react';
import { Select } from './ui/select';
import { motion } from 'framer-motion';
import { Chip } from './ui/chip';

const filter = ['Trending', 'Top'];
const time = ['1h', '6h', '24h', '7d'];

const StatsTable = () => {
  const [selected, setSelected] = useState(filter[0]);
  const [selectedDay, setSelectedDay] = useState(time[0]);

  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-between">
        <div className="bg-gray-100 flex items-center gap-1 shadow-lg p-1 rounded-xl">
          {filter.map((item) => (
            <Chip
              text={item}
              selected={selected}
              setSelected={() => setSelected(item)}
              key={item}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {/* <div className="bg-gray-100 flex items-center gap-1 shadow-lg p-1 rounded-xl">
            {time.map((item) => (
              <Chip
                text={item}
                selected={selectedDay}
                setSelected={() => setSelectedDay(item)}
                key={item}
              />
            ))}
          </div> */}
          <Select></Select>
          <div className="px-6 py-3.5 bg-white shadow-md rounded-lg font-medium text-lg border-[0.5px] border-gray-100 cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;


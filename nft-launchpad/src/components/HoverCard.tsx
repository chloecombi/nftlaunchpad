'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

type HoverCardProps = {
  image: string;
  createdBy: string;
};

const HoverCard = ({ image, createdBy }: HoverCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

      const rY = mouseX / width - HALF_ROTATION_RANGE;
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

      setRotateX(rX);
      setRotateY(rY);
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="
      relative 
      h-96 
      w-72 
      rounded-xl 
      bg-gradient-to-tl 
      from-blue-600 
      to-violet-600
       hover:from-violet-600 
       hover:to-blue-600"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
          backgroundImage: `url(${image})`,
        }}
        className="absolute inset-4 flex items-end rounded-xl bg-cover bg-center shadow-lg"
      >
        <div className="p-4 bg-black/35 w-full rounded-bl-xl rounded-br-xl">
          <p className="uppercase text-xs ">Created by</p>
          <p className="uppercase font-bold">{createdBy}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HoverCard;

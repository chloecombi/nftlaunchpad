import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import HoverCard from "./HoverCard"

const data = [
    {
        image: "/nft.jpeg",
        createdBy: "LMAO CHAK"
    },
    {
        image: "/nft2.jpeg",
        createdBy: "BAO LEM"
    },
    {
        image: "/nft3.jpeg",
        createdBy: "CHIMNA KKI"
    },
    {
        image: "/nft.jpeg",
        createdBy: "KULE KKA"
    },
]

export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <HoverCard image={item.image} createdBy={item.createdBy}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

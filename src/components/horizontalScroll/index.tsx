// components/HorizontalScroll.tsx
"use client";

import React from "react";
import IndianaDragScroll from "react-indiana-drag-scroll";
import Image from "next/image";
import { Card } from "@/utils/card";

interface HorizontalScrollProps {
  cards: Card[];
}

export default function HorizontalScroll({ cards }: HorizontalScrollProps) {
  return (
    <IndianaDragScroll className="flex overflow-x-auto scrollbar-hide ml-[80px] cursor-grab gap-[40px]">
      {cards.length > 0 ? (
        cards.map((card) => (
          <article
            className="min-w-[400px] h-[415px] pt-[15px] px-[20px] pb-[23px] rounded-[10px] bg-gray-300 bg-opacity-50"
            key={card.id}
          >
            <div className="flex justify-between ml-[3px] mb-[9px] mr-[5px]">
              <h2 className="font-mont text-[16px] font-bold leading-normal tracking-[-0.24px] text-left text-black">
                {card.name}
              </h2>
              <span className="font-mont text-[16px] font-normal tracking-[-0.24px] text-right text-black">
                {card.number}
              </span>
            </div>
            <div className="w-[360px] h-[227.1px]">
              <Image
                className="rounded-[5px] object-cover w-full h-full pointer-events-none"
                src={card.image}
                alt={card.name}
                width={360}
                height={227.1}
              />
            </div>
            <p className="w-[357px] h-[101px] font-mont text-[14px] font-normal leading-[1.2] tracking-[-0.32px] text-left text-black mt-[19px] overflow-hidden whitespace-normal ml-[3px] line-clamp-6">
              {card.description}
            </p>
          </article>
        ))
      ) : (
        <article className="min-w-[400px] h-[415px] flex items-center justify-center rounded-[10px] bg-gray-200">
          <p className="text-center text-black font-mont text-[16px]">
            No cards available
          </p>
        </article>
      )}
    </IndianaDragScroll>
  );
}

"use client";

import React, { useState } from "react";
import HorizontalScroll from "../horizontalScroll";
import { cardData } from "@/utils/card";

export default function CardSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const filteredCards = cardData
    .filter((card) => {
      const regionMatch =
        selectedRegion === "All" || card.continent === selectedRegion;

      const numberMatch =
        selectedNumbers.length === 2
          ? card.number >= Math.min(...selectedNumbers) &&
            card.number <= Math.max(...selectedNumbers)
          : true; // 숫자가 선택되지 않았을 경우 모든 카드 반환

      return regionMatch && numberMatch;
    })
    .sort((a, b) => a.number - b.number); // 숫자에 따라 오름차순 정렬

  const handleNumberClick = (number: number) => {
    setSelectedNumbers((prev) => {
      if (prev.includes(number)) {
        return prev.filter((num) => num !== number); // 이미 선택된 숫자는 제거
      }
      if (prev.length < 2) {
        return [...prev, number]; // 숫자를 추가
      }
      return []; // 두 개 선택된 경우 초기화
    });
  };

  return (
    <section className="flex-grow-0 pt-[120px] pb-[80px]">
      {/* Rectangle-4 */}
      <header className="pl-[80px] pr-[850px] pb-[60px] ">
        <h2 className="Text-Style-1">Duis tincidunt ut ligula vitae mollis.</h2>
      </header>
      <div className="flex gap-5 ml-[80px] mb-[68px]">
        <nav className="w-[408px] h-[50px] flex-grow-0 flex flex-row justify-around items-center gap-[5px] p-[5px] rounded-[25px] border border-black/50 bg-white">
          {["All", "Asia", "Europe", "America", "Oceania"].map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`font-exo2 text-[16px] font-normal normal-case leading-normal tracking-[-0.24px] text-center text-black rounded-[25px] px-4 py-2 transition-colors duration-200 ${
                selectedRegion === region ? "bg-black text-white" : "bg-white"
              }`}
            >
              {region}
            </button>
          ))}
        </nav>
        <div className="w-[408px] h-[50px] items-center flex justify-between p-[5px] rounded-[25px] border border-black/50 bg-white relative">
          {/* 숫자 필터 버튼 생성 */}
          {[1000, 1300, 1700, 2000].map((number, index) => {
            const isActive = selectedNumbers.includes(number);
            const isBetween =
              selectedNumbers.length === 2 &&
              number >= Math.min(...selectedNumbers) &&
              number < Math.max(...selectedNumbers);

            const isSelected = isActive || isBetween;

            return (
              <React.Fragment key={number}>
                <button
                  onClick={() => handleNumberClick(number)}
                  className={`font-exo2 text-[14px] w-[40px] h-[40px] font-normal normal-case leading-normal tracking-[-0.24px] text-center text-white rounded-[25px] ${
                    isSelected ? "bg-black" : "bg-[#999]"
                  } z-20`}
                >
                  {number}
                </button>
                {/* 직사각형 추가 */}
                {index < 3 && (
                  <div
                    className={`h-[10px] transition-colors duration-300 ${
                      selectedNumbers.length === 2 && isBetween
                        ? "bg-black"
                        : "bg-[#999]"
                    } absolute top-1/2 transform -translate-y-1/2`}
                    style={{
                      left: `${index * 120 + 25}px`, // index에 따라 left 값 조정
                      width: `120px`, // 고정된 너비
                      zIndex: 0, // 버튼 뒤로 위치
                    }}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <HorizontalScroll cards={filteredCards} />
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import paperPlane from "/public/images/paper-plane/paper-plane.webp";

const fetchRandomImage = async () => {
  const response = await axios.get(
    "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
  );
  return response.data.urls.full; // 이미지 URL 반환
};

export default function FullBleedImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  // useRef를 사용하여 이메일 값을 저장
  const emailRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const storedImageUrl = localStorage.getItem("backgroundImageUrl");

    if (storedImageUrl) {
      // localStorage에서 이미지 URL이 있으면 가져오기
      setImageUrl(storedImageUrl);
    } else {
      // API 호출하여 랜덤 이미지 가져오기
      const fetchImage = async () => {
        const url = await fetchRandomImage();
        setImageUrl(url);
        localStorage.setItem("backgroundImageUrl", url); // localStorage에 저장
      };

      fetchImage();
    }
  }, []);

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // 이메일 입력 필드 변경 핸들러
  const handleEmailChange = () => {
    const inputEmail = emailRef.current?.value || "";
    // 이메일이 비어있으면 null로 설정, 아니면 유효성 검사
    if (inputEmail === "") {
      setIsValidEmail(null);
    } else {
      setIsValidEmail(validateEmail(inputEmail)); // 유효성 검사
    }
  };

  // 이메일 제출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEmail = emailRef.current?.value || "";
    console.log("Email submitted:", inputEmail);
    emailRef.current!.value = ""; // 입력 필드 초기화
    setIsValidEmail(null);
  };
  return (
    <section
      className="mt-[110px] mb-0 py-[152px] px-[80px] bg-cover bg-center"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    >
      <header className="block w-[1520px] flex-grow-0 mb-[23px] m-0">
        <h2 className="Text-Style-5">Sed ut perspiciatis unde omnis</h2>
      </header>
      <p className="block w-[1520px] Text-Style-6 flex-grow-0 mt-[23px] mb-[32px] mx-0">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary.
      </p>
      <div className="w-[1520px] h-[1px] flex-grow-0 my-[32px] bg-white-opacity-50"></div>
      <p className="block w-[1518px] h-[43px] Text-Style-7 flex-grow-0 mt-[32px] mb-[95px] ml-[2px] mx-0">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore.
      </p>
      <form
        className="w-[500px] h-[85px] flex-grow-0 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="block font-exo2 w-[204px] h-[19px] flex-grow-0 mb-[16px] mx-auto text-[16px] font-bold leading-normal tracking-[-0.24px] text-center text-white">
          Subscribe to our newsletter
        </label>
        <div
          className={`flex items-center w-[500px] h-[50px] flex-grow-0 mt-[16px] mb-2 mx-0 py-[4px] pr-[10px] pl-[4px] rounded-[7px] border ${
            isValidEmail === true
              ? "border-[#00c300]"
              : isValidEmail === false
              ? "border-[#f63]"
              : "border-white" // 기본 색
          } bg-white-opacity-10 backdrop-blur-[10px]`}
        >
          <input
            type="email"
            ref={emailRef}
            onChange={handleEmailChange}
            className="font-exo2 w-[446px] flex-grow-0 text-[16px] pl-[10px] bg-transparent focus:outline-none font-normal leading-normal tracking-[-0.24px] text-left text-white placeholder-white"
            placeholder="Enter your email"
          />
          <button type="submit" disabled={!isValidEmail}>
            <Image
              className={`my-[5px] ml-[8px] ${
                isValidEmail === false ? "opacity-50" : ""
              }`}
              src={paperPlane}
              alt="버튼"
              width={32}
              height={32}
            />
          </button>
        </div>
        {!isValidEmail && emailRef.current?.value && (
          <span className="font-exo2 ml-[16px] text-[16px] font-light tracking-[-0.24px] text-left text-[#f63]">
            Please enter a valid email!
          </span>
        )}
      </form>
    </section>
  );
}

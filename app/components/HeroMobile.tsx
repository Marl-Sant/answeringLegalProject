import React from "react";
import Image from "next/image";
import heroMobile from "@/public/LandingHeroMobile.jpg";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function HeroMobile() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full h-[686px] opacity-100 mb-[1px]"
    >
      
      <Image
        src={heroMobile}
        alt="24/7 legal answering service representative assisting an attorney over the phone"
        priority
        sizes="(max-width: 428px) 100vw, 428px"
        className="block w-full h-auto"
      />

      
      <div className="absolute inset-x-0 bottom-0 h-[333px] bg-[#161641] px-[16px] py-[32px] flex flex-col items-center">
        
        <div className="w-full max-w-[396px] flex items-center justify-around">
          <span className="font-bold text-[24px] text-white">Excellent 4.84</span>

          <div className="flex flex-col items-center">
            <div className="text-[#EAA221] text-[38px] leading-none">★★★★★</div>
            <div className="text-[16px] text-white leading-tight">based on 230 reviews</div>
          </div>
        </div>

        
        <header className="w-full max-w-[396px] mt-[12px] text-center">
          
          <h1 id="hero-heading" className="font-bold text-[32px] text-white leading-8">
            We&apos;re more than an answering service
          </h1>
        </header>

        <p className="w-full max-w-[396px] mt-[10px] font-semibold text-[16px] text-white text-center">
          Answering Legal has everything you need to make sure your firm never misses another opportunity.
        </p>

        <div className="w-full max-w-[396px] mt-[12px]">
          <ButtonOrLink href="#pricing" padding="px-[16px] py-[16px]" className="w-full">
            See our pricing
          </ButtonOrLink>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import hero from "@/public/LandingHero.jpg"
import ButtonOrLink from '@/app/components/ButtonOrLink';


export default function HeroDesktop() {
  return (
    <section
      aria-label="Hero section"
    >
      <div className="relative mx-auto max-w-[1440px] min-w-[400px] h-[750px] opacity-100 flex ">
        <Image
         src={hero}
        alt="A customer service representative"
        className="h-full object-cover"
        priority
        />
 
      <div className="absolute inset-0 z-5 flex w-full h-[379px] max-w-[1120px] top-[10%] left-[9.5%] p-4 ">
        <div className="max-w-[650px] h-[379px] gap-[32px]">
            <h1 className="font-[Montserrat] font-bold text-[48px] leading-[100%] tracking-[0%] text-white max-w-[650px] h-[93px] align-middle opacity-100 mb-[25px]">
                We’re more than an answering service
            </h1>
            <p className="font-[Montserrat] font-semibold text-[24px] leading-[100%] tracking-[0%] text-white max-w-[650px] h-[46px] align-middle opacity-100">
                Answering Legal has everything you need to make sure your firm never misses another opportunity.
            </p>
            <div className="w-[231px] h-[92px] flex flex-col  gap-[12px] opacity-100">
                <p className="font-[Montserrat] font-bold text-[27px] whitespace-nowrap text-white w-[231px] h-[22px] opacity-100 mt-[15px]">
                    Excellent 4.84
                </p>
                <p className="font-[Montserrat] font-bold text-[48px] leading-[100%] align-middle w-[231px] h-[58px] opacity-100 text-[#EAA221]">
                    ★★★★★
                </p>
                <p className="font-[Montserrat] font-semibold text-[18px] leading-[100%] align-middle text-white">
                        based on 230 reviews
                </p>
            </div>
            <div className="w-[236px] h-[52px] flex gap-[32px] opacity-100 mt-[50px]">
                <ButtonOrLink padding="px-[24px] py-[22px]">See our pricing</ButtonOrLink>
            </div>
        </div>
    </div>
    </div>
    </section>
  );
}

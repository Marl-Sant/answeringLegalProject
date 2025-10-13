import React from "react";
import Image from "next/image";
import heroMobile from "@/public/LandingHeroMobile.jpg"
import Link from "next/link";


export default function HeroMobile(){
    return(
        <div className="w-[428px] h-[686px] opacity-100 relative">
         <Image src={heroMobile} alt="A customer service representative (Mobile)" />
            <div className="w-[428px] h-[333px] px-[16px] py-[32px] bg-[#161641] flex flex-col items-center">
                <div className="w-[396px] h-[42px] flex justify-around">
                    <span className="font-bold text-[24px] text-[#FFFFFF]">Excellent 4.84</span>
                    <div className="flex flex-col w-[177px] h-auto justify-center items-center">
                        <div className="text-[#EAA221] text-[32px] mt-[-10px]">★★★★★</div>
                        <div className="text-[16px] text-[#FFFFFF] mt-[-10px]">based on 230 reviews</div>
                    </div>
                </div>
                <div className="flex flex-col font-bold text-[32px] text-[#FFFFFF] text-center mt-[10px]">We&apos;re more than an answering service</div>
                <div className="flex flex-col font-semibold text-[16px] text-[#FFFFFF] text-center mt-[10px]">Answering Legal has everything you need to make sure your firm never misses another opportunity.</div>
                <div className="w-full flex justify-center">
                <Link
            href="#try"
            className={[
              "inline-flex w-full h-[43.97px] items-center justify-center mt-[10px]",
              "p-[16px]",
              "gap-[10px]",
              "rounded-[12px]",
              "bg-[#0360E6] text-white",
              "text-[16px] font-semibold",
              "transition-colors hover:bg-[#161641]",
            ].join(" ")}
          >
            See our pricing
          </Link>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import Image from "next/image";
import VectorCircle from "@/public/VectorCircle.png"
import VectorLeft from "@/public/VectorLeft.png"
import VectorRight from "@/public/VectorRight.png"
import BlogPic from "@/public/Article_img_placeholder.jpg"
import ButtonOrLink from '@/app/components/ButtonOrLink';
import BlogCardComponent from "./BlogCardComponent";


export default function BlogSectionMobile() {
  return (
    <div className="max-w-[428px] h-[896px] flex px-[16px] py-[64px] flex flex-col gap-[32px] w-full">
        <div className="w-[396px] h-[180px] flex flex-col gap-[32px] items-center">
            <div className="w-[396px] h-[100px] font-bold text-[32px] text-[#161641] text-center mb-[32px]">
                Want to learn more? Read our articles on legal intake.
            </div>
            <div className="w-[160px] h-[48px] flex gap-[64px]">
                <div className="relative w-[48px] h-[48px]">
                    <Image src={VectorCircle} fill alt="A directional button used to spin the carousel of products cards to the left" className="w-[45px] h-[45px] t-[1.47px] left-[1.47px] opacity-50" />
                    <Image src={VectorLeft} alt="Left arrowhead" className="w-[13px] h-[25px] mt-[12px] ml-[15px]"/>
                </div>
                <div className="relative w-[48px] h-[48px]">
                    <Image src={VectorCircle} fill alt="A directional button used to spin the carousel of products cards to the right" className="w-[45px] h-[45px] t-[1.47px] left-[1.47px] opacity-50" />
                    <Image src={VectorRight} alt="Right arrowhead" className="w-[13px] h-[25px] mt-[12px] ml-[20px]"/>
                </div>
            </div>
        </div>
        <div className="flex gap-[25px] justify-center mt-[40px] relative">
            <BlogCardComponent picture={BlogPic} 
            pictureAlt="A lawyer answering a phone call" 
            subtitle="LAWYER WELLNESS" 
            date="June 6, 2024" 
            title="How Viable Is Remote Work For Lawyers?" 
            blurb="This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public."></BlogCardComponent>
        </div>
        <div className="w-[396px] h-[52px] flex items-center justify-center">
            <ButtonOrLink padding="px-[24px] py-[22px]">Go to blog</ButtonOrLink>
        </div>
    </div>
  );
}

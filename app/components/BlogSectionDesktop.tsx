import React from "react";
import Image from "next/image";
import VectorCircle from "@/public/VectorCircle.png"
import VectorLeft from "@/public/VectorLeft.png"
import VectorRight from "@/public/VectorRight.png"
import BlogPic from "@/public/Article_img_placeholder.jpg"
import ButtonOrLink from '@/app/components/ButtonOrLink';
import BlogCardComponent from "./BlogCardComponent";


export default function BlogSectionDesktop() {
  return (
    <div className="max-w-[1440px] h-[738px] px-[64px] py-[16px] flex flex-col gap-[32px] justify-center items-center w-full">
        <div className="max-w-[1408px] w-full h-[22px] flex justify-center items-center">
            <p className="max-w-[1408px] h-[22px] font-bold text-[32px] text-[#161641]">Want to learn more? Read our articles on legal intake.</p>
        </div>
        <div className="max-w-[1248px] w-full h-[472px] flex items-center justify-between mt-[50px]">
            <div className="relative w-[48px] h-[48px]">
                <Image src={VectorCircle} fill alt="A directional button used to spin the carousel of products cards to the left" className="w-[45px] h-[45px] t-[1.47px] left-[1.47px] opacity-50" />
                <Image src={VectorLeft} alt="Left arrowhead" className="w-[13px] h-[25px] mt-[12px] ml-[15px]"/>
            </div>
            <BlogCardComponent picture={BlogPic} pictureAlt="A lawyer answering a phone call" subtitle="LAWYER WELLNESS" date="June 6, 2024" title="How Viable Is Remote Work For Lawyers?" blurb="This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public."></BlogCardComponent>
            <BlogCardComponent picture={BlogPic} pictureAlt="A lawyer answering a phone call" subtitle="LAWYER WELLNESS" date="June 6, 2024" title="How Viable Is Remote Work For Lawyers?" blurb="This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public."></BlogCardComponent>
            <BlogCardComponent picture={BlogPic} pictureAlt="A lawyer answering a phone call" subtitle="LAWYER WELLNESS" date="June 6, 2024" title="How Viable Is Remote Work For Lawyers?" blurb="This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public."></BlogCardComponent>
            <div className="relative w-[48px] h-[48px]">
                <Image src={VectorCircle} fill alt="A directional button used to spin the carousel of products cards to the right" className="w-[45px] h-[45px] t-[1.47px] left-[1.47px] opacity-50" />
                <Image src={VectorRight} alt="Right arrowhead" className="w-[13px] h-[25px] mt-[12px] ml-[20px]"/>
            </div>
        </div>
        <div className="max-w-[1408px] w-full h-[52px] flex justify-center mt-[30px]">
            <ButtonOrLink padding="px-[24px] py-[22px]">Go to blog</ButtonOrLink>
        </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import hero from "@/public/LandingHero.jpg";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function HeroDesktop() {
  return (

    /*
    My one and only H1 on the page to kick off our page hierachy. I also prioritized the
    hero image since it is LCP. As always, the alt text is descriptive and keyword-related.
    I've also made sure that our strong primary message of "We're more than an answering
    service" in a heading to improve our relevance signals.

    Applies to my mobile version as well
    */
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-[1440px] min-w-[400px]"
    >
      <div className="relative h-[750px] opacity-100">
        <Image
          src={hero}
          alt="24/7 legal answering service representative assisting an attorney over the phone"
          className="w-full h-full object-cover"
          priority
          sizes="1440px"
        />

        <div className="absolute inset-0 z-10 flex p-4"
             style={{ top: "10%", left: "9.5%" }}>
          <div className="w-full max-w-[650px] space-y-4">
            <h1
              id="hero-heading"
              className="font-bold text-[48px] leading-[100%] text-white mb-[16px]"
            >
              We’re more than an answering service
            </h1>

            <p className="font-semibold text-[24px] leading-[100%] text-white">
              Answering Legal has everything you need to make sure your firm never misses another opportunity.
            </p>

            <div className="mt-[12px]">
              <p className="font-bold text-[27px] text-white whitespace-nowrap">
                Excellent 4.84
              </p>
              <p className="font-bold text-[48px] leading-[100%] text-[#EAA221]">
                ★★★★★
              </p>
              <p className="font-semibold text-[18px] leading-[100%] text-white">
                based on 230 reviews
              </p>
            </div>

            <div className="mt-[32px]">
              <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">
                See our pricing
              </ButtonOrLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import CRMgraphic from "@/public/CRM-Graphic.png";
import ListItemComponent from "./ListItemComponent";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function CRMSectionMobile() {
  return (
    <section
      id="crm"
      aria-labelledby="crm-heading"
      className="relative mx-auto max-w-[428px] w-full h-[907px] px-[16px] py-[32px] flex flex-col gap-[50px] mb-[50px]"
    >
      <div className="mx-auto max-w-[396px] w-full flex flex-col gap-[32px]">
        
        <figure className="w-[396px]">
          <Image
            src={CRMgraphic}
            alt="Answering Legal CRM integration mock-up for a law firm contact"
            className="w-full h-auto"
            sizes="396px"
            priority={false}
          />
          
        </figure>

       
        <div className="max-w-[396px] py-[32px]">
          <header className="mb-[12px]">
            <h2 id="crm-heading" className="font-bold text-[32px] text-[#141414]">
              Your data’s in good hands
            </h2>
            <span
              aria-hidden="true"
              className="mt-[10px] block h-[2px] w-full rounded-[8px] bg-[#3CCED7]"
            />
          </header>

          <p className="text-[20px] text-[#141414]">
            Our partnership with your CRM enables a seamless flow of information.
          </p>

          <ul className="mt-[24px] list-none">
            <ListItemComponent
              iconAlt=""
              message="Answering Legal's receptionists take down exactly the information you need."
            />
            <ListItemComponent
              iconAlt=""
              message="Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be."
            />
            <ListItemComponent
              iconAlt=""
              message="All you’ll have to do is open your CRM and follow up to secure your new client’s business."
            />
          </ul>

          <div className="mt-[24px]">
            <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">
              See our pricing
            </ButtonOrLink>
          </div>
        </div>
      </div>
    </section>
  );
}

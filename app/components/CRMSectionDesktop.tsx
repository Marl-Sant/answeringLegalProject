import React from "react";
import Image from "next/image";
import CRMgraphic from "@/public/CRM-Graphic.png";
import ListItemComponent from "./ListItemComponent";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function CRMSectionDesktop() {

    /*
    I've used a <section> with an id of "crm" and the aria-labelledby="crm-heading" here
    with a descriptive h2 heading to create a crawlable, linkable anchor and clear hierarchy.
    I also used a meaningful alt with for the image to assist with searchability.

    This applies to the mobile version as well :)
    */
  return (
    <section
      id="crm"
      aria-labelledby="crm-heading"
      className="mt-[200px] w-full max-w-[1440px] h-[581px] px-[32px] py-[64px] flex items-center justify-center"
    >
      <div className="w-full max-w-[1100px] flex gap-[32px]">
        
        <figure className="w-full max-w-[534px] min-w-[364px]">
          <Image
            src={CRMgraphic}
            alt="Answering Legal CRM integration mock-up for a law firm contact"
            className="w-full h-auto"
            sizes="534px"
            priority={false}
          />
          
        </figure>

        
        <div className="w-full max-w-[534px] min-w-[400px] py-[32px]">
          <header className="mb-[14px]">
            <h2
              id="crm-heading"
              className="font-bold text-[32px] text-[#141414]"
            >
              Your data’s in good hands
            </h2>
            
            <span
              aria-hidden="true"
              className="block mt-[12px] h-[2px] w-full max-w-[534px] rounded-[8px] bg-[#3CCED7]"
            />
          </header>

          <p className="text-[20px] text-[#141414]">
            Our partnership with your CRM enables a seamless flow of information.
          </p>

          <ul className="mt-[10px] list-none">
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

          <div className="mt-[32px]">
            <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">
              See our pricing
            </ButtonOrLink>
          </div>
        </div>
      </div>
    </section>
  );
}

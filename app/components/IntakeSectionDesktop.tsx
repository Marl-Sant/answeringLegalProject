import React from "react";
import Image from "next/image";
import receptionist from "@/public/Receptionist_IMG.png";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function IntakeSectionDesktop() {

  /*
  This section was labelled with "intake-heading" and given the id of "intake". Quickly
  followed up with an H2 this gives a clean structure for crawlers to work with. I was also
  cognizant to use the keywords of "intake/virtual receptionist" near the top of the section
  to help with indexing. Also, we have the added benefit of having the text come before the
  image which helps crawlers help undestand the reference.
  */

  return (
    <section
      id="intake"
      aria-labelledby="intake-heading"
      className="mx-auto w-full max-w-[1440px] px-[32px] py-[64px]"
    >
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[minmax(364px,534px)_minmax(364px,534px)] items-center gap-[32px]">
       
        <div className="w-full">
          <h2
            id="intake-heading"
            className="mb-[24px] max-w-[534px] text-[32px] font-bold text-[#141414]"
          >
            Design your perfect legal intake process
          </h2>

          
          <hr
            aria-hidden="true"
            className="mb-[24px] w-full max-w-[534px] rounded-[8px] border-t-[2px] border-[#3CCED7]"
          />

          <p className="mb-[28px] max-w-[534px] text-[20px] font-[400] leading-[1.4] text-[#141414]">
            Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.
          </p>

          <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">
            See our pricing
          </ButtonOrLink>
        </div>

      
        <figure className="w-full">
          <Image
            src={receptionist}
            alt="Attorney support specialist providing client intake through Answering Legal’s 24/7 phone service"
            className="h-auto w-full rounded-[12px] object-cover"
            sizes="(min-width: 1100px) 534px, 50vw"
            priority={false}
          />
        </figure>
      </div>
    </section>
  );
}

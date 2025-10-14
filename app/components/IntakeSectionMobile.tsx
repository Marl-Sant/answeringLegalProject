import React from "react";
import Image from "next/image";
import receptionist from "@/public/Receptionist_IMG.png";
import ButtonOrLink from "@/app/components/ButtonOrLink";

export default function IntakeSectionMobile() {
  return (
    <section
      id="intake-mobile"
      aria-labelledby="intake-mobile-heading"
      className="mx-auto w-[428px] px-[32px] py-[32px]"
    >
      <div className="mx-auto w-[364px] flex flex-col gap-[32px]">
        {/* Image */}
        <figure className="w-[364px]">
          <Image
            src={receptionist}
            alt="Attorney support specialist providing client intake through Answering Legal’s 24/7 phone service"
            className="w-full h-auto rounded-[12px] object-cover"
            sizes="364px"
            priority={false}
          />
          <figcaption className="sr-only">
            Professional receptionist handling law firm client intake.
          </figcaption>
        </figure>


        <div className="w-full">
          <h2
            id="intake-mobile-heading"
            className="mb-[16px] text-[32px] font-bold text-[#141414]"
          >
            Design your perfect legal intake process
          </h2>

          <hr
            aria-hidden="true"
            className="mb-[16px] w-full rounded-[8px] border-t-[2px] border-[#3CCED7]"
          />

          <p className="text-[20px] font-[400] leading-[1.4] text-[#141414]">
            Get everything you need out of every new client call. The virtual
            receptionists at our legal intake call center will use your unique
            specifications to perform a legal intake for every new client caller.
          </p>
        </div>

        <div className="w-full">
          <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">
            See our pricing
          </ButtonOrLink>
        </div>
      </div>
    </section>
  );
}

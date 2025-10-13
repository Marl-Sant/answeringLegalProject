import React from "react";
import Image from "next/image";
import receptionist from "@/public/Receptionist_IMG.png"
import ButtonOrLink from '@/app/components/ButtonOrLink';


export default function IntakeSectionMobile() {
  return (
    <div className="max-w-[428px] w-full h-[829px] p-[32px] gap-[50px] flex justify-center items-center">
        <div className="max-w-[364px] h-[765px] gap-[32px]">
        <div className="max-w-[364px] h-[300px] min-w-[364px] w-full mb-[40px]">
            <Image src={receptionist} alt="A customer service representative on the phone" />
        </div>
            <div className="max-w-[534px] w-full h-[369px] mix-w-[400px] py-[32px] gap-[32px]">
                <p className="font-bold text-[32px] text-[#141414] max-w-[534px] w-full h-[61px] mb-[50px]">Design your perfect legal intake process</p>
                <hr className="border-t-[2px] border-[#3CCED7] max-w-[534px] w-full rounded-[8px] mb-[15px]" />
                <p className="max-w-[534px] w-full h-[110px] font-[400] text-[20px] text-[#141414]">Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.</p>
            </div>
            <ButtonOrLink href="#pricing" padding="px-[24px] py-[22px]">See our pricing</ButtonOrLink>
        </div>
    </div>
  );
}

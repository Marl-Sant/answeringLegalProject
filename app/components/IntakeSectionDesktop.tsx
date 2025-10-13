import React from "react";
import Image from "next/image";
import receptionist from "@/public/Receptionist_IMG.png"
import ButtonOrLink from '@/app/components/ButtonOrLink';


export default function IntakeSectionDesktop() {
  return (
    <div className="max-w-[1440px] w-full h-[581px] px-[32px] py-[64px] gap-[50px] flex justify-center items-center">
        <div className="max-w-[1100px] h-[453px] gap-[32px]">
            <div className="max-w-[534px] w-full h-[369px] mix-w-[400px] py-[32px] gap-[32px] mb-[-80px]">
                <p className="font-bold text-[32px] text-[#141414] max-w-[534px] w-full h-[61px] mb-[40px]">Design your perfect legal intake process</p>
                <hr className="border-t-[2px] border-[#3CCED7] max-w-[534px] w-full rounded-[8px]" />
                <p className="max-w-[534px] w-full h-[110px] font-[400] text-[20px] text-[#141414]">Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.</p>
            </div>
            <ButtonOrLink padding="px-[24px] py-[22px]">See our pricing</ButtonOrLink>
        </div>
        <div className="max-w-[534px] h-[453px] min-w-[364px] w-full mb-[60px]">
            <Image src={receptionist} alt="A customer service representative on the phone" />
        </div>
    </div>
  );
}

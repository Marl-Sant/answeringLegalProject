import React from "react";
import Image from "next/image";
import CRMgraphic from "@/public/CRM-Graphic.png"
import ListItemComponent from "./ListItemComponent"
import ButtonOrLink from '@/app/components/ButtonOrLink';


export default function CRMSectionMobile() {
  return (
    <div className="max-w-[428px] h-[907px] px-[16px] py-[32px] flex flex-col gap-[50px]">
        <div className="max-w-[396px] h-[842px] flex flex-col gap-[32px]">
            <div className="max-w-[396px] h-[300px] min-w-[364px]">
                <Image src={CRMgraphic} alt="Image of a lawyer's information as a graphic (Mobile)" />
            </div>
            <div className="max-w-[396px] h-[511px] min-w-[364px] py-[32px] gap-[32px]">
                <p className="font-bold text-[32px] text-[#141414]">Your data&apos;s in good hands</p>
                    <hr className="border-t-[2px] border-[#3CCED7] max-w-[534px] w-full rounded-[8px] my-[10px]" />
                    <p className="max-w-[534px] h-[46px] font-[400] text-[20px] text-[#141414]">Our partnership with your CRM enables a seamless flow of information.</p>
                     <ul className="list-none mb-[15px]">
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="Answering Legal&apos;s receptionists take down exactly the information you need." />
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="Through native API integrations with our proprietary software, we make sure it&apos;s immediately where you need it to be." />
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="All you&apos;ll have to do is open your CRM and follow up to secure your new client&apos;s business." />
                     </ul>
                     <ButtonOrLink padding="px-[24px] py-[22px]">See our pricing</ButtonOrLink>
            </div>
        </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import CRMgraphic from "@/public/CRM-Graphic.png"
import ListItemComponent from "./ListItemComponent"
import ButtonOrLink from '@/app/components/ButtonOrLink';


export default function CRMSectionDesktop() {
  return (
    <div className="mt-[200px] max-w-[1440px] h-[581px] w-full px-[32px] py-[64px] gap-50px flex justify-center items-center">
        <div className="max-w-[1100px] h-[453px] w-full gap-[32px] flex">
            <div className="max-w-[534px] h-[453px] min-w-[364px]">
                <Image src={CRMgraphic} alt="Image of a lawyer's information as a graphic" />
            </div>
            <div className="max-w-[534px] h-[453px] min-w-[400px] py-[32px] gap-[32px]">
                <div className="max-w-[534px] h-[305px] min-w-[450px] gap-[24px] mb-[55px]">
                    <p className="font-bold text-[32px] text-[#141414]">Your data’s in good hands</p>
                    <hr className="border-t-[2px] border-[#3CCED7] max-w-[534px] w-full rounded-[8px]" />
                    <p className="max-w-[534px] h-[46px] font-[400] text-[20px] text-[#141414]">Our partnership with your CRM enables a seamless flow of information.</p>
                     <ul className="list-none">
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="Answering Legal's receptionists take down exactly the information you need." />
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be." />
                        <ListItemComponent iconAlt="A checkmark that delinates a CRM benefit" message="All you’ll have to do is open your CRM and follow up to secure your new client’s business." />
                     </ul>
                </div>
                <ButtonOrLink padding="px-[24px] py-[22px]">See our pricing</ButtonOrLink>
            </div>
        </div>
    </div>
  );
}

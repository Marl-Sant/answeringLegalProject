import React from "react";
import Form from "./FormComponent";


export default function FormSectionDesktop() {
  return (
    <div className="max-w-[1440px] w-full h-[731px] px-[32px] py-[64px] flex gap-[64px] bg-[#161641] justify-center items-center">
        
        <div className="max-w-[1120px] h-[603px] flex gap-[64px] justify-center items-center">
            <div className="max-w-[532px] w-full h-[347px] flex flex-col gap-[10px]">
                <div className="max-w-[532px] w-full h-[211px] font-bold leading-14 text-[48px] text-[#FFFFFF]">
                    24/7 coverage at a fraction of the cost of in-house receptionists.
                </div>
                <div className="max-w-[532px] w-full h-[104px] font-semibold mt-[15px] leading-8 text-[24px] text-[#FFFFFF]">
                    Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.
                </div>
            </div>
        </div>

        <div className="max-w-[524px] w-full h-[603px] min-w-[396px] rounded-[20px] p-[32px] flex gap-[32px] bg-[#FFFFFF]">
            <div className="max-w-[460px] h-[539px] flex flex-col gap-[32px]">
                <div className="max-w-[460px] w-full h-[75px] leading-8 font-semibold text-[24px] font-[#161641]">
                    Tell us about yourself. We’ll show you all of our pricing information on the next page.
                </div>
                <Form />
            </div>
        </div>
    </div>
  );
}

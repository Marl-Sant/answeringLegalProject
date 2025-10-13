import React from "react";
import Form from "./FormComponent";


export default function FormSectionMobile(){
    return(
        <div className="w-[428px] px-[16px] py-[64px] bg-[#161641] flex justify-center items-center">
            <div className="w-[396px] flex gap-[64px] flex-col">
                <div className="w-[400px] flex flex-col">
                    <div className="w-[400px] h-[100px]">
                        <p className="font-bold text-[32px] text-[#FFFFFF]">
                            24/7 coverage at a fraction of the cost of in-house receptionists.
                        </p>
                    </div>
                    <div className="w-[400px] h-[133px] mt-[65px]">
                        <p className="font-semibold text-[24px] text-[#FFFFFF]">Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing page, where you can find out just how little 24/7 legal intake will cost you.</p>
                    </div>
                </div>
                <div className="w-[396px] h-[632px] rounded-[20px] p-[32px] flex flex-col gap-[32px] bg-[#FFFFFF]">
                <div className="max-w-[460px] w-full h-[75px] leading-8 font-semibold text-[24px] font-[#161641] mb-[40px]">
                    Tell us about yourself. We’ll show you all of our pricing information on the next page.
                </div>
                <Form />
                </div>
            </div>
        </div>
    )
}

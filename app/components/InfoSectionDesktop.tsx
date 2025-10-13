import React from "react";
import AnsweringService from "@/public/AL_2ColorIcon-AnsweringService.svg"
import AiChatBotLogo from "@/public/AL_2ColorIcon-Chatbot.svg"
import LiveTranslationLogo from "@/public/AL_2ColorIcon-LVCv2.svg"
import DesktopFeatureCards from "./DesktopFeatureCards";


export default function InfoSectionDesktop() {
    return(
        <div className="max-w-[1440px] h-[340px] px-[32px] py-[64px] gap-[32px] flex z-10 flex flex-col w-full items-center mt-[-250px]">
            <div className="max-w-[1376px] h-[48px] px-[80px] gap-[24px] justify-center items-center">
                <p className="max-w-[1216px] h-[22px] font-bold text-[32px] justify-center items-center text-[#FFFFFF] text-shadow-[2.09px_2.09px_4.17px_#00000040]">
                    Here&apos;s what we can do for your law firm
                </p>
            </div>
            <hr className="border-t-[2px] border-[#3CCED7] max-w-[1216px] w-full shadow-[2.09px_2.09px_4.17px_#00000040] rounded" />
            <div className="max-w-[1376px] h-[370px] flex justify-around w-full gap-[32px]">
                <DesktopFeatureCards iconSrc={AnsweringService} title="Legal answering service" message="With 24/7 legal intake, you'll never miss a potential client's call."></DesktopFeatureCards>
                <DesktopFeatureCards iconSrc={AiChatBotLogo} title="   AI intake     chatbot" message="Turn web leads into clients with a chatbot powered by the latest in AI technology."></DesktopFeatureCards>
                <DesktopFeatureCards iconSrc={LiveTranslationLogo} title="Live translation services" message="Break through the language barrier and schedule video conferences with live interpreters."></DesktopFeatureCards>
            </div>
        </div>
    )
}

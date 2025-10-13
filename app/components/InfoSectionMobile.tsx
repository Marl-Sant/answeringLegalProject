import React from "react";
import AnsweringService from "@/public/AL_2ColorIcon-AnsweringService.svg"
import AiChatBotLogo from "@/public/AL_2ColorIcon-Chatbot.svg"
import LiveTranslationLogo from "@/public/AL_2ColorIcon-LVCv2.svg"
import DesktopFeatureCards from "./DesktopFeatureCards";



export default function InfoSectionMobile() {
    return(
        <div className="w-[428px] h-[1406px] px-[16px] py-[64px] gap-[32px] flex justify-center">
            <div className="w-[396px] h-[72px] px-[16px] flex gap-[24px] flex-col">
                <p className="w-[364px] h-[46px] text-center font-bold text-[24px] mb-[15px]">Here&apos;s what we can do for your law firm</p>
                <hr className="border-t-[2px] border-[#3CCED7] max-w-[1216px] w-full rounded" />
                <DesktopFeatureCards iconSrc={AnsweringService} title="Legal answering service" message="With 24/7 legal intake, you'll never miss a potential client's call."></DesktopFeatureCards>
                <DesktopFeatureCards iconSrc={AiChatBotLogo} title="   AI intake     chatbot" message="Turn web leads into clients with a chatbot powered by the latest in AI technology."></DesktopFeatureCards>
                <DesktopFeatureCards iconSrc={LiveTranslationLogo} title="Live translation services" message="Break through the language barrier and schedule video conferences with live interpreters."></DesktopFeatureCards>
            </div>
        </div>
    )
}

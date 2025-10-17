import React from "react";
import AnsweringService from "@/public/AL_2ColorIcon-AnsweringService.svg";
import AiChatBotLogo from "@/public/AL_2ColorIcon-Chatbot.svg";
import LiveTranslationLogo from "@/public/AL_2ColorIcon-LVCv2.svg";
import DesktopFeatureCards from "./DesktopFeatureCards";


export default function InfoSectionMobile() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="w-full max-w-[428px] h-[1406px] px-[16px] py-[64px] flex justify-center"
    >
      <div className="w-[396px] flex flex-col gap-[24px]">
        <header className="w-[396px] px-[16px]">
          <h2
            id="features-heading"
            className="w-[364px] text-center font-bold text-[24px] mb-[15px] text-[#141414]"
          >
            Here&apos;s what we can do for your law firm
          </h2>
          <span
            aria-hidden="true"
            className="block h-[2px] w-full rounded bg-[#3CCED7]"
          />
        </header>

        <div role="list" aria-label="Core features" className="flex flex-col gap-[16px] items-center">
          <DesktopFeatureCards
            iconSrc={AnsweringService}
            iconAlt="Legal answering service"
            title="Legal answering service"
            titleSize= "text-[30.05px]"
            messageSize="text-[18px]" 
            message="With 24/7 legal intake, you'll never miss a potential client's call."
          />
          <DesktopFeatureCards
            iconSrc={AiChatBotLogo}
            iconAlt="AI intake chatbot"
            title="           AI intake            chatbot"
            titleSize= "text-[30.05px]"
            messageSize="text-[18px]" 
            message="Turn web leads into clients with a chatbot powered by the latest in AI technology."
          />
          <DesktopFeatureCards
            iconSrc={LiveTranslationLogo}
            iconAlt="Live translation services"
            title="Live translation services"
            titleSize= "text-[30.05px]"
            messageSize="text-[18px]" 
            message="Break through the language barrier and schedule video conferences with live interpreters."
          />
        </div>
      </div>
    </section>
  );
}

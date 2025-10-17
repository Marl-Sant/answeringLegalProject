import React from "react";
import AnsweringService from "@/public/AL_2ColorIcon-AnsweringService.svg";
import AiChatBotLogo from "@/public/AL_2ColorIcon-Chatbot.svg";
import LiveTranslationLogo from "@/public/AL_2ColorIcon-LVCv2.svg";
import DesktopFeatureCards from "./DesktopFeatureCards";

export default function InfoSectionDesktop() {
  return (

    /*
    I provided this section with the id of features and aria labelled with with 
    "feature-heading" to help crawlers understand that the block is a service/features
    section. I made sure that the "Here's what we can do for your law firm" phrase was
    in a heading since it uses keyword-rich phrasing for contextual relevance.

    Each one of my DesktopFeatureCards uses the semantic elements of figure and 
    role="listitem" sp all the content remains crawlable and structured.

    Images all have an alt text that hold phrases populated with key service keywords

    Also applies to the mobile version
    */
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative z-10 mx-auto w-full max-w-[1440px] h-[340px] px-[32px] py-[64px] flex flex-col items-center gap-[32px]"
    >
      <header className="w-full max-w-[1376px] px-[80px] flex items-center justify-center relative -mt-[250px]">
        <h2
          id="features-heading"
          className="max-w-[1216px] font-bold text-[32px] text-[#FFFFFF] text-center text-shadow-[2.09px_2.09px_4.17px_#00000040] whitespace-nowrap "
        >
          Here&apos;s what we can do for your law firm
        </h2>
        
      </header>

    
      <hr className="border-t-[2px] border-[#3CCED7] max-w-[1216px] w-full shadow-[2.09px_2.09px_4.17px_#00000040] rounded" />

      
      <div
        role="list"
        aria-label="Core features"
        className="w-full max-w-[1376px] h-[370px] flex justify-around items-start gap-[32px]"
      >
        <DesktopFeatureCards
          role="listitem"
          iconSrc={AnsweringService}
          iconAlt="Legal answering service"
          title="Legal answering service"
          message="With 24/7 legal intake, you'll never miss a potential client's call."
        />
        <DesktopFeatureCards
          role="listitem"
          iconSrc={AiChatBotLogo}
          iconAlt="AI intake chatbot"
          title="   AI intake   chatbot"
          message="Turn web leads into clients with a chatbot powered by the latest in AI technology."
        />
        <DesktopFeatureCards
          role="listitem"
          iconSrc={LiveTranslationLogo}
          iconAlt="Live translation services"
          title="Live translation services"
          message="Break through the language barrier and schedule video conferences with live interpreters."
        />
      </div>
    </section>
  );
}

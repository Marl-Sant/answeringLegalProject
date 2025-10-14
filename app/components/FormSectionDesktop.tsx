import React from "react";
import Form from "./FormComponent";

export default function FormSectionDesktop() {
  return (
    /*
    Following suit with my previous components, I used <section> and H2 to establist a clear
    hierachy, making sure I didn't skip levels for crawl clarity. I also used keyword-rich
    content context near the form for indexing. My form uses aria-labels for our customers
    that need assistive tech and indirectly boosting our SEO.
    
    This also applies to my mobile version
    */
    <section
      aria-labelledby="form-desktop-heading"
      className="mx-auto w-full max-w-[1440px] bg-[#161641] px-[32px] py-[64px]"
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-start justify-between gap-[64px]">
        
        <div className="w-full max-w-[532px]">
          <h2
            id="form-desktop-heading"
            className="mb-[15px] text-[48px] font-bold leading-[1.15] text-white"
          >
            24/7 coverage at a fraction of the cost of in-house receptionists.
          </h2>
          <p className="mt-[10px] text-[24px] font-semibold leading-8 text-white">
            Don’t believe us? Fill out the form on the right, and we’ll take you to our
            pricing page, where you can find out just how little 24/7 legal intake will
            cost you.
          </p>
        </div>

        
        <div
          className="
            w-full max-w-[524px] min-w-[396px]
            rounded-[20px] bg-white p-[32px]
            flex flex-col
            h-auto min-h-[620px]
            overflow-visible fit-content
          "
          aria-label="Contact form panel"
        >
          <div className="mb-[24px] text-[24px] font-semibold leading-8 text-[#161641]">
            Tell us about yourself. We’ll show you all of our pricing information on the next page.
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
}

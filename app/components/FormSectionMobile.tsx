import React from "react";
import Form from "./FormComponent";

export default function FormSectionMobile() {
  return (
    <section
      aria-labelledby="form-mobile-heading"
      className="mx-auto w-full bg-[#161641] px-[16px] py-[64px]"
    >
      <div className="mx-auto w-[396px]">
        <div className="mb-[32px]">
          <h2
            id="form-mobile-heading"
            className="mb-[16px] text-[32px] font-bold text-white"
          >
            24/7 coverage at a fraction of the cost of in-house receptionists.
          </h2>
          <p className="mt-[16px] text-[24px] font-semibold text-white">
            Don’t believe us? Fill out the form on the right, and we’ll take you to our
            pricing page, where you can find out just how little 24/7 legal intake will
            cost you.
          </p>
        </div>

        <div
          className="
            w-[396px] rounded-[20px] bg-white p-[32px]
            flex flex-col
            h-auto min-h-[680px]   /* baseline height; grows as needed */
            overflow-visible
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

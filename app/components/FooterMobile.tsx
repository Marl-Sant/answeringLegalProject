import React from "react";
import Link from "next/link";

const FOOTER_SECTIONS = [
  "Our Services",
  "Company",
  "Partnerships",
  "Resources",
  "Support",
  "Follow Us",
];

export default function FooterMobile() {
  return (
    <footer
      id="site-footer-mobile"
      aria-labelledby="footer-mobile-heading"
      className="
        mx-auto w-full
        px-[16px] py-[72px]
        flex flex-col justify-center items-center gap-[32px]
        bg-[#161641]
      "
    >

      <div className="w-[396px] flex flex-col items-center gap-[13px] text-center">
        <h2
          id="footer-mobile-heading"
          className="font-bold text-[24px] text-white leading-snug"
        >
          Have questions? Our team is here to help.{" "}
          <a
            href="tel:+16314008888"
            className="hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3CCED7] rounded"
          >
            Call 631-400-8888
          </a>
        </h2>
        <p className="font-extrabold text-[12px] text-[#3CCED7]">
          MONDAY TO FRIDAY FROM 9 AM TO 7 PM EST
        </p>
      </div>
        <hr
          className="w-full h-[4px] bg-[#16166b85] border-0 mt-[30px]"
          aria-hidden="true"
        />

      <nav
        aria-label="Footer sections"
        className="w-full h-auto grid grid-cols-2 grid-rows-3 gap-[32px] px-[25px]"
      >
        {FOOTER_SECTIONS.map((section) => (
          <Link
            key={section}
            href="#"
            className="font-semibold text-[24px] text-white text-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3CCED7] rounded"
            aria-label={`Navigate to ${section}`}
          >
            {section}
          </Link>
        ))}
      </nav>

      <hr
        className="w-full h-[4px] bg-[#16166b85] border-0 mt-[20px]"
        aria-hidden="true"
      />

      <div className="w-[331px] h-[15px] flex justify-center items-center">
        <p className="font-extrabold text-[12px] text-center text-white">
          © 2024 Answering Legal · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

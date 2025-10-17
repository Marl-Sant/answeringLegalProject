import React from "react";
import Link from "next/link";

type FooterLink = { label: string; href: string; external?: boolean };

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

 /*
    With the crawl structure in mind, I utilized the semantic <footer> coupled with
    aria-lablledby and a <h2>/<h3> structure. One of the few chances I had to also implement
    a "click-to-call" telephone number in my mobile version and desktop. I included that to enhance
    mobile UX and SEO.
*/

const COLUMNS: FooterColumn[] = [
  {
    title: "Our Service",
    links: [
      { label: "Who We Serve", href: "#who-we-serve" },
      { label: "FAQs", href: "#faqs" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "What Is An Answering Service?", href: "#what-is-answering-service" },
      { label: "What Is A Legal Intake Receptionist?", href: "#what-is-legal-intake" },
      { label: "What Is A Virtual Receptionist?", href: "#what-is-virtual-receptionist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Meet The Team", href: "#team" },
      { label: "Our Authors", href: "#authors" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { label: "Integrations", href: "#integrations" },
      { label: "Affiliate Program", href: "#affiliate" },
      { label: "Law Firm Marketing", href: "#law-firm-marketing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Podcast", href: "#podcast" },
      { label: "Videos", href: "#videos" },
      { label: "Let's Talk Legal", href: "#lets-talk-legal" },
      { label: "Marketing", href: "#marketing" },
      { label: "The Answering Legal", href: "#the-answering-legal" },
      { label: "Book Club", href: "#book-club" },
      { label: "Top Legal Softwares", href: "#top-legal-softwares" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Submit A Ticket", href: "#ticket" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms Of Service", href: "#tos" },
      { label: "Employment", href: "#employment" },
      { label: "Opportunities", href: "#opportunities" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Facebook", href: "https://facebook.com", external: true },
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
    ],
  },
];

export default function FooterDesktop() {
  return (

    <footer
      id="site-footer"
      aria-labelledby="footer-heading"
      className="mx-auto w-full max-w-[1440px] h-[763px] px-[106px] py-[100px] flex flex-col items-center gap-[45px] bg-[#161641]"
    >
      
      <div className="w-full max-w-[456px] flex flex-col items-center justify-center gap-[13px]">
        <h2 id="footer-heading" className="w-full text-center font-bold text-[24px] text-white">
          Have questions? Our team is here to help. Call{" "}
          <a href="tel:+16314008888" className="hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded">
            631-400-8888
          </a>
        </h2>
        <p className="w-full max-w-[294px] text-center font-extrabold text-[12px] text-[#3CCED7]">
          MONDAY TO FRIDAY FROM 9AM TO 7PM EST.
        </p>
      </div>

        <hr className="max-w-[1228px] w-full border-t-[3px] border-[#16166b85]" />

     
      <nav
        className="w-full max-w-[1228px] h-[294px] flex justify-between"
        aria-label="Footer navigation"
      >
        {COLUMNS.map((col) => (
          <div key={col.title} className="w-full max-w-[257px] h-[226px] flex flex-col">
            <h3 className="font-semibold text-[24px] text-white">{col.title}</h3>
            <ul className="list-none">
              {col.links.map((link) => (
                <li key={`${col.title}-${link.label}`} className="mb-[6px]">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-[14px] text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded"
                      aria-label={`${col.title}: ${link.label}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-normal text-[14px] text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded"
                      aria-label={`${col.title}: ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

     
      <hr className="max-w-[1228px] w-full border-t-[3px] border-[#16166b85]" />
      
      <div className=" w-full max-w-[331px] h-[15px] flex items-center justify-center">
        <p className="font-extrabold text-[12px] text-center text-white">
          © 2024 Answering Legal · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

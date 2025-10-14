'use client';

import React from "react";
import Image from "next/image";
import Script from "next/script";
import VectorCircle from "@/public/VectorCircle.png";
import VectorLeft from "@/public/VectorLeft.png";
import VectorRight from "@/public/VectorRight.png";
import BlogPic from "@/public/Article_img_placeholder.jpg";
import ButtonOrLink from "@/app/components/ButtonOrLink";
import BlogCardComponent from "./BlogCardComponent";

type Post = {
  picture: typeof BlogPic;
  pictureAlt: string;
  subtitle: string;
  date: string; 
  dateISO: string;
  title: string;
  blurb: string;
  href: string;
};

const POSTS: Post[] = [
  {
    picture: BlogPic,
    pictureAlt:
      "Answering Legal representative speaking with a law firm client on the phone",
    subtitle: "LAWYER WELLNESS",
    date: "June 6, 2024",
    dateISO: "2024-06-06",
    title: "How Viable Is Remote Work For Lawyers?",
    blurb:
      "This month on the Answering Legal blog, we’ll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the COVID-19 pandemic, remote work has steadily been on the rise across all sectors of the economy, both private and public.",
    href: "#post-4",
  },
];

export default function BlogSectionMobile() {
  const listId = "blog-cards-mobile";

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="mx-auto w-[428px] h-[915px] px-[16px] py-[64px] flex flex-col gap-[32px]"
    >
      
      <div className="w-[396px] h-[180px] flex flex-col gap-[32px] items-center mx-auto">
        <h2
          id="blog-heading"
          className="w-[396px] h-[100px] font-bold text-[32px] text-[#161641] text-center mb-[32px]"
        >
          Want to learn more? Read our articles on legal intake.
        </h2>

        
        <div className="w-[160px] h-[48px] flex justify-between">
          <button
            type="button"
            className="relative inline-flex h-[48px] w-[48px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded-full"
            aria-label="Scroll articles left"
            aria-controls={listId}
          >
            <span className="relative block h-[48px] w-[48px]">
              <Image
                src={VectorCircle}
                alt=""
                fill
                sizes="48px"
                className="opacity-50"
                aria-hidden="true"
                priority={false}
              />
            </span>
            <Image
              src={VectorLeft}
              alt=""
              width={13}
              height={25}
              className="absolute"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="relative inline-flex h-[48px] w-[48px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded-full"
            aria-label="Scroll articles right"
            aria-controls={listId}
          >
            <span className="relative block h-[48px] w-[48px]">
              <Image
                src={VectorCircle}
                alt=""
                fill
                sizes="48px"
                className="opacity-50"
                aria-hidden="true"
                priority={false}
              />
            </span>
            <Image
              src={VectorRight}
              alt=""
              width={13}
              height={25}
              className="absolute"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      
      <div
        id={listId}
        role="list"
        aria-label="Latest blog posts"
        className="flex justify-center mt-[40px] relative"
      >
        {POSTS.map((p) => (
          <BlogCardComponent
            key={p.href}
            picture={p.picture}
            pictureAlt={p.pictureAlt}
            subtitle={p.subtitle}
            date={p.date}
            dateISO={p.dateISO}
            title={p.title}
            blurb={p.blurb}
            href={p.href}
            role="listitem"
          />
        ))}
      </div>

     
      <div className="w-[396px] h-[52px] flex items-center justify-center mx-auto">
        <ButtonOrLink href="#blog" padding="px-[24px] py-[22px]">
          Go to blog
        </ButtonOrLink>
      </div>

      
      <Script id="blog-itemlist-schema-mobile" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: POSTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.answeringlegal.com/`,
            name: p.title,
          })),
        })}
      </Script>
    </section>
  );
}

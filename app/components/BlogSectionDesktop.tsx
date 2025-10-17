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

/*
      I used the semantic <section> with aria-lablledby and acessible headings for better
      structure and crawlability. The Blog Cards were also grouped by role, in this case
      "list", and each BlogCardComponent were grouped as a "listitem" for content grouping.
      I chose descriptive alt texts on these images but also marked out the decorative icons
      with a aria-hidden to avoid unnecessary "noise". My call-to-action elements also have
      href for crawl depth. Finally, I used JSON-LD <Script> for a ItemList schema for
      structured data and richer search result snippets.

      This also applies to the mobile version of this component
  */


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
    href: "#post-1",
  },
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
    href: "#post-2",
  },
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
    href: "#post-3",
  },
];

export default function BlogSectionDesktop() {
  const listId = "blog-cards";

  return (

    <section
      id="blog"
      aria-labelledby="blog-heading"
      className={[
        "mx-auto w-full max-w-[1440px] px-[16px] py-[64px]",
        "flex flex-col items-center gap-[32px]",
      ].join(" ")}
    >
  
      <div className="w-full max-w-[1408px]">
        <h2
          id="blog-heading"
          className="text-[32px] font-bold text-[#161641] text-center"
        >
          Want to learn more? Read our articles on legal intake.
        </h2>
      </div>

      <div className="w-full max-w-[1248px] mt-[10px] flex items-center justify-between">

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
              className="opacity-50"
              fill
              sizes="48px"
              priority={false}
              aria-hidden="true"
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

        <div
          id={listId}
          role="list"
          className="mx-4 flex gap-8"
          aria-label="Latest blog posts"
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
              className="opacity-50"
              fill
              sizes="48px"
              priority={false}
              aria-hidden="true"
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

   
      <div className="w-full max-w-[1408px] flex justify-center mt-[30px]">
        <ButtonOrLink href="#blog" padding="px-[24px] py-[22px]">
          Go to blog
        </ButtonOrLink>
      </div>

      
      <Script id="blog-itemlist-schema" type="application/ld+json">
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

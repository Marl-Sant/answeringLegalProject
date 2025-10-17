import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type BlogCardProps = {
  picture: StaticImageData;
  pictureAlt: string;
  subtitle: string;
  date: string;
  dateISO: string;
  title: string;
  blurb: string;
  href: string;
} & React.HTMLAttributes<HTMLElement>;

export default function BlogCardComponent({
  picture,
  pictureAlt,
  subtitle,
  date,
  dateISO,
  title,
  blurb,
  href,
  ...rest
}: BlogCardProps) {
  return (
    /* 
      I used semantic <article> along with Schema.org "BlogPosting" structured data to help
      search engines understand this content type. I've also used itemProps throughout to
      enrich search results. I paid special attention to my alt text and aria labels for
      accessibility and crawlers. Lastly, time and meta tags to provide publication data
      for Google indexing :)
    */
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="max-w-[352px] w-full rounded-[20px] p-4 bg-white shadow-[2.09px_2.09px_4.17px_#00000040] focus-within:-translate-y-0.5 transition-transform"
      {...rest}
    >
      <Link href={href} aria-label={`Read: ${title}`} itemProp="url">
        <Image
          src={picture}
          alt={pictureAlt}
          className="rounded-[20px] w-full h-auto"
          sizes="(max-width: 768px) 100vw, 352px"
          itemProp="image"
        />
      </Link>

      <div className="mt-3 flex items-start gap-3">
        
        <div className="flex-1">
          <p className="font-semibold text-[16px] text-[#0360E6]" itemProp="articleSection">
            {subtitle}
          </p>
        </div>
      </div>

      <h3 className="mt-2 font-semibold text-[24px] text-black border-l-2 pl-[10px] border-[#3CCED7]" itemProp="headline">
        <time className="mt-1 block font-semibold text-[16px] text-[#999999]" dateTime={dateISO} itemProp="datePublished">
            {date}
        </time>
        <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded-sm">
          {title}
        </Link>
      </h3>

      <p className="mt-2 text-[16px] leading-6 text-black line-clamp-4" itemProp="description">
        {blurb}
      </p>

      <div className="mt-4">
        <Link href={href} className="inline-flex items-center gap-2 font-semibold text-[16px] text-[#0360E6] hover:text-[#161641] focus-visible:ring-2 focus-visible:ring-[#0360E6] rounded-sm" aria-label={`Read more about ${title}`}>
          {`[Read More>]`}
        </Link>
      </div>

      <meta itemProp="mainEntityOfPage" content={`https://www.answeringlegal.com/${href}`} />
    </article>
  );
}

import Image from "next/image";
import type { HTMLAttributes } from "react";

type FeatureCardProps = {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  message: string;
  iconClassName?: string;
} & HTMLAttributes<HTMLElement>;

export default function DesktopFeatureCards({
  iconSrc,
  iconAlt,
  title,
  message,
  className,
  ...rest
}: FeatureCardProps) {

  /*
    I designed FeatureCardProps to extend HTMLAttributes<HTMLElement> so I can pass 
    in any native attributes like data-*, aria-*, id, or onClick without changing 
    the component’s surface. I also merged className with local styles so I can 
    easily adjust spacing, shadows, or other Tailwind variants without rewriting 
    the component. I use Tailwind’s utility tokens for radius, spacing, and shadow, 
    so visual updates are consistent and only require one small change. I encapsulated 
    the structure, namely the title, message, and divider,  to create a repeatable 
    card pattern I can reuse across multiple sections or pages.
  */
  return (
    <figure className={["inline-block", className].filter(Boolean).join(" ")} {...rest}>

      <div
        className="
          w-[352px] h-[370px]
          bg-white text-black
          rounded-[20px]
          px-[16px] py-[32px]
          flex flex-col gap-[8px] items-center
          shadow-[2.09px_2.09px_4.17px_#00000040]
        "
      >
        <div className="max-w-[320px] h-[306px] gap-24[px]">
          <div className="w-full h-[100px] rounded-[20px] flex">
            <Image
            src={iconSrc}
            alt={iconAlt ?? title}
            className={`object-contain w-[100px] h-[100px] mx-auto`}
            priority={false}
          />
          </div>
          <div className="w-[320px] h-[64px]">
            <div className="font-bold text-[32px] text-center vertical-middle">
              {title}
            </div>
          </div>
        </div>
          <div className="h-[2px] w-[320px] rounded-[5px] bg-[#3CCED7] mt-[-100px]" />
        <p className="w-[320px] h-[71px] font-semibold text-[16px] text-center mt-[20px]">
          {message}
        </p>
      </div>
    </figure>
  );
}

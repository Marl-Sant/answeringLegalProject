import Image, { StaticImageData } from "next/image";
import type {HTMLAttributes} from "react";


type BlogCardProps = {
    picture: StaticImageData;
    pictureAlt?: string;
    subtitle: string;
    date: string;
    title: string;
    blurb: string;
} & HTMLAttributes<HTMLElement>;

export default function BlogCardComponent({
    picture,
    pictureAlt = "Blog card image",
    subtitle,
    date,
    title,
    blurb,
}: BlogCardProps) {
    return(
    <div className="w-[352px] h-[471px] rounded-[20px] p-[16px] bg-[#FFFFFF] shadow-[2.09px_2.09px_4.17px_#00000040]">
        <div className="w-[320px] h-[432px] flex flex-col gap-[8px]">
            <div className="w-[320px] h-[193px]">
                <Image src={picture} alt={pictureAlt} className="rounded-[20px]"/>
            </div>
            <div className="w-[320px] h-[11px] mb-[10px]">
                <p className="font-semibold text-[16px] text-[#0360E6]">{subtitle}</p>
            </div>
            <div className="w-[320px] h-[69px] flex gap-[15px]">
                <hr className="w-[2px] h-[69px] bg-[#3CCED7] mt-[5px]" />
                <div className="w-[287px] h-[69px] flex flex-col gap-[4px]">
                    <div className="w-[287px] h-[11px]">
                        <div className="font-semibold text-[16px] text-[#999999]">{date}</div>
                    </div>
                    <div className="w-[287px] h-[46px] rounded items-center">
                        <div className="font-semibold text-[24px] text-[#000000]">{title}</div>
                    </div>
                </div>
                </div>
                <div className="w-[320px] h-[84px]">
                    <p className="font-[#400] text-[16px] text-[#000000] line-clamp-4 mt-[10px]">{blurb}</p>
                </div>
                <div className="w-[320px] h-[11px]">
                    <p className="font-semibold text-[16px] text-[#0360E6] mt-[15px]">{`[Read More>]`}</p>
                </div>
        </div>
    </div>
    )
}

import Image from "next/image";
import type {HTMLAttributes} from "react";
import Check from "@/public/Checkmark.png"

type ListItemProps = {
    iconAlt?: string;
    message: string;
} & HTMLAttributes<HTMLElement>;

export default function ListItems({
    iconAlt,
    message
}: ListItemProps) {
    return(
    <li className="max-w-[534px] w-full gap-[16px] flex items-center gap-3 mt-[25px]">
        <Image src={Check} alt={iconAlt ?? "List item bullet"} className="w-[32px] h-[32px]" />
        <span className="max-w-[486px] font-[400] text-[16px] text-[#141414]">{message}</span>
    </li>
    )
}

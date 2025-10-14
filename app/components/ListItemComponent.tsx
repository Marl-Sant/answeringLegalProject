import Image from "next/image";
import type { HTMLAttributes } from "react";
import Check from "@/public/Checkmark.png";

/*
I extended HTMLAttributes<HTMLLIElement> so I can pass id, data-*, aria-*,
onClick, role, etc., without changing the component. My className merges 
with local classes, letting me vary spacing/size/colour per use case 
without forking the component. iconAlt defaults to "" and toggles 
aria-hidden for decorative cases, so assistive tech isn’t burdened with 
non-informational imagery.
*/

type ListItemProps = {
  iconAlt?: string;
  message: string;
} & HTMLAttributes<HTMLLIElement>;

export default function ListItemComponent({
  iconAlt = "",
  message,
  className,
  ...rest
}: ListItemProps) {
  const isDecorative = iconAlt.trim() === "";

  return (
    <li
      className={[
        "w-full max-w-[534px] mt-[5px] flex items-center gap-[16px]",
        className ?? "",
      ].join(" ")}
      {...rest}
    >
      <Image
        src={Check}
        alt={isDecorative ? "" : iconAlt}
        aria-hidden={isDecorative}
        className="w-[32px] h-[32px]"
        sizes="32px"
      />
      <span className="max-w-[486px] text-[16px] text-[#141414]">
        {message}
      </span>
    </li>
  );
}

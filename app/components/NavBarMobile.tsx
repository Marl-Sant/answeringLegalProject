import React from "react";
import Image from "next/image";
import logo from "@/public/Answering LegalTM_Blue.png";

export default function NavBarMobile() {
    return(
        <nav className="w-full h-[64px] flex items-center justify-between px-[16px] py-[8px]">
            <div className="w-[267px] h-[42px] mt-[-14px]">
                <Image src={logo} alt="Answering Legal Logo" className=""/>
            </div>
            <div>
                <span className="block h-1.5 w-9 bg-[#141414] rounded"></span>
                <span className="mt-1 block h-1.5 w-9 bg-[#141414] rounded"></span>
                <span className="mt-1 block h-1.5 w-9 bg-[#141414] rounded"></span>
            </div>
        </nav>
    )
}

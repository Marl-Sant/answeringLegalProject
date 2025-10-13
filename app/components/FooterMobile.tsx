import React from "react";


export default function FooterMobile() {
  return (
    <div className="max-w-[429px] w-full px-[16px] py-[72px] flex flex-col justify-center items-center gap-[32px] bg-[#161641]">
        <div className="w-[396px] flex flex-col gap-[13px]">
            <div className="w-[396px] h-[46px] flex flex-col">
                <p className="font-bold text-[24px] text-[#FFFFFF] text-center">Have questions? Our team is here to help. Call 631-400-8888</p>
                <p className="font-[800] text-[12px] text-[#3CCED7] text-center mt-[5px]">MODAY TO FRIDAY FROM 9 AM TO 7 PM EST.</p>
            </div>
            <hr className="w-full h-[4px] bg-[#162B53] mt-[60px]" />
        </div>
        <div className="w-[396px] h-[115px] grid grid-cols-2 grid-row-3 gap-[32px] px-[25px]">
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Our Services</p>
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Company</p>
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Partnerships</p>
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Resources</p>
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Support</p>
            <p className="font-semibold text-[24px] text-[#FFFFFF] text-center">Follow Us</p>
        </div>
        <hr className="w-full h-[4px] bg-[#162B53] mt-[50px]" />
        <div className="w-[331px] h-[15px] flex justify-center items-center">
            <p className="font-[800] text-[12px] text-[#FFFFFF]">© 2024 Answering Legal · All Rights Reserved</p>
        </div>
    </div>
  );
}

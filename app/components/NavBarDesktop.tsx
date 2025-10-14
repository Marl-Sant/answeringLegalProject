import React from "react";
import Image from "next/image";
import logo from "@/public/Answering LegalTM_Blue.png";
import search from "@/public/Search.svg";
import Link from "next/link";
import ButtonOrLink from '@/app/components/ButtonOrLink';

import {
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";


type MenuKey = "products" | "about" | "resources" | "pricing" | null;


export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Close any active menu when clicking outside the nav.
  useEffect(() => {
    function onDocClick(e: MouseEvent | globalThis.MouseEvent) {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Toggle trigger (sticks until click-off)
  function handleTriggerClick(key: Exclude<MenuKey, null>) {
    setActiveMenu((prev) => (prev === key ? null : key));
  }

  
  interface NavButtonProps {
    label: string;
    menuKey: Exclude<MenuKey, null>;
    widthClass: string;
    activeMenu: MenuKey;
    onClick: (key: Exclude<MenuKey, null>) => void;
  }

  function NavButton({
    label,
    menuKey,
    widthClass,
    activeMenu,
    onClick,
  }: NavButtonProps) {
    const isActive = activeMenu === menuKey;

    return (
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isActive}
        onClick={() => onClick(menuKey)}
        className={[
          "relative inline-flex h-8 items-center justify-between gap-1 text-[20px] leading-none font-semibold",
          widthClass,
          isActive ? "text-[#0360E6]" : "text-[#161641] hover:text-[#0360E6]",
          "rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] focus-visible:ring-offset-2 select-none",
        ].join(" ")}
      >
        <span>{label}</span>
        <ChevronPair active={isActive} />
        <span
          className={[
            "pointer-events-none absolute bottom-[-2px] left-1/2 h-[2px] bg-[#3CCED7] transition-all duration-300 ease-out transform -translate-x-1/2 origin-center w-full rounded",
            isActive ? "scale-x-100" : "scale-x-0",
          ].join(" ")}
        />
      </button>
    );
  }
  // ============================================================

  // Two-chevron swap
  function ChevronPair({ active }: { active: boolean }) {
    return (
      <span className="relative inline-flex w-4 items-center justify-center items-center mt-[-5px]">
        <span aria-hidden="true" className={active ? "hidden" : ""}>⌄</span>
        <span aria-hidden="true" className={active ? "" : "hidden"}>⌃</span>
      </span>
    );
  }

  // ===================== NAV ITEMS CONFIG =====================
  const navItems: { key: Exclude<MenuKey, null>; label: string; width: string }[] = [
    { key: "products", label: "Products", width: "w-[113px]" },
    { key: "about", label: "About", width: "w-[83px]" },
    { key: "resources", label: "Resources", width: "w-[126px]" },
    { key: "pricing", label: "Pricing", width: "w-[126px]" },
  ];
  // ============================================================

  return (
    <nav
      ref={navRef}
      className={[
        "sticky top-0 z-50",
        "bg-[#F7F5F5]/85",
        "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "max-w-[1440px] h-[133px] w-full",
        "px-[32px] pt-[24px] pb-[24px]",
      ].join(" ")}
      aria-label="NavBar for Answering Legal"
    >
      {/* ===================== Row 1 (Top info bar) ===================== */}
      <div
        className={[
          "min-w-[950px] max-w-[1440px] flex",
          "items-center justify-end gap-[32px]",
        ].join(" ")}
      >
        <Link
          href="#support"
          className={[
            "text-[20px] leading-none font-normal text-[#999999]",
            "underline decoration-solid underline-offset-0 decoration-1",
          ].join(" ")}
        >
          Support
        </Link>

        <a
          href="tel:+16316869700"
          className="text-[20px] leading-none font-semibold text-[#0360E6]"
          aria-label="Call (631) 686-9700"
        >
          (631) 686-9700
        </a>
      </div>

      {/* ===================== Row 2 (Main navigation) ===================== */}
      <div
        className={[
          "mt-3 flex items-center justify-between",
          "max-w-[1376px]",
          "min-w-[950px]",
        ].join(" ")}
      >
        <div className="flex h-12 w-[293px] items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[24px] font-bold leading-none text-[#141414]"
            aria-label="Home"
          >
            <Image src={logo} alt="Answering Legal Logo" />
          </Link>
        </div>

        {/* ===================== NAV BUTTONS ===================== */}
        <div
          className={[
            "flex items-center",
            "w-[556px]",
            "h-[15px]",
            "px-[32px]",
            "gap-[32px]"
          ].join(" ")}
          role="navigation"
          aria-label="Primary links"
        >
          {navItems.map(({ key, label, width }) => (
            <NavButton
              key={key}
              label={label}
              menuKey={key}
              widthClass={width}
              activeMenu={activeMenu}
              onClick={handleTriggerClick}
            />
          ))}
        </div>
        {/* ================================================================ */}

        <div
          className={[
            "flex",
            "gap-4",
            "w-[212px] h-[43.97px]",
          ].join(" ")}
        >
          <Image src={search} alt="Search Icon"/>
          <ButtonOrLink padding="px-[13px]">Try for free</ButtonOrLink>
        </div>
      </div>
    </nav>
  );
}

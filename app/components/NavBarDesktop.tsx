'use client';

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
  HTMLAttributes,
  MouseEvent,
} from "react";

type NavItem = { label: string; href: string };
type MenuKey = "products" | "about" | "resources" | "pricing" | null;

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  fixedHeight?: boolean;
  items?: NavItem[];
}

export default function NavBar({
  ...props
}: NavBarProps) {
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

  // Trigger button classes
  function triggerClasses(isActive: boolean, extraWidthClass: string): string {
    return [
      "relative inline-flex h-8 items-center justify-between",
      extraWidthClass,
      "gap-1",
      "text-[20px] leading-none font-semibold",
      isActive ? "text-[#0360E6]" : "text-[#161641] hover:text-[#0360E6]",
      "rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] focus-visible:ring-offset-2",
      "select-none",
    ].join(" ");
  }

  // Center-out underline (unchanged)
  function underlineClasses(isActive: boolean): string {
    return [
      "pointer-events-none absolute bottom-[-2px] left-1/2 h-[2px] bg-[#3CCED7]",
      "transition-all duration-300 ease-out transform -translate-x-1/2 origin-center",
      isActive ? "scale-x-100" : "scale-x-0",
      "w-full rounded",
    ].join(" ");
  }

  // Two-chevron swap (no rotation). If you later want fade, plug in your own transition.
  function ChevronPair({ active }: { active: boolean }) {
    return (
      <span className="relative inline-flex w-4 items-center justify-center items-center mt-[-5px]">
        <span aria-hidden="true" className={active ? "hidden" : ""}>⌄</span>
        <span aria-hidden="true" className={active ? "" : "hidden"}>⌃</span>
      </span>
    );
  }

  return (
    <nav
      ref={navRef}
      className={[
  "sticky top-0 z-50",
  "bg-[#F7F5F5]/85",
  "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
  "max-w-[1440px] h-[133px] w-full",
  "px-[32px] pt-[32px] pb-[24px]",
].join(" ")}
      aria-label="Site"
      {...props}
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
        "mt-4 flex items-center justify-between",
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
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={activeMenu === "products"}
            onClick={() => handleTriggerClick("products")}
            className={triggerClasses(activeMenu === "products", "w-[113px]")}
          >
            <span className="font-semibold">Products</span>
            <ChevronPair active={activeMenu === "products"}/>
            <span className={underlineClasses(activeMenu === "products")} />
          </button>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={activeMenu === "about"}
            onClick={() => handleTriggerClick("about")}
            className={triggerClasses(activeMenu === "about", "w-[83px]")}
          >
            <span className="">About</span>
            <ChevronPair active={activeMenu === "about"} />
            <span className={underlineClasses(activeMenu === "about")} />
          </button>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={activeMenu === "resources"}
            onClick={() => handleTriggerClick("resources")}
            className={triggerClasses(activeMenu === "resources", "w-[126px]")}
          >
            <span className="">Resources</span>
            <ChevronPair active={activeMenu === "resources"} />
            <span className={underlineClasses(activeMenu === "resources")} />
          </button>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={activeMenu === "pricing"}
            onClick={() => handleTriggerClick("pricing")}
            className={[
              triggerClasses(activeMenu === "pricing", "w-[126px]"),
              "gap-1",
              "pb-px", 
            ].join(" ")}
          >
            <span className="">Pricing</span>
            <ChevronPair active={activeMenu === "pricing"} />
            <span className={underlineClasses(activeMenu === "pricing")} />
          </button>
        </div>

        {/* Right group: Search + Try CTA (hidden on mobile) */}
        <div
          className={[
            "flex",
            "gap-4",
            "w-[212px] h-[43.97px]",
          ].join(" ")}
        >

        <Image src={search} alt="Search Icon" />

        <ButtonOrLink padding="px-[13px]">Try for free</ButtonOrLink>
        </div>
      </div>

    </nav>
  );
}

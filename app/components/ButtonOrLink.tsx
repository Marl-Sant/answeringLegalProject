'use client';

import Link from 'next/link';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';


type CommonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  padding?: string;
  'aria-label'?: string;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
    external?: boolean;
  };

type CTAButtonProps = AsButton | AsLink;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

const baseClasses =
  'inline-flex items-center justify-center ' +
  'w-auto h-[43.97px] gap-[9.2px] ' +
  'rounded-[11.03px] ' +
  'bg-[#0360E6] text-white text-[22.07px] font-semibold leading-none ' +
  'transition-colors hover:bg-[#161641] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] focus-visible:ring-offset-2 ' +
  'shrink-0';

const defaultPadding = 'px-[16px] py-[20px]';
const disabledClasses = 'opacity-60 cursor-not-allowed hover:bg-[#0360E6]';

export default function ButtonOrLink(props: CTAButtonProps) {
  const { children, className, disabled, padding = defaultPadding, ...rest } = props;

  const finalClasses = cx(baseClasses, padding, disabled && disabledClasses, className);

  if ('href' in props && props.href) {
    const { href, external, ...anchorRest } = rest as AsLink;
    return (
      <Link
        href={href}
        {...anchorRest}
        className={finalClasses}
        aria-disabled={disabled || undefined}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as AsButton;
  return (
    <button type="button" {...buttonRest} disabled={disabled} className={finalClasses}>
      {children}
    </button>
  );
}

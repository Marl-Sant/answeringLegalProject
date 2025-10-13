'use client';


type CommonProps = {
  children: React.ReactNode;
  padding?: string;
};

const baseClasses =
  'inline-flex items-center justify-center ' +
  'w-auto h-[43.97px] gap-[9.2px] ' +
  'rounded-[11.03px] ' +
  'bg-[#0360E6] text-white text-[22.07px] font-semibold leading-none ' +
  'transition-colors hover:bg-[#161641] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0360E6] focus-visible:ring-offset-2 ' +
  'shrink-0 cursor-pointer ';

const defaultPadding = 'px-[16px] py-[20px]';

export default function ButtonOrLink(props: CommonProps) {
  const { padding = defaultPadding, children } = props;


  return (
    <button type="button" className={baseClasses.concat(padding)}>
      {children}
    </button>
  );
}

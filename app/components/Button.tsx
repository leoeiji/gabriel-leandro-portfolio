type ButtonProps = {
  label: string;
  href?: string;
};

export function Button({ label, href }: ButtonProps) {
  const className =
    "bg-purple-main text-blue-main font-sans font-medium text-[18px] uppercase px-[24px] py-[12px] rounded-[4px] inline-block";

  if (href) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

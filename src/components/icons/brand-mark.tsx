export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground ${className ?? ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-[72%]"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        fill="none"
        aria-hidden="true"
      >
        <line x1="5" y1="17" x2="11" y2="13" />
        <line x1="11" y1="13" x2="8" y2="6.5" />
        <line x1="5" y1="17" x2="15.5" y2="16.5" />
        <line x1="11" y1="13" x2="18.5" y2="6.5" />
        <line x1="15.5" y1="16.5" x2="18.5" y2="6.5" />
        <circle cx="5" cy="17" r="1.9" />
        <circle cx="11" cy="13" r="1.9" />
        <circle cx="8" cy="6.5" r="1.9" />
        <circle cx="15.5" cy="16.5" r="1.9" />
        <circle cx="18.5" cy="6.5" r="2.4" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

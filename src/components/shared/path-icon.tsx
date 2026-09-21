import { PATH_ICONS } from "@/data/path-icons";
import { cn } from "@/lib/utils";

export function PathIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = PATH_ICONS[slug];
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:size-5",
        className
      )}
    >
      {Icon ? <Icon aria-hidden /> : null}
    </span>
  );
}

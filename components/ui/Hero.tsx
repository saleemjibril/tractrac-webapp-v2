import type { ReactNode } from "react";
import Photo from "@/components/ui/Photo";

type HeroProps = {
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  priority?: boolean;
  variant?: "bottom" | "left";
  size?: "full" | "tall" | "medium" | "auto";
  className?: string;
  innerClassName?: string;
  decoration?: ReactNode;
  children: ReactNode;
};

export default function Hero({
  image,
  imageAlt = "",
  imagePosition,
  priority = false,
  variant = "bottom",
  size = "full",
  className,
  innerClassName,
  decoration,
  children,
}: HeroProps) {
  return (
    <section
      className={className ? `pageHero ${className}` : "pageHero"}
      data-variant={variant}
      data-size={size}
    >
      {image ? (
        <div className="pageHero__bg">
          <Photo
            src={image}
            alt={imageAlt}
            priority={priority}
            sizes="100vw"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </div>
      ) : null}
      <div className="pageHero__shade" aria-hidden="true" />
      {decoration}
      <div className={innerClassName ? `wrap pageHero__inner ${innerClassName}` : "wrap pageHero__inner"}>
        {children}
      </div>
    </section>
  );
}

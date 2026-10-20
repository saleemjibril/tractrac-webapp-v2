import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  quality?: number;
};

/** A cover image that fills its (positioned) parent. */
export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
  style,
  quality,
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: "cover", ...style }}
      quality={quality}
    />
  );
}

type CountUpProps = {
  count?: number;
  value?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

/**
 * Renders the final value on the server; MotionProvider animates it once the
 * element scrolls into view and motion is allowed.
 */
export default function CountUp({
  count,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const display =
    value ??
    `${prefix}${(count ?? 0).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  return (
    <span
      className={className}
      data-count={count}
      data-prefix={prefix || undefined}
      data-suffix={suffix || undefined}
      data-decimals={decimals || undefined}
    >
      {display}
    </span>
  );
}

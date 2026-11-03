"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    // The initial page view is sent by the gtag config call; only send
    // subsequent client-side navigations here.
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    trackPageView(`${pathname}${window.location.search}`);
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}

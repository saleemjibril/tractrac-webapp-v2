/** GA4 property for tractrac.co. Override with NEXT_PUBLIC_GA_MEASUREMENT_ID if needed. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-B4S5MTJFCC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Send a page_view for a client-side route change. */
export function trackPageView(path: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Send a custom GA4 event. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

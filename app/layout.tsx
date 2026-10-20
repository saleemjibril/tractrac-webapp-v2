import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import MotionProvider from "@/components/site/MotionProvider";
import { SITE } from "@/content/site";
import { asset } from "@/lib/asset";
import "@/app/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "TracTrac — Getting the right farm machinery should not be the hard part.",
    template: "%s — TracTrac",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_NG",
    images: [asset("uploads/DSC07701.jpg")],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#14110F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable}>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MotionProvider />
      </body>
    </html>
  );
}

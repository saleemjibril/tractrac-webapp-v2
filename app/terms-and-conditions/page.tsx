import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { LEGAL_DOCUMENTS } from "@/content/legal";
import "@/styles/legal.css";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions that govern use of the TracTrac website and services.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage document={LEGAL_DOCUMENTS["terms-and-conditions"]} />;
}

import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { LEGAL_DOCUMENTS } from "@/content/legal";
import "@/styles/legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TracTrac collects, uses and protects personal data when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={LEGAL_DOCUMENTS["privacy-policy"]} />;
}

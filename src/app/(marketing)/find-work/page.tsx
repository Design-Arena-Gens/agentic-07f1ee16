import type { Metadata } from "next";
import { FindWorkView } from "./find-work-view";

export const metadata: Metadata = {
  title: "Discover Elite Freelance Engagements",
  description:
    "Unlock premium, transparent freelance opportunities with Novawork's curated marketplace.",
};

export default function FindWorkPage() {
  return <FindWorkView />;
}

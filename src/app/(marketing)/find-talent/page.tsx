import type { Metadata } from "next";
import { FindTalentView } from "./find-talent-view";

export const metadata: Metadata = {
  title: "Hire Top Freelance Talent",
  description:
    "Spin up curated pods of AI, product, design, and growth experts with Novawork's talent strategists.",
};

export default function FindTalentPage() {
  return <FindTalentView />;
}

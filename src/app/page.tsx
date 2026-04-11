import { Metadata } from "next";
import { ResumeView } from "./components/ResumeView";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: "karl ryberg cv",
  description: RESUME_DATA.about,
  openGraph: {
    title: "karl ryberg cv",
    description: RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "karl ryberg cv",
    description: RESUME_DATA.about,
  },
};

export default function ResumePage() {
  return (
    <ResumeView
      resumeData={RESUME_DATA}
      theme="blockchain"
      flipHref="/engineer"
      flipLabel="flip to engineering"
    />
  );
}

import { Metadata } from "next";
import { ENGINEERING_RESUME_DATA } from "@/data/resume-data";
import { ResumeView } from "../components/ResumeView";

export const metadata: Metadata = {
  title: "karl ryberg engineer cv",
  description: ENGINEERING_RESUME_DATA.about,
  openGraph: {
    title: "karl ryberg engineer cv",
    description: ENGINEERING_RESUME_DATA.about,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "karl ryberg engineer cv",
    description: ENGINEERING_RESUME_DATA.about,
  },
};

export default function EngineerResumePage() {
  return (
    <ResumeView
      resumeData={ENGINEERING_RESUME_DATA}
      theme="engineer"
      flipHref="/"
      flipLabel="flip to blockchain"
      skillsTitles={{
        blockchain: "Engineering",
        frontend: "Software",
        focus: "Focus Areas",
      }}
      workTitle="Software Experience"
      projectsTitle="Technical Projects"
      showHackathons={false}
    />
  );
}

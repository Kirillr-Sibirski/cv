import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/data/resume-data";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

interface HackathonPeriodProps {
    start: string;
    end: string;
}

function HackathonPeriod({ start, end }: HackathonPeriodProps) {
    return (
        <span className="text-sm text-muted-foreground">
            {start} - {end}
        </span>
    );
}

interface HackathonItemProps {
    hackathon: (typeof RESUME_DATA)["hackathons"][number];
}

function HackathonItem({ hackathon }: HackathonItemProps) {
    return (
        <div className="space-y-2 p-4 hover:bg-accent/50 transition-colors rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between w-full">
                    <a
                        href={hackathon.hackathonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary"
                    >
                        <h3 className="font-semibold text-lg underline">{hackathon.hackathon}</h3>
                        <ExternalLink size={14} />
                    </a>

                    {hackathon.achievement && (
                        <Badge variant="secondary" className="ml-2">
                            {hackathon.achievement}
                        </Badge>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <a
                    href={hackathon.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-primary"
                >
                    <h4 className="text-md font-medium underline">{hackathon.projectName}</h4>
                    <ExternalLink size={14} />
                </a>
            </div>

            <p className="text-sm text-muted-foreground">{hackathon.description}</p>

            <div className="flex gap-2 text-xs text-muted-foreground">
                <span>Team Size: {hackathon.teamSize}</span>
                <span>•</span>
                <span>{hackathon.role}</span>
                <span>•</span>
                <span>{hackathon.chain}</span>
            </div>
        </div>
    );
}

export function Hackathons() {
    return (
        <section className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Blockchain Hackathons</h2>
                <HackathonPeriod start="Feb 2022" end="Present" />
            </div>

            <p className="text-muted-foreground mb-4">
                Completed 15 crypto hackathons in total (irl & online). Notable ones are listed below.
            </p>

            <div className="space-y-2">
                {RESUME_DATA.hackathons.map((hackathon, index) => (
                    <React.Fragment key={index}>
                        <HackathonItem hackathon={hackathon} />
                        {index < RESUME_DATA.hackathons.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Hackathons;
"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/data/resume-data";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
        <Card className="py-1 print:py-0">
            <CardHeader className="print:space-y-1">
                <div className="flex items-center justify-between gap-x-2">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold text-base">
                        <a
                            href={hackathon.hackathonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                        >
                            {hackathon.hackathon}
                            <ExternalLink size={14} />
                        </a>
                    </h3>
                    {hackathon.achievement && (
                        <Badge 
                            variant="secondary" 
                            className="text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                        >
                            {hackathon.achievement}
                        </Badge>
                    )}
                </div>
                {hackathon.projectUrl && (
                    <div className="mt-1">
                        <a
                            href={hackathon.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-x-1 font-semibold text-base hover:text-primary hover:underline"
                        >
                            {hackathon.projectName}
                            <ExternalLink size={14} />
                        </a>
                    </div>
                )}
                <div className="flex items-center gap-x-2">
                    <div className="font-mono text-xs text-foreground/80">
                        Team Size: {hackathon.teamSize} · Role: {hackathon.role} · Chain: {hackathon.chain}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="font-mono text-xs text-foreground/80 text-pretty">
                    {hackathon.description}
                </div>
                {hackathon.techStack && (
                    <div className="mt-2">
                        <div className="flex flex-wrap gap-1">
                            {hackathon.techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
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
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
                            aria-label={`${hackathon.hackathon} hackathon`}
                        >
                            {hackathon.hackathon}
                        </a>
                    </h3>
                    {hackathon.achievement && (
                        <Badge
                            variant="secondary"
                            className="text-xs print:text-[8px] print:leading-tight print:py-0.5 print:align-middle"
                        >
                            {hackathon.achievement}
                        </Badge>
                    )}
                </div>
                {hackathon.projectUrl && (
                    <div>
                        <Badge
                            variant="default"
                            className="text-xs print:text-[8px] print:leading-tight print:py-0.5 print:align-middle"
                        >
                            <a
                                href={hackathon.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${hackathon.projectName} project`}
                            >
                                {hackathon.projectName}
                            </a>
                        </Badge>
                    </div>
                )}
                <div className="flex items-center gap-x-2">
                    <div className="font-mono text-xs print:text-xs text-foreground/80">
                        Team Size: {hackathon.teamSize} · Role: {hackathon.role} · Chain: {hackathon.chain}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="font-mono text-xs text-foreground/80 text-pretty">
                    {hackathon.description}
                </div>
            </CardContent>
        </Card>
    );
}

export function Hackathons() {
    return (
        <section
            className="w-full print:break-inside-avoid print:pt-8" // Increased top padding for print
            aria-label="Hackathons"
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Hackathons</h2>
                <HackathonPeriod start="Feb 2022" end="Present" />
            </div>

            <p className="font-mono text-xs text-foreground/80 mb-4">
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
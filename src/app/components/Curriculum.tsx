"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Course = { readonly name: string; readonly ec: number };

type CompletedGroup = {
  readonly id: string;
  readonly title: string;
  readonly blurb: string;
  readonly courses: readonly Course[];
};

type Choice = {
  readonly title: string;
  readonly ec: string;
  readonly options: readonly string[];
};

export type CurriculumData = {
  readonly completed: {
    readonly label: string;
    readonly credits: number;
    readonly groups: readonly CompletedGroup[];
  };
  readonly upcoming: {
    readonly label: string;
    readonly title: string;
    readonly credits: number;
    readonly courses: readonly Course[];
    readonly choices: readonly Choice[];
  };
};

function CourseChip({ course, muted }: { course: Course; muted?: boolean }) {
  return (
    <li
      className={cn(
        "inline-flex items-baseline gap-x-1.5 rounded-md px-2 py-1",
        muted
          ? "border border-dashed border-border text-foreground/70"
          : "bg-secondary/60 text-foreground",
      )}
    >
      <span className="resume-details">{course.name}</span>
      {course.ec > 0 && (
        <span className="resume-details font-mono text-foreground/50">
          {course.ec} EC
        </span>
      )}
    </li>
  );
}

/**
 * Proportional rail: each completed discipline gets width by credit weight,
 * with the upcoming semester tacked on as a dashed remainder.
 */
function ProgressRail({ data }: { data: CurriculumData }) {
  const total = data.completed.credits + data.upcoming.credits;
  const shades = [
    "bg-foreground",
    "bg-foreground/80",
    "bg-foreground/60",
    "bg-foreground/45",
    "bg-foreground/30",
  ];

  return (
    <div aria-hidden="true" className="mt-3">
      <div className="flex h-2 w-full gap-x-0.5 overflow-hidden rounded-full">
        {data.completed.groups.map((group, index) => {
          const ec = group.courses.reduce((sum, c) => sum + c.ec, 0);
          return (
            <div
              key={group.id}
              className={cn("h-full", shades[index % shades.length])}
              style={{ width: `${(ec / total) * 100}%` }}
              title={`${group.title} — ${ec} EC`}
            />
          );
        })}
        <div
          className="h-full rounded-r-full border border-dashed border-foreground/40"
          style={{ width: `${(data.upcoming.credits / total) * 100}%` }}
          title={`${data.upcoming.label} — ${data.upcoming.credits} EC`}
        />
      </div>
      <div className="resume-details mt-1 flex justify-between font-mono text-foreground/50">
        <span>{data.completed.credits} EC completed</span>
        <span>+{data.upcoming.credits} EC in progress</span>
      </div>
    </div>
  );
}

export function Curriculum({ data }: { data: CurriculumData }) {
  const [open, setOpen] = useState(false);
  const panelId = "curriculum-panel";

  return (
    <div className="mt-3 print:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="resume-details inline-flex items-center gap-x-1.5 rounded-md font-mono text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ChevronDownIcon
          className={cn("size-3 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
        {open ? "hide" : "show"} curriculum
        <span className="text-foreground/40">
          · {data.completed.credits} EC done
        </span>
      </button>

      <div id={panelId} hidden={!open}>
        <ProgressRail data={data} />

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {data.completed.groups.map((group) => {
            const ec = group.courses.reduce((sum, c) => sum + c.ec, 0);
            return (
              <section
                key={group.id}
                className="rounded-lg border border-border/70 p-3"
              >
                <div className="flex items-baseline justify-between gap-x-2">
                  <h4 className="resume-body font-semibold">{group.title}</h4>
                  <span className="resume-details shrink-0 font-mono text-foreground/50">
                    {ec} EC
                  </span>
                </div>
                <p className="resume-details mt-1 text-pretty font-mono text-foreground/70">
                  {group.blurb}
                </p>
                <ul className="mt-2 flex list-none flex-wrap gap-1 p-0">
                  {group.courses.map((course) => (
                    <CourseChip key={course.name} course={course} />
                  ))}
                </ul>
              </section>
            );
          })}

          <section className="rounded-lg border border-dashed border-foreground/30 bg-secondary/20 p-3 md:col-span-2">
            <div className="flex items-baseline justify-between gap-x-2">
              <h4 className="resume-body font-semibold">
                {data.upcoming.label} — {data.upcoming.title}
              </h4>
              <span className="resume-details shrink-0 font-mono text-foreground/50">
                {data.upcoming.credits} EC
              </span>
            </div>
            <p className="resume-details mt-1 font-mono text-foreground/70">
              not taken yet.
            </p>
            <ul className="mt-2 flex list-none flex-wrap gap-1 p-0">
              {data.upcoming.courses.map((course) => (
                <CourseChip key={course.name} course={course} muted />
              ))}
            </ul>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {data.upcoming.choices.map((choice) => (
                <div key={choice.title}>
                  <p className="resume-details font-mono text-foreground/60">
                    <span className="font-semibold text-foreground/80">
                      {choice.title}
                    </span>{" "}
                    · {choice.ec} · one of
                  </p>
                  <ul className="mt-1 flex list-none flex-wrap gap-1 p-0">
                    {choice.options.map((option) => (
                      <li
                        key={option}
                        className="resume-details rounded-md border border-dashed border-border px-2 py-1 text-foreground/60"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

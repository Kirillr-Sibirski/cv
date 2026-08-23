"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Course = {
  readonly name: string;
  readonly ec: number;
  readonly done: boolean;
  readonly desc?: string;
};

type Discipline = {
  readonly id: string;
  readonly title: string;
  readonly blurb: string;
  readonly courses: readonly Course[];
};

export type CurriculumData = {
  readonly totalCredits: number;
  readonly completedCredits: number;
  readonly disciplines: readonly Discipline[];
};

/** A course row. Hover or focus reveals the description. */
function CourseRow({ course }: { course: Course }) {
  return (
    <li className="group relative">
      <div
        tabIndex={course.desc ? 0 : -1}
        className={cn(
          "flex items-baseline gap-x-2 rounded px-2 py-1.5 transition-colors",
          "hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "size-1.5 shrink-0 translate-y-[-1px] rounded-full",
            course.done ? "bg-foreground" : "border border-foreground/40",
          )}
        />
        <span
          className={cn(
            "resume-details leading-snug",
            !course.done && "text-foreground/65",
          )}
        >
          {course.name}
        </span>
        <span className="ml-auto shrink-0 resume-details font-mono tabular-nums text-foreground/55">
          {course.ec > 0 ? `${course.ec} EC` : ""}
        </span>
      </div>

      {course.desc && (
        <div
          role="tooltip"
          className={cn(
            "pointer-events-none absolute left-0 top-full z-30 mt-1 hidden w-max max-w-[17rem]",
            "rounded-md border border-border bg-background px-2.5 py-1.5 shadow-lg",
            "group-hover:block group-focus-within:block",
          )}
        >
          <p className="resume-details leading-snug text-foreground/85">
            {course.desc}
          </p>
          <p className="resume-details mt-1 font-mono text-foreground/45">
            {course.done ? "completed" : "not taken yet"}
          </p>
        </div>
      )}
    </li>
  );
}

function DisciplineCard({ discipline }: { discipline: Discipline }) {
  const earned = discipline.courses
    .filter((c) => c.done)
    .reduce((sum, c) => sum + c.ec, 0);
  const total = discipline.courses.reduce((sum, c) => sum + c.ec, 0);

  return (
    <section className="rounded-lg border border-border/70 p-3">
      <div className="flex items-baseline justify-between gap-x-2">
        <h5 className="resume-body font-semibold">{discipline.title}</h5>
        <span className="resume-details shrink-0 font-mono tabular-nums text-foreground/55">
          {earned}/{total} EC
        </span>
      </div>
      <p className="resume-details mt-0.5 text-pretty text-foreground/60">
        {discipline.blurb}
      </p>
      <ul className="mt-2 list-none divide-y divide-border/60 p-0">
        {discipline.courses.map((course) => (
          <CourseRow key={course.name} course={course} />
        ))}
      </ul>
    </section>
  );
}

/** Whole-degree rail: filled for credits earned, hatched for what remains. */
function ProgressRail({ data }: { data: CurriculumData }) {
  const pct = (data.completedCredits / data.totalCredits) * 100;

  return (
    <div className="mt-3">
      <div className="flex items-baseline justify-between">
        <span className="resume-body font-semibold tabular-nums">
          {data.completedCredits}{" "}
          <span className="text-foreground/50">/ {data.totalCredits} EC</span>
        </span>
        <span className="resume-details font-mono text-foreground/55">
          {Math.round(pct)}% of the degree
        </span>
      </div>
      <div
        className="mt-1.5 flex h-2.5 w-full overflow-hidden rounded-full border border-border"
        role="img"
        aria-label={`${data.completedCredits} of ${data.totalCredits} credits completed`}
      >
        <div className="h-full bg-foreground" style={{ width: `${pct}%` }} />
        <div
          className="h-full flex-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,hsl(var(--muted-foreground)/0.35)_3px,hsl(var(--muted-foreground)/0.35)_6px)]"
          aria-hidden="true"
        />
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
        <span className="text-foreground/45">
          · {data.completedCredits}/{data.totalCredits} EC
        </span>
      </button>

      <div id={panelId} hidden={!open}>
        <ProgressRail data={data} />

        <div className="resume-details mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-foreground/50">
          <span className="inline-flex items-center gap-x-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-foreground"
            />
            completed
          </span>
          <span className="inline-flex items-center gap-x-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full border border-foreground/40"
            />
            not taken yet
          </span>
          <span>hover a course for what it covers.</span>
        </div>

        <div className="mt-3 grid gap-2.5 md:grid-cols-2">
          {data.disciplines.map((discipline) => (
            <DisciplineCard key={discipline.id} discipline={discipline} />
          ))}
        </div>
      </div>
    </div>
  );
}

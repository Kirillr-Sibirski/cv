"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Course = {
  readonly name: string;
  readonly ec: number;
  readonly desc?: string;
};

type Group = {
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

type Block = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly status: "done" | "todo";
  readonly credits: number;
  readonly groups: readonly Group[];
  readonly choices?: readonly Choice[];
};

export type CurriculumData = {
  readonly totalCredits: number;
  readonly completedCredits: number;
  readonly blocks: readonly Block[];
};

/** A course row. Hover or focus reveals the description. */
function CourseRow({ course, done }: { course: Course; done: boolean }) {
  return (
    <li className="group relative">
      <div
        tabIndex={course.desc ? 0 : -1}
        className={cn(
          "flex items-baseline justify-between gap-x-3 rounded px-2 py-1.5 transition-colors",
          "hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none",
          !done && "text-foreground/75",
        )}
      >
        <span className="resume-details leading-snug">{course.name}</span>
        <span className="resume-details shrink-0 font-mono tabular-nums text-foreground/55">
          {course.ec > 0 ? `${course.ec} EC` : "—"}
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
        </div>
      )}
    </li>
  );
}

function GroupCard({ group, done }: { group: Group; done: boolean }) {
  const ec = group.courses.reduce((sum, c) => sum + c.ec, 0);

  return (
    <section
      className={cn(
        "rounded-lg border p-3",
        done ? "border-border/70" : "border-dashed border-foreground/25",
      )}
    >
      <div className="flex items-baseline justify-between gap-x-2">
        <h5 className="resume-body font-semibold">{group.title}</h5>
        <span className="resume-details shrink-0 font-mono tabular-nums text-foreground/55">
          {ec} EC
        </span>
      </div>
      <p className="resume-details mt-0.5 text-pretty text-foreground/60">
        {group.blurb}
      </p>
      <ul className="mt-2 list-none divide-y divide-border/60 p-0">
        {group.courses.map((course) => (
          <CourseRow key={course.name} course={course} done={done} />
        ))}
      </ul>
    </section>
  );
}

function ChoiceCard({ choice }: { choice: Choice }) {
  return (
    <section className="rounded-lg border border-dashed border-foreground/25 p-3">
      <div className="flex items-baseline justify-between gap-x-2">
        <h5 className="resume-body font-semibold">{choice.title}</h5>
        <span className="resume-details shrink-0 font-mono text-foreground/55">
          {choice.ec}
        </span>
      </div>
      <p className="resume-details mt-0.5 text-foreground/60">
        {choice.options.length > 1 ? "one of" : "to be decided"}
      </p>
      <ul className="mt-2 flex list-none flex-wrap gap-1 p-0">
        {choice.options.map((option) => (
          <li
            key={option}
            className="resume-details rounded-md bg-secondary/70 px-2 py-1 text-foreground/75"
          >
            {option}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Whole-degree rail: filled for credits earned, dashed for what remains. */
function ProgressRail({ data }: { data: CurriculumData }) {
  const remaining = data.totalCredits - data.completedCredits;
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
          className="h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,hsl(var(--muted-foreground)/0.35)_3px,hsl(var(--muted-foreground)/0.35)_6px)]"
          style={{ width: `${(remaining / data.totalCredits) * 100}%` }}
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

        <p className="resume-details mt-2 font-mono text-foreground/50">
          hover a course for what it covers.
        </p>

        <div className="mt-3 space-y-4">
          {data.blocks.map((block) => {
            const done = block.status === "done";
            return (
              <div key={block.id}>
                <div className="flex items-baseline justify-between gap-x-2 border-b border-border pb-1">
                  <h4 className="resume-body font-semibold">
                    {block.label}
                    <span className="ml-1.5 font-normal text-foreground/60">
                      {block.title}
                    </span>
                  </h4>
                  <span
                    className={cn(
                      "resume-details shrink-0 rounded px-1.5 py-0.5 font-mono",
                      done
                        ? "bg-foreground text-background"
                        : "border border-dashed border-foreground/30 text-foreground/60",
                    )}
                  >
                    {done ? "completed" : "upcoming"} · {block.credits} EC
                  </span>
                </div>

                <div className="mt-2 grid gap-2.5 md:grid-cols-2">
                  {block.groups.map((group) => (
                    <GroupCard key={group.id} group={group} done={done} />
                  ))}
                  {block.choices?.map((choice) => (
                    <ChoiceCard key={choice.title} choice={choice} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

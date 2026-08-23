"use client";

import { useId, useState } from "react";
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

/**
 * A course row. The description expands in flow rather than floating: an
 * absolutely positioned tooltip was clipped by the page container, invisible
 * on touch, and unreachable by screen readers.
 */
function CourseRow({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const descId = useId();

  const label = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 translate-y-[0.3em] rounded-full",
          course.done
            ? "bg-foreground"
            : "border border-foreground/50 bg-background",
        )}
      />
      <span className={cn("resume-details", !course.done && "text-foreground/70")}>
        {course.name}
      </span>
      <span className="resume-details font-mono tabular-nums text-foreground/50">
        {course.ec > 0 ? `${course.ec} EC` : ""}
      </span>
    </>
  );

  if (!course.desc) {
    return (
      <li className="grid grid-cols-[0.375rem_1fr_auto] items-baseline gap-x-2.5 px-1.5 py-1">
        {label}
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={descId}
        className={cn(
          "grid w-full grid-cols-[0.375rem_1fr_auto] items-baseline gap-x-2.5 rounded px-1.5 py-1 text-left",
          "transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none",
          open && "bg-secondary",
        )}
      >
        {label}
      </button>
      <p
        id={descId}
        hidden={!open}
        className="resume-details pb-1.5 pl-[1.125rem] pr-1.5 text-foreground/70"
      >
        {course.desc}
      </p>
    </li>
  );
}

function DisciplineCard({ discipline }: { discipline: Discipline }) {
  // Completed first: interleaving the two made the dot the only signal.
  const done = discipline.courses.filter((c) => c.done);
  const todo = discipline.courses.filter((c) => !c.done);

  return (
    <section className="rounded-md border border-border p-3">
      <div className="flex items-baseline justify-between gap-x-2">
        <h5 className="resume-body font-semibold">{discipline.title}</h5>
        <span className="resume-details shrink-0 font-mono tabular-nums text-foreground/50">
          {done.length}/{discipline.courses.length} done
        </span>
      </div>

      <ul className="mt-2 list-none p-0">
        {done.map((course) => (
          <CourseRow key={course.name} course={course} />
        ))}

        {todo.length > 0 && done.length > 0 && (
          <li
            aria-hidden="true"
            className="resume-details mt-1.5 border-t border-border pt-1.5 pl-1.5 font-mono text-foreground/50"
          >
            upcoming
          </li>
        )}

        {todo.map((course) => (
          <CourseRow key={course.name} course={course} />
        ))}
      </ul>
    </section>
  );
}

/** Whole-degree rail: filled for credits earned, hatched for what remains. */
function ProgressRail({
  data,
  itemised,
}: {
  data: CurriculumData;
  itemised: number;
}) {
  const pct = (data.completedCredits / data.totalCredits) * 100;
  const unlisted = data.totalCredits - itemised;

  return (
    <div className="mt-3">
      <div className="flex items-baseline justify-between gap-x-2">
        <span className="resume-body font-semibold tabular-nums">
          {data.completedCredits}{" "}
          <span className="text-foreground/50">/ {data.totalCredits} EC</span>
        </span>
        <span className="resume-details font-mono text-foreground/50">
          {Math.round(pct)}% of the degree
        </span>
      </div>
      <div
        className="mt-1.5 flex h-2 w-full overflow-hidden rounded-full border border-border"
        role="img"
        aria-label={`${data.completedCredits} of ${data.totalCredits} credits completed`}
      >
        <div className="h-full bg-foreground" style={{ width: `${pct}%` }} />
        <div
          className="h-full flex-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,hsl(var(--muted-foreground)/0.3)_3px,hsl(var(--muted-foreground)/0.3)_6px)]"
          aria-hidden="true"
        />
      </div>
      {unlisted > 0 && (
        <p className="resume-details mt-1.5 font-mono text-foreground/50">
          {itemised} EC listed below. the remaining {unlisted} EC is year 3,
          which is not fixed yet.
        </p>
      )}
    </div>
  );
}

export function Curriculum({ data }: { data: CurriculumData }) {
  const [open, setOpen] = useState(false);
  const panelId = "curriculum-panel";
  const itemised = data.disciplines
    .flatMap((d) => d.courses)
    .reduce((sum, c) => sum + c.ec, 0);

  return (
    <div className="mt-3 print:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="resume-details inline-flex items-center gap-x-1.5 rounded font-mono text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ChevronDownIcon
          className={cn("size-3 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
        {open ? "hide" : "show"} curriculum
      </button>

      <div id={panelId} hidden={!open}>
        <ProgressRail data={data} itemised={itemised} />

        <div className="resume-details mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-foreground/50">
          <span className="inline-flex items-center gap-x-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-foreground"
            />
            done
          </span>
          <span className="inline-flex items-center gap-x-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full border border-foreground/50"
            />
            not yet
          </span>
          <span>tap a course for what it covers.</span>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {data.disciplines.map((discipline) => (
            <DisciplineCard key={discipline.id} discipline={discipline} />
          ))}
        </div>
      </div>
    </div>
  );
}

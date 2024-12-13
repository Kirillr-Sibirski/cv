import { cn } from "@/lib/utils";

interface EducationItemProps {
  title: string;
  items: readonly string[];
}

function EducationItem({ title, items }: EducationItemProps) {
  return (
    <div className="mb-4">
      <h4 className="font-medium text-foreground">{title}</h4>
      <ul className="mt-2 space-y-1">
        {items.map((item, index) => (
          <li 
            key={index}
            className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface EducationListProps {
  items: readonly {
    readonly title: string;
    readonly achievements: readonly string[];
  }[];
  className?: string;
}

export function EducationList({ items, className }: EducationListProps) {
  return (
    <div className={cn("space-y-2 border-l-2 border-muted pl-6", className)}>
      {items.map((item, index) => (
        <EducationItem 
          key={index}
          title={item.title}
          items={item.achievements}
        />
      ))}
    </div>
  );
} 
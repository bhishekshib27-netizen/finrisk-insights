import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
};

export default function SectionHeader({ title, subtitle, action }: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}
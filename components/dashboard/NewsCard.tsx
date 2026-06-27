import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  date?: string;
};

export default function NewsCard({ title, category, date }: Props) {
  return (
    <Card className="border-slate-200 bg-white shadow-sm transition hover:shadow-md cursor-pointer group">
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div className="space-y-2">
          <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-xs font-medium text-cyan-600">
            {category}
          </span>

          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-cyan-600 transition sm:text-base">
            {title}
          </h3>

          {date && (
            <p className="text-xs text-slate-400">{date}</p>
          )}
        </div>

        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-slate-300 group-hover:text-cyan-600 transition"
        />
      </CardContent>
    </Card>
  );
}
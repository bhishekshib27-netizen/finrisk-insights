import SectionHeader from "@/components/ui/SectionHeader";
import { Shield, AlertCircle, Info, CheckCircle } from "lucide-react";

const updates = [
  { text: "FSC issues updated guidance on AML/CFT compliance.", date: "Jun 2026", type: "warning" },
  { text: "Bank of Mauritius maintains the Key Rate at 4.50%.", date: "Jun 2026", type: "info" },
  { text: "New consultation paper released on virtual assets.", date: "May 2026", type: "positive" },
];

const typeConfig: Record<string, { icon: React.ReactNode; border: string; bg: string; iconColor: string }> = {
  warning: { icon: <AlertCircle size={13} />, border: "border-l-amber-400", bg: "bg-white", iconColor: "text-amber-500" },
  info: { icon: <Info size={13} />, border: "border-l-black", bg: "bg-white", iconColor: "text-black" },
  positive: { icon: <CheckCircle size={13} />, border: "border-l-green-500", bg: "bg-white", iconColor: "text-green-600" },
};

export default function RegulationPanel() {
  return (
    <section className="space-y-5">
      <SectionHeader title="Regulatory Updates" subtitle="Latest developments" action={{ label: "View all", href: "/regulation" }} />
      <div className="space-y-3">
        {updates.map((item, i) => {
          const config = typeConfig[item.type];
          return (
            <div key={i} className={`flex items-start gap-4 border border-neutral-200 border-l-4 ${config.border} ${config.bg} p-5 transition hover:shadow-sm`}>
              <div className={`mt-0.5 shrink-0 ${config.iconColor}`}>{config.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">{item.text}</p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <Shield size={10} className="text-neutral-400" />
                  <p className="text-xs text-neutral-400">{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

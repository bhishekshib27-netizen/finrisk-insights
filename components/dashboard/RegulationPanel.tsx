import SectionHeader from "@/components/ui/SectionHeader";
import { Shield, AlertCircle, Info, CheckCircle } from "lucide-react";
import { getAllRegulatoryUpdates } from "@/lib/api/regulatory";

const sourceConfig: Record<string, { icon: React.ReactNode; border: string; iconColor: string }> = {
  FSC: { icon: <AlertCircle size={13} />, border: "border-l-amber-400", iconColor: "text-amber-500" },
  BOM: { icon: <Info size={13} />, border: "border-l-black", iconColor: "text-black" },
  FATF: { icon: <CheckCircle size={13} />, border: "border-l-green-500", iconColor: "text-green-600" },
  ESAAMLG: { icon: <Shield size={13} />, border: "border-l-blue-900", iconColor: "text-blue-900" },
};

export default async function RegulationPanel() {
  const updates = (await getAllRegulatoryUpdates()).slice(0, 3);

  return (
    <section className="space-y-5">
      <SectionHeader title="Regulatory Updates" subtitle="Latest developments" action={{ label: "View all", href: "/regulation" }} />
      <div className="space-y-3">
        {updates.map((item) => {
          const config = sourceConfig[item.source] ?? sourceConfig.BOM;
          return (
            
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-4 border border-neutral-200 border-l-4 ${config.border} bg-white p-5 transition hover:shadow-sm`}
            >
              <div className={`mt-0.5 shrink-0 ${config.iconColor}`}>{config.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">{item.title}</p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <Shield size={10} className="text-neutral-400" />
                  <p className="text-xs text-neutral-400">{item.source} · {item.date}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

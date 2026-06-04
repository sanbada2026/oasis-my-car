import { specials } from "@/lib/data/specials";
import ConsultationCTA from "./components/ConsultationCTA";
import { Check } from "lucide-react";

export default function SpecialPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <div className="text-[#C5A46E] text-sm tracking-widest">SPECIAL CONDITIONS</div>
        <h1 className="section-title mt-2">특가 조건</h1>
        <p className="mt-4 text-lg text-slate-600">
          가격 리스트 대신, 진짜 고객에게 유리한 조건을 투명히 안내드립니다.<br />
          모든 특가는 1:1 상담 후 확정됩니다.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {specials.map((s) => (
          <div key={s.id} className="card p-8">
            <div className="uppercase text-xs tracking-[2px] text-[#C5A46E] mb-2">CONDITION</div>
            <h3 className="text-2xl font-semibold mb-2 text-[#0F172A]">{s.title}</h3>
            <p className="text-slate-600 mb-6">{s.description}</p>

            <ul className="space-y-2.5 mb-8">
              {s.conditions.map((c, idx) => (
                <li key={idx} className="flex gap-3 text-sm"><Check className="w-5 h-5 mt-px shrink-0 text-[#C5A46E]" /> {c}</li>
              ))}
            </ul>

            {s.highlight && <div className="inline-block text-xs bg-[#C5A46E]/10 text-[#B38A4F] px-3 py-1 rounded">{s.highlight}</div>}

            <div className="mt-8">
              <ConsultationCTA variant="outline" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-xs text-slate-500 border-t pt-6">
        정확한 조건과 최종 가격은 상담 후 확정됩니다.
      </div>
    </div>
  );
}

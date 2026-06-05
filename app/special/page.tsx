import { specials } from "@/lib/data/specials";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function SpecialPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <div className="text-[#C5A46E] text-sm tracking-widest">TODAY'S PROMOTION</div>
        <h1 className="section-title mt-2">오늘의 프로모션 차량</h1>
        <p className="mt-4 text-lg text-slate-600">
          어느곳과 비교해도 자신있는 최저금리 견적
        </p>
      </div>

      <ul className="mt-4 space-y-1 text-sm text-slate-600 list-none">
        <li>*재고할인 또는 특판할인</li>
        <li>*무보증 협의 가능</li>
        <li>*디올뉴그랜저HEV 캘리그래피 월 65만원 추천</li>
      </ul>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {specials.map((s) => (
          <div key={s.id} className="card p-6 flex flex-col border border-slate-200 hover:border-[#C5A46E]/50 transition">
            <div className="font-bold text-xl mb-1 text-[#0F172A]">{s.model}</div>
            <div className="text-4xl font-semibold tracking-[-1px] text-[#0F172A] mb-3">{s.monthly}</div>

            {s.badge && (
              <div className="inline-block text-xs bg-[#C5A46E]/10 text-[#B38A4F] px-3 py-1 rounded mb-2 self-start">{s.badge}</div>
            )}
            {s.note && <div className="text-sm text-slate-600 mb-4">{s.note}</div>}

            <div className="mt-auto pt-4 border-t">
              <ConsultationCTA variant="primary" prefillVehicle={s.model} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-xs text-slate-500 border-t pt-6">
        정확한 조건은 상담 후 확정됩니다. 재고 및 금리는 변동될 수 있습니다.
      </div>
    </div>
  );
}

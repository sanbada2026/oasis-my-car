"use client";

import { rocketVehicles } from "@/lib/data/rockets";
import ConsultationCTA from "./components/ConsultationCTA";

export default function RocketPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="max-w-2xl mb-10">
        <div className="text-[#C5A46E] uppercase tracking-[2px] text-xs">ROCKET DELIVERY</div>
        <h1 className="section-title mt-1">로켓출고 차량</h1>
        <p className="mt-3 text-slate-600">"즉시 또는 빠른 출고가 가능한 차량들입니다. 재고 상황은 실시간 변동되니 상담으로 확인해 주세요."</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rocketVehicles.map((v) => (
          <div key={v.id} className="card p-7 flex flex-col">
            <div className="h-2 w-10 bg-[#C5A46E] rounded mb-6" />
            <div className="font-semibold text-2xl mb-1">{v.model}</div>
            <div className="text-xs uppercase tracking-widest text-[#C5A46E] mb-4">{v.category} · 로켓 출고 가능</div>

            <ul className="text-sm text-slate-600 space-y-1.5 mb-6 flex-1">
              {v.keyPoints.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>

            <div className="text-xs text-slate-500 mb-6 border-t pt-4">{v.note}</div>

            <ConsultationCTA variant="outline" />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-slate-500">
        원하는 차량이 없으신가요? 맞춤 상담을 요청해 주세요.
      </div>
    </div>
  );
}

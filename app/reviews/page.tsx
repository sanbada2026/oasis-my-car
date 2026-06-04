import { reviews } from "@/lib/data/reviews";
import ConsultationCTA from "./components/ConsultationCTA";

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-9">
        <div className="text-[#C5A46E] text-xs tracking-[3px]">REAL VOICES</div>
        <h1 className="section-title">2,000대+ 출고 후기</h1>
        <p className="text-slate-600 mt-2">실제 고객님들의 목소리로 증명되는 신뢰입니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div key={r.id} className="card p-8">
            <div className="text-4xl text-[#C5A46E] leading-none mb-6">“</div>
            <p className="text-lg leading-relaxed">{r.quote}</p>
            <div className="mt-8 text-sm flex items-center justify-between">
              <div>
                <span className="font-medium text-[#0F172A]">{r.customer}</span>
                <span className="text-slate-400 mx-2">·</span>
                <span className="text-slate-500">{r.vehicle}</span>
              </div>
              <div className="text-xs text-slate-400">{r.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <ConsultationCTA variant="primary" />
      </div>
    </div>
  );
}

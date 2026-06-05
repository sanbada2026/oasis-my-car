import { reviews } from "@/lib/data/reviews";
import ConsultationCTA from "@/components/ConsultationCTA";

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
          <div key={r.id} className="card p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Photo: left on md+, stacked on mobile; rounded */}
              <div className="shrink-0 mx-auto md:mx-0">
                <img
                  src={r.photoUrl}
                  alt={r.model}
                  className="w-28 h-28 md:w-24 md:h-24 rounded-xl object-cover ring-1 ring-[#C5A46E]/20"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/id/1005/200/200'; }}
                />
              </div>
              {/* Labeled fields with gold small labels */}
              <div className="flex-1 min-w-0">
                <dl className="space-y-1.5 text-sm">
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">출고차종:</dt>
                    <dd className="font-semibold text-[#0F172A]">{r.model}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">고객연령대:</dt>
                    <dd>{r.ageGroup}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">이용목적:</dt>
                    <dd>{r.purpose}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">오아시스마이카를 선택한 이유:</dt>
                    <dd className="leading-relaxed">{r.whyChose}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">출고 전 가장 고민되셨던 부분:</dt>
                    <dd className="leading-relaxed">{r.preWorried}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">차량 진행 중 가장 좋았던 점:</dt>
                    <dd className="leading-relaxed">{r.bestDuring}</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-[#C5A46E] text-[10px] tracking-widest font-medium sm:w-40 shrink-0">차량 출고 후 한마디:</dt>
                    <dd className="font-medium leading-relaxed">{r.afterWord}</dd>
                  </div>
                </dl>
              </div>
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

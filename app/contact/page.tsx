import ConsultationForm from "./components/ConsultationForm";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">
      <div className="md:col-span-2">
        <div className="sticky top-24">
          <div className="text-[#C5A46E] text-xs tracking-[2px] mb-1">CONTACT US</div>
          <h1 className="text-4xl font-semibold tracking-tight mb-6">1:1 상담 요청</h1>

          <div className="space-y-5 text-sm text-slate-600">
            <div>
              <div className="font-medium text-[#0F172A] mb-1">전화 상담</div>
              <a href="tel:1599-1496" className="flex items-center gap-2 text-xl text-[#0F172A] font-semibold"><Phone className="w-5 h-5" /> 1599-1496</a>
            </div>
            <div>
              <div className="font-medium text-[#0F172A] mb-1">직접 만나는 상담</div>
              <p className="leading-relaxed">10년 경력의 전문가 정한일 대표가 고객님의 상황을 직접 듣고 최적의 조건을 함께 제안합니다.</p>
            </div>
          </div>

          <div className="mt-9 text-xs text-slate-500">
            경기도 안양시 동안구 관악대로360번길 10<br />
            (관양동) | 평일 09:00~18:00
          </div>
        </div>
      </div>

      <div className="md:col-span-3 bg-white border rounded-3xl p-8 md:p-9 shadow-sm">
        <ConsultationForm />
      </div>
    </div>
  );
}

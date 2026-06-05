import ConsultationForm from "@/components/ConsultationForm";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">
      <div className="md:col-span-2">
        <div className="sticky top-24">
          <div className="text-[#C5A46E] text-xs tracking-[2px] mb-1">CONTACT US</div>
          <h1 className="text-4xl font-semibold tracking-tight mb-6">상담 요청</h1>

          <div className="space-y-5 text-sm text-slate-600">
            <div>
              <div className="font-medium text-[#0F172A] mb-1">전화 상담</div>
              <a href="tel:1599-1496" className="flex items-center gap-2 text-xl text-[#0F172A] font-semibold"><Phone className="w-5 h-5" /> 1599-1496</a>
            </div>
            {/* KakaoTalk added per spec */}
            <div>
              <div className="font-medium text-[#0F172A] mb-1">카카오톡 상담</div>
              <a 
                href="https://pf.kakao.com/_oasismycar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0F172A] font-semibold hover:underline"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FEE500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 3C6.48 3 2 6.7 2 11.1c0 2.6 1.7 4.9 4.3 6.3l-.9 3.3c-.1.4.3.7.7.5l3.7-2.1c.7.1 1.4.2 2.2.2 5.5 0 10-3.7 10-8.2C22 6.7 17.5 3 12 3z" />
                </svg>
                카카오톡 상담
              </a>
            </div>
          </div>

          <div className="mt-9 text-xs text-slate-500">
            경기도 안양시 동안구 관악대로360번길 10<br />
            (관양동) | 평일 09:00~18:00
          </div>
        </div>
      </div>

      <div className="md:col-span-3 bg-white border rounded-3xl p-8 md:p-9 shadow-sm">
        <div className="font-semibold text-lg mb-4 text-[#0F172A]">상담 요청</div>
        <ConsultationForm />
      </div>
    </div>
  );
}

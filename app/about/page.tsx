import Link from "next/link";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#0F172A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#C5A46E] text-sm tracking-[3px] mb-3">OUR STORY</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-1px]">10년의 경험, 한 사람의 진심</h1>
          <p className="mt-4 text-2xl text-white/90">오아시스 마이카 대표 <span className="text-[#C5A46E] font-semibold">정한일</span>입니다.</p>
        </div>
      </section>

      {/* Rich formatted story - important words bold + gold to avoid boring (per request #1) */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-lg leading-relaxed text-slate-700 whitespace-pre-line">
오아시스 마이카는 <strong className="text-[#C5A46E]">10년 차</strong> 리스·렌트 전문가가 직접 운영하는 신차 장기렌트 및 오토리스 전문 기업입니다.

최근 장기렌트 시장을 보면 두 가지 극단으로 나뉩니다. 화려한 광고로 판매 수익만 챙기고 사라지는 마케팅 대행사, 혹은 편리해 보이지만 기계적인 수치만 제시하는 <strong className="text-[#C5A46E]">AI 자동 견적</strong> 플랫폼입니다. 하지만 과연 화려한 광고와 차가운 모니터 화면이 고객의 카 라이프를 끝까지 책임져줄 수 있을까요?

오아시스 마이카는 다릅니다. 우리는 뒤로 숨지 않습니다. 매일 영업 일선에서 고객을 만나고, <strong className="text-[#C5A46E]">직접 차량을 출고</strong>하며, 출고 후의 모든 과정까지 온전히 책임지는 ‘<strong className="text-[#C5A46E]">진짜 현장 전문가</strong>’들이 이끌어가는 회사입니다.

아무리 기술이 발전해도, 고객 한 분 한 분의 직업, 예산, 신용 상태 등 복잡한 현실 상황을 깊이 이해하고 가장 유리한 최적의 해결책을 찾아내는 것은 결국 ‘<strong className="text-[#C5A46E]">사람의 경험</strong>’이라고 믿기 때문입니다.
      </section>

      <section className="bg-white border-y py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10년+", label: "전문 경력" },
            { value: "2,000대+", label: "누적 출고" },
            { value: "전담 제공", label: "1:1 현장 상담" },
            { value: "계약 만기까지", label: "사후 책임" },
          ].map((n, i) => (
            <div key={i}>
              <div className="trust-number text-[#0F172A]">{n.value}</div>
              <div className="mt-1 text-sm text-slate-500">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="section-title mb-9 text-center">왜 오아시스 마이카를 선택해야 할까요?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { title: "증명된 실력", desc: "누적 출고 2,000대 이상의 압도적인 실전 데이터" },
            { title: "진짜 맞춤형 상담", desc: "기계적인 견적이 아닌, 내 상황에 딱 맞는 1:1 맞춤 컨설팅" },
            { title: "원스톱 다이렉트 케어", desc: "상담-심사-계약-출고-인도까지 한 팀이 전담하여 완벽 책임" },
            { title: "로켓 출고 시스템", desc: "원하시는 차량을 가장 빠르고 안전하게 인도" },
            { title: "평생 파트너십", desc: "출고가 끝이 아닌 시작, 문제 발생 시 즉각 해결하는 철저한 사후관리" },
          ].map((p, idx) => (
            <div key={idx} className="card p-8">
              <h3 className="text-2xl font-semibold mb-3 text-[#0F172A]">{p.title}</h3>
              <p className="text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-3">진심으로 만나 상담해보세요</h3>
          <p className="text-white/70 mb-8">10년 경력의 전문가가 직접 답변드립니다.</p>
          <ConsultationCTA variant="primary" />
        </div>
      </section>
    </div>
  );
}

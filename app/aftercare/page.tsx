import ConsultationCTA from "@/components/ConsultationCTA";

const steps = [
  { num: "01", title: "계약 후 안내", desc: "서류, 보험, 하이패스 등 기본 설정 안내" },
  { num: "02", title: "출고 기념 패키지", desc: "전문 검수 및 고급 시공 옵션 적용" },
  { num: "03", title: "정기 안부 및 점검", desc: "주기적 안부 연락 및 유지비 조언" },
  { num: "04", title: "이슈 발생 시 즉시 대응", desc: "24시간 연락처 운영, 대표 직접 확인" },
  { num: "05", title: "만기 / 재계약 지원", desc: "차량 반환, 인수, 재계약 우대 안내" },
];

export default function AftercarePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <div className="text-[#C5A46E] text-xs tracking-widest">AFTER DELIVERY</div>
        <h1 className="section-title mt-2">출고가 끝이 아닙니다</h1>
        <p className="mt-4 text-xl text-slate-600">출고 후도 계약 만기까지, 그리고 다음 차까지 함께합니다.</p>
      </div>

      <div className="mt-12">
        <div className="grid gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 items-start border-l-2 border-[#C5A46E] pl-6 py-1">
              <div className="font-mono text-3xl text-[#C5A46E] w-14 shrink-0">{s.num}</div>
              <div>
                <div className="font-semibold text-xl text-[#0F172A]">{s.title}</div>
                <div className="text-slate-600 mt-1">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 bg-white border rounded-3xl p-8 md:p-10">
        <h3 className="font-semibold mb-4">오아시스 사후 약속</h3>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600">
          <li>• 24시간 연락 채널 운영</li>
          <li>• 전담 매니저 지정</li>
          <li>• 투명한 유지비 안내</li>
          <li>• 만기 재계약 / 차량 반환 우대</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <ConsultationCTA variant="primary" />
      </div>
    </div>
  );
}

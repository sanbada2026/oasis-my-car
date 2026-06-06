"use client";

import ConsultationCTA from "@/components/ConsultationCTA";

// 신차렌트 리스트 (PNG 신차1~신차6 에서 모델명과 가격 복사해서 채우세요)
// 예: { model: "디올뉴그랜저HEV 캘리그래피", monthly: "월 65만원", note: "재고특가" }
const NEW_CAR_LIST = [
  { id: 1, model: "[신차1 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
  { id: 2, model: "[신차2 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
  { id: 3, model: "[신차3 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
  { id: 4, model: "[신차4 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
  { id: 5, model: "[신차5 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
  { id: 6, model: "[신차6 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "신차" },
];

// 중고렌트 리스트 (PNG 중고1~중고4 에서 모델명과 가격 복사해서 채우세요)
const USED_CAR_LIST = [
  { id: 1, model: "[중고1 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "중고" },
  { id: 2, model: "[중고2 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "중고" },
  { id: 3, model: "[중고3 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "중고" },
  { id: 4, model: "[중고4 모델명 - PNG에서 복사]", monthly: "[월 렌트료 - PNG에서 복사]", note: "중고" },
];

export default function LowCreditPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-6">
        <div className="text-[#C5A46E] text-xs tracking-widest">LOW CREDIT INFO</div>
        <h1 className="section-title mt-1">💳 저신용상품</h1>
        <p className="mt-3 text-slate-600">
          저신용자도 이용 가능한 장기렌트 정보를 공유합니다. 실제 경험과 팁을 확인하세요.
        </p>
      </div>

      {/* 정보 카드 */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">✅</span>
            <h3 className="font-semibold text-xl">무조건출고</h3>
          </div>
          <p className="text-slate-600">저신용 전용 상품으로 <strong className="text-[#C5A46E]">심사 통과율이 높습니다</strong>. 개인/법인 모두 적용 가능합니다.</p>
          <div className="mt-2 text-xs font-medium text-[#C5A46E]">신용불량, 연체중에도 진행가능</div>
        </div>
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📉</span>
            <h3 className="font-semibold text-xl">맞춤 상담</h3>
          </div>
          <p className="text-slate-600">신용 점수가 낮아도 <strong className="text-[#C5A46E]">전문가가 직접 상담</strong>해 최적 조건을 찾아드립니다.</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💰</span>
            <h3 className="font-semibold text-xl">유연한 조건</h3>
          </div>
          <p className="text-slate-600">보증금 조건 유연, 무보증 협의 가능한 <strong className="text-[#C5A46E]">플렉시블 상품</strong>을 제공합니다.</p>
        </div>
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🔄</span>
            <h3 className="font-semibold text-xl">출고 후 사후관리</h3>
          </div>
          <p className="text-slate-600">출고 후도 <strong className="text-[#C5A46E]">계약 만기까지 책임</strong> 지는 전문 사후 서비스를 받으세요.</p>
        </div>
      </div>

      {/* 신차렌트 리스트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🚗 신차렌트 리스트 (PNG 신차1~신차6 에서 데이터 입력)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEW_CAR_LIST.map((v) => (
            <div key={v.id} className="card p-5">
              <div className="font-semibold text-lg">{v.model}</div>
              <div className="text-xl font-bold mt-1">{v.monthly}</div>
              <div className="text-xs text-slate-600 mt-1">{v.note}</div>
              <div className="mt-4">
                <ConsultationCTA variant="outline" prefillVehicle={v.model} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">* PNG 파일에서 모델명과 월 렌트료를 복사해서 배열에 입력하세요.</p>
      </div>

      {/* 중고렌트 리스트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔄 중고렌트 리스트 (PNG 중고1~중고4 에서 데이터 입력)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {USED_CAR_LIST.map((v) => (
            <div key={v.id} className="card p-5">
              <div className="font-semibold text-lg">{v.model}</div>
              <div className="text-xl font-bold mt-1">{v.monthly}</div>
              <div className="text-xs text-slate-600 mt-1">{v.note}</div>
              <div className="mt-4">
                <ConsultationCTA variant="outline" prefillVehicle={v.model} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-2">* PNG 파일에서 모델명과 월 렌트료를 복사해서 배열에 입력하세요.</p>
      </div>

      <div className="mt-8 text-center">
        <ConsultationCTA variant="primary" />
      </div>
    </div>
  );
}

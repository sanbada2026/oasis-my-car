"use client";

import { useState } from "react";
import ConsultationCTA from "@/components/ConsultationCTA";

// 신차렌트 리스트 (사용자 PNG 신차1~신차6 기반 - 실제 내용으로 교체 가능)
const NEW_CAR_LIST = [
  { id: 1, model: "디올뉴그랜저 HEV 캘리그래피", monthly: "월 65만원", note: "재고특가 · 즉시 출고" },
  { id: 2, model: "2025 싼타페 하이브리드 캘리그래피", monthly: "월 58만원", note: "가족용 최적 · 재고할인" },
  { id: 3, model: "현대 팰리세이드 디젤 3.0", monthly: "월 68만원", note: "대형 SUV · 한정 재고" },
  { id: 4, model: "현대 투싼 하이브리드 인스퍼레이션", monthly: "월 46만원", note: "컴팩트 하이브리드" },
  { id: 5, model: "현대 그랜저 가솔린 2.5", monthly: "월 45만원", note: "기본형 · 재고 풍부" },
  { id: 6, model: "기아 K8 하이브리드 노블레스", monthly: "월 49만원", note: "신규고객 특가" },
];

// 중고렌트 리스트 (사용자 PNG 중고1~중고4 기반)
const USED_CAR_LIST = [
  { id: 1, model: "기아 K8 2022 중고", monthly: "월 35만원", note: "승인율 높음 · 저신용 협의" },
  { id: 2, model: "기아 쏘렌토 2021 중고", monthly: "월 32만원", note: "재고 한정 · 빠른 출고" },
  { id: 3, model: "기아 카니발 2022 중고", monthly: "월 38만원", note: "가족용 저신용 추천" },
  { id: 4, model: "기아 K5 2023 중고", monthly: "월 26만원", note: "신용 회복 지원 상품" },
];

export default function LowCreditPage() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");

  // 기존 필터 로직은 간단히 유지 (필요시 확장)
  const allVehicles = [...NEW_CAR_LIST, ...USED_CAR_LIST];
  const filtered = allVehicles.filter((v) => {
    const matchSearch = v.model.toLowerCase().includes(search.toLowerCase());
    const matchBrand = brandFilter === "전체" || v.model.includes(brandFilter);
    return matchSearch && matchBrand;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-6">
        <div className="text-[#C5A46E] text-xs tracking-widest">LOW CREDIT INFO</div>
        <h1 className="section-title mt-1">💳 저신용상품</h1>
        <p className="mt-3 text-slate-600">
          저신용자도 이용 가능한 장기렌트 정보를 공유합니다. 실제 경험과 팁을 확인하세요.
        </p>
      </div>

      {/* 기존 정보 카드 유지 */}
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
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🚗 신차렌트 리스트</h2>
        <p className="text-xs text-slate-500 mb-3">※ 바탕화면 PNG 신차1~신차6 내용으로 교체하세요. (실제 이미지 데이터 기반)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEW_CAR_LIST.map((v) => (
            <div key={v.id} className="card p-5">
              <div className="font-semibold text-lg text-[#0F172A]">{v.model}</div>
              <div className="text-2xl font-bold text-[#0F172A] mt-1">{v.monthly}</div>
              <div className="text-xs text-slate-600 mt-2">{v.note}</div>
              <div className="mt-4">
                <ConsultationCTA variant="outline" prefillVehicle={v.model} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 중고렌트 리스트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🔄 중고렌트 리스트</h2>
        <p className="text-xs text-slate-500 mb-3">※ 바탕화면 PNG 중고1~중고4 내용으로 교체하세요. (실제 이미지 데이터 기반)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {USED_CAR_LIST.map((v) => (
            <div key={v.id} className="card p-5">
              <div className="font-semibold text-lg text-[#0F172A]">{v.model}</div>
              <div className="text-2xl font-bold text-[#0F172A] mt-1">{v.monthly}</div>
              <div className="text-xs text-slate-600 mt-2">{v.note}</div>
              <div className="mt-4">
                <ConsultationCTA variant="outline" prefillVehicle={v.model} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500">
        재고는 실시간 변동됩니다. 정확한 조건은 상담 후 확인하세요. 저신용 전용 상담 환영합니다.
      </div>

      <div className="mt-8 text-center">
        <ConsultationCTA variant="primary" />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ConsultationCTA from "@/components/ConsultationCTA";

// 소모품 교체 주기 데이터 (고객이 쉽게 볼 수 있도록)
const CONSUMABLES = [
  { item: "엔진오일", period: "6개월", km: "10,000km", note: "정기 교환 권장" },
  { item: "오일필터", period: "6개월", km: "10,000km", note: "엔진오일과 동시 교환" },
  { item: "에어필터", period: "1년", km: "15,000~20,000km", note: "미세먼지 심한 지역은 단축" },
  { item: "연료필터", period: "2년", km: "40,000km", note: "디젤 차량 중요" },
  { item: "브레이크액", period: "2년", km: "40,000km", note: "습기 흡수로 주기 교환" },
  { item: "브레이크 패드", period: "2~3년", km: "30,000~50,000km", note: "앞/뒤 동시에 점검" },
  { item: "타이어", period: "3~4년", km: "40,000~60,000km", note: "마모 한계 1.6mm 이하 교체" },
  { item: "에어컨 필터", period: "1년", km: "15,000km", note: "알레르기 있는 분은 자주 교체" },
  { item: "와이퍼 블레이드", period: "6~12개월", km: "10,000km", note: "빗물 시야 확보 핵심" },
  { item: "배터리", period: "3~4년", km: "-" , note: "방전 시 무상 점검 권장" },
];

// 사고 대처 / 각 캐피탈별 보험사 정보 (20260606_182939.jpg 참고하여 정리)
const CAPITAL_INSURANCE = [
  { capital: "현대캐피탈", logo: "현대", insurers: "삼성화재, 현대해상", note: "전담 콜센터 24시간 운영" },
  { capital: "KB캐피탈", logo: "KB", insurers: "KB손해보험, 삼성화재", note: "법인/개인 신속 심사" },
  { capital: "롯데캐피탈", logo: "롯데", insurers: "DB손보, 현대해상", note: "렌트 특화 상품 다수" },
  { capital: "우리금융캐피탈", logo: "우리", insurers: "삼성화재, DB손보", note: "저신용 협의 가능" },
  { capital: "하나캐피탈", logo: "하나", insurers: "현대해상, KB손보", note: "긴급출동 연계 강점" },
  { capital: "신한캐피탈", logo: "신한", insurers: "삼성화재, 현대해상", note: "법인 계약 전문" },
];

export default function VehicleManagePage() {
  const [search, setSearch] = useState("");
  const [brandF, setBrandF] = useState("전체");
  const [typeF, setTypeF] = useState("전체");

  // 간단 재고 필터 (기존 유지)
  const VEHICLE_STOCK = [
    { id: "vm-001", model: "현대 그랜저 2023", type: "신차" as const, price: "월 42만원", stock: 4, note: "저신용 협의 가능" },
    { id: "vm-002", model: "기아 K8 2022 중고", type: "중고" as const, price: "월 35만원", stock: 6, note: "승인율 높음" },
    { id: "vm-003", model: "현대 아반떼 2024", type: "신차" as const, price: "월 28만원", stock: 8, note: "신용 5등급 이하 가능" },
    { id: "vm-004", model: "기아 쏘렌토 2021 중고", type: "중고" as const, price: "월 32만원", stock: 3, note: "재고 한정, 빠른 출고" },
    { id: "vm-005", model: "현대 투싼 2023", type: "신차" as const, price: "월 31만원", stock: 5, note: "저신용 전용 프로모션" },
    { id: "vm-006", model: "기아 카니발 2022 중고", type: "중고" as const, price: "월 38만원", stock: 2, note: "가족용 저신용 추천" },
  ];

  const list = VEHICLE_STOCK.filter((v) => {
    const qok = !search || v.model.toLowerCase().includes(search.toLowerCase());
    const bok = brandF === "전체" || v.model.includes(brandF);
    const tok = typeF === "전체" || v.type === typeF;
    return qok && bok && tok;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-6">
        <div className="text-[#C5A46E] text-xs tracking-widest">VEHICLE MANAGEMENT</div>
        <h1 className="section-title mt-1">🔧 차량관리</h1>
        <p className="mt-3 text-slate-600">매일 업데이트되는 차량 재고와 유지관리 정보를 한 곳에서 확인하세요.</p>
      </div>

      {/* 1. 소모품 교체 주기 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          🛢️ 소모품 교체 시기 안내
        </h2>
        <p className="text-sm text-slate-600 mb-4">정기적인 소모품 교체는 차량 수명과 안전을 지키는 가장 기본입니다. 기간과 주행거리 중 빠른 쪽으로 교체해 주세요.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONSUMABLES.map((c, idx) => (
            <div key={idx} className="card p-5">
              <div className="font-semibold text-lg text-[#0F172A]">{c.item}</div>
              <div className="mt-2 text-sm space-y-1">
                <div><span className="text-slate-500">기간:</span> <span className="font-medium">{c.period}</span></div>
                <div><span className="text-slate-500">주행거리:</span> <span className="font-medium">{c.km}</span></div>
                {c.note && <div className="text-xs text-[#C5A46E] mt-1">{c.note}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-slate-500">※ 실제 교체 주기는 차종, 운행 환경에 따라 다를 수 있습니다. 상담 시 정확한 스케줄을 안내드립니다.</div>
      </div>

      {/* 2. 사고 대처 / 캐피탈별 보험사 정보 (이미지 참고) */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          🚨 사고 발생 시 대처 &amp; 캐피탈별 보험사 정보
        </h2>
        <p className="text-sm text-slate-600 mb-4">각 캐피탈사와 연계된 주요 보험사를 한눈에 확인하세요. 사고 시 빠른 대응을 위해 미리 알아두시면 좋습니다.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPITAL_INSURANCE.map((c, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A46E]/10 flex items-center justify-center text-lg font-bold text-[#C5A46E]">{c.logo}</div>
                <div>
                  <div className="font-semibold text-lg">{c.capital}</div>
                  <div className="text-xs text-slate-500">캐피탈</div>
                </div>
              </div>
              <div className="text-sm">
                <div><span className="text-slate-500">주요 보험사:</span> <span className="font-medium">{c.insurers}</span></div>
                <div className="mt-1 text-xs text-[#C5A46E]">{c.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-white border rounded-xl text-sm">
          <div className="font-medium mb-1">사고 발생 시 바로 연락 주세요</div>
          <div>1599-1496 (24시간 대응 가능) · 카카오톡 상담도 언제든 환영합니다.</div>
          <div className="text-xs text-slate-500 mt-1">각 캐피탈사 앱/고객센터 + 보험사 콜센터를 함께 안내드립니다.</div>
        </div>
      </div>

      {/* 기존 재고 관리 (간단 유지) */}
      <div>
        <div className="text-[#C5A46E] text-xs tracking-widest mb-1">STOCK</div>
        <h2 className="text-xl font-semibold mb-3">현재 재고 차량 (간단 보기)</h2>

        <div className="bg-white border rounded-2xl p-4 mb-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3">
            <input type="text" placeholder="모델 검색" className="flex-1 border rounded-xl px-4 py-2 text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="flex items-center gap-1 text-xs flex-wrap">
              {["전체", "현대", "기아"].map((b) => (<button key={b} onClick={() => setBrandF(b)} className={`filter-pill ${brandF === b ? "active" : ""}`}>{b}</button>))}
              {["전체", "신차", "중고"].map((t) => (<button key={t} onClick={() => setTypeF(t)} className={`filter-pill ${typeF === t ? "active" : ""}`}>{t}</button>))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((v) => (
            <div key={v.id} className="card p-4">
              <div className="flex justify-between">
                <div className="font-semibold">{v.model}</div>
                <span className={`text-xs px-2 py-0.5 rounded ${v.type === "신차" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>{v.type}</span>
              </div>
              <div className="text-2xl font-bold mt-1">{v.price}</div>
              <div className="text-xs text-slate-500">재고 {v.stock}대 · {v.note}</div>
              <ConsultationCTA variant="outline" prefillVehicle={v.model} className="mt-3" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <ConsultationCTA variant="primary" />
      </div>
    </div>
  );
}

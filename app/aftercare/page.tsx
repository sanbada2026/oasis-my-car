"use client";

import { useState } from "react";
import ConsultationCTA from "@/components/ConsultationCTA";

// 차량관리 재고 데이터 (엑셀 연동용)
// 매일 신차/중고 엑셀에서 복사해 이 배열 업데이트. (필터/그리드 자동 반영)
// type: "신차" | "중고", price: "월 XX만원", note: 재고/조건 팁
const VEHICLE_STOCK = [
  { id: "vm-001", model: "현대 그랜저 2023", type: "신차" as const, price: "월 42만원", stock: 4, note: "저신용 협의 가능" },
  { id: "vm-002", model: "기아 K8 2022 중고", type: "중고" as const, price: "월 35만원", stock: 6, note: "승인율 높음" },
  { id: "vm-003", model: "현대 아반떼 2024", type: "신차" as const, price: "월 28만원", stock: 8, note: "신용 5등급 이하 가능" },
  { id: "vm-004", model: "기아 쏘렌토 2021 중고", type: "중고" as const, price: "월 32만원", stock: 3, note: "재고 한정, 빠른 출고" },
  { id: "vm-005", model: "현대 투싼 2023", type: "신차" as const, price: "월 31만원", stock: 5, note: "저신용 전용 프로모션" },
  { id: "vm-006", model: "기아 카니발 2022 중고", type: "중고" as const, price: "월 38만원", stock: 2, note: "가족용 저신용 추천" },
  { id: "vm-007", model: "현대 팰리세이드 2024", type: "신차" as const, price: "월 48만원", stock: 1, note: "저신용 별도 심사" },
  { id: "vm-008", model: "기아 K5 2023 중고", type: "중고" as const, price: "월 26만원", stock: 7, note: "신용 회복 지원 상품" },
];

export default function VehicleManagePage() {
  const [search, setSearch] = useState("");
  const [brandF, setBrandF] = useState("전체");
  const [typeF, setTypeF] = useState("전체");

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
        <p className="mt-3 text-slate-600">매일 업데이트되는 차량 재고를 관리합니다. 엑셀 파일로 쉽게 업로드 세팅.</p>
        <p className="text-xs text-slate-500 mt-1">※ 매일 엑셀 재고 파일(신차/중고)에서 데이터를 복사해서 위 VEHICLE_STOCK 배열에 붙여넣으세요. (이 파일만 수정하면 반영)</p>
      </div>

      <div className="bg-white border rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="모델 검색 (예: 그랜저)"
            className="flex-1 border rounded-xl px-4 py-2 text-sm focus:border-[#C5A46E]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-1 text-xs flex-wrap">
            <span className="px-2 text-slate-500">브랜드</span>
            {["전체", "현대", "기아"].map((b) => (
              <button key={b} onClick={() => setBrandF(b)} className={`filter-pill ${brandF === b ? "active" : ""}`}>{b}</button>
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs flex-wrap">
            <span className="px-2 text-slate-500">구분</span>
            {["전체", "신차", "중고"].map((t) => (
              <button key={t} onClick={() => setTypeF(t)} className={`filter-pill ${typeF === t ? "active" : ""}`}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list.map((v) => (
          <div key={v.id} className="card p-4">
            <div className="flex justify-between">
              <div className="font-semibold">{v.model}</div>
              <span className={`text-xs px-2 py-0.5 rounded ${v.type === "신차" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>{v.type}</span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mt-1">{v.price}</div>
            <div className="text-xs text-slate-500 mt-1">재고 {v.stock}대</div>
            <div className="text-xs text-slate-600 mt-2">{v.note}</div>
            <button onClick={() => { /* prefill via CTA */ }} className="mt-3 btn-outline w-full text-xs py-1.5">
              상담 요청
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ConsultationCTA variant="primary" />
      </div>

      <div className="mt-6 text-xs text-slate-500">재고는 실시간 변동됩니다. 정확한 조건은 상담 후 확인하세요.</div>
    </div>
  );
}

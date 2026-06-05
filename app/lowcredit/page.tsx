"use client";

import { lowCreditVehicles } from "@/lib/data/lowcredit";
import ConsultationCTA from "@/components/ConsultationCTA";
import { useState } from "react";

export default function LowCreditPage() {
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");

  const filtered = lowCreditVehicles.filter((v) => {
    const matchSearch = v.model.toLowerCase().includes(search.toLowerCase());
    const matchBrand =
      brandFilter === "전체" || v.model.includes(brandFilter);
    const matchType = typeFilter === "전체" || v.type === typeFilter;
    return matchSearch && matchBrand && matchType;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-6">
        <div className="text-[#C5A46E] text-xs tracking-widest">LOW CREDIT LEASE</div>
        <h1 className="section-title mt-1">저신용렌트</h1>
        <p className="mt-3 text-slate-600">
          저신용자도 이용 가능한 신차/중고차 특화 상품입니다. 매일 업데이트되는 재고를 확인하세요.
        </p>
        <p className="text-xs text-slate-500 mt-1">
          ※ 매일 엑셀 재고 파일(신차/중고)에서 데이터를 복사해서 lib/data/lowcredit.ts 에 붙여넣으세요. (이 파일만 수정하면 반영)
        </p>
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
              <button
                key={b}
                onClick={() => setBrandFilter(b)}
                className={`filter-pill ${brandFilter === b ? "active" : ""}`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs flex-wrap">
            <span className="px-2 text-slate-500">구분</span>
            {["전체", "신차", "중고"].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`filter-pill ${typeFilter === t ? "active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((v) => (
          <div key={v.id} className="card p-4">
            <div className="flex justify-between">
              <div className="font-semibold">{v.model}</div>
              <span
                className={`text-xs px-2 py-0.5 rounded ${v.type === "신차" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}
              >
                {v.type}
              </span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mt-1">{v.price}</div>
            <div className="text-xs text-slate-500 mt-1">재고 {v.stock}대</div>
            <div className="text-xs text-slate-600 mt-2">{v.note}</div>
            <div className="mt-3">
              <ConsultationCTA variant="outline" prefillVehicle={v.model} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        재고는 실시간 변동됩니다. 정확한 조건은 상담 후 확인하세요.
      </div>
    </div>
  );
}

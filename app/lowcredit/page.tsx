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
        <div className="text-[#C5A46E] text-xs tracking-widest">LOW CREDIT INFO</div>
        <h1 className="section-title mt-1">💳 저신용상품</h1>
        <p className="mt-3 text-slate-600">
          저신용자도 이용 가능한 장기렌트 정보를 공유합니다. 실제 경험과 팁을 확인하세요.
        </p>
      </div>

      {/* Info sharing cards - updated per request */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">✅</span>
            <h3 className="font-semibold text-xl">무조건출고</h3>
          </div>
          <p className="text-slate-600">저신용 전용 상품으로 <strong className="text-[#C5A46E]">심사 통과율이 높습니다</strong>. 개인/법인 모두 적용 가능합니다.</p>
          <div className="mt-2 text-xs text-[#C5A46E] font-medium">신용불량, 연체중에도 진행가능</div>
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

      <div className="mb-4">
        <div className="text-sm font-medium text-[#0F172A]">예시 재고 (신차/중고) — 엑셀 업데이트로 실시간 관리</div>
        <p className="text-xs text-slate-500 mt-1">
          ※ 매일 내가 만드는 신차/중고차 엑셀 재고 파일에서 데이터를 복사해서 lib/data/lowcredit.ts 에 붙여넣으세요. (이 파일만 수정하면 반영)
        </p>
      </div>

      {/* Filter bar */}
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

      <div className="mt-8 text-center">
        <ConsultationCTA variant="primary" />
      </div>

      <div className="mt-6 text-xs text-slate-500">
        재고는 실시간 변동됩니다. 정확한 조건은 상담 후 확인하세요. 저신용 전용 상담 환영합니다.
      </div>
    </div>
  );
}

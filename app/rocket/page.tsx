"use client";

import { useState, useMemo } from "react";
import { rocketVehicles, type RocketVehicle } from "@/lib/data/rockets";
import ConsultationCTA from "@/components/ConsultationCTA";

type BrandFilter = "전체" | "현대" | "기아";
type CategoryFilter = "전체" | "세단" | "SUV" | "MPV";
type FuelFilter = "전체" | "하이브리드" | "디젤" | "가솔린" | "전기";

export default function RocketPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<BrandFilter>("전체");
  const [category, setCategory] = useState<CategoryFilter>("전체");
  const [fuel, setFuel] = useState<FuelFilter>("전체");

  const filtered = useMemo(() => {
    let list = [...rocketVehicles] as RocketVehicle[];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (v) =>
          v.model.toLowerCase().includes(q) ||
          v.brand.toLowerCase().includes(q)
      );
    }

    if (brand !== "전체") list = list.filter((v) => v.brand === brand);
    if (category !== "전체") list = list.filter((v) => v.category === category);
    if (fuel !== "전체") list = list.filter((v) => v.fuelType === fuel);

    return list;
  }, [search, brand, category, fuel]);

  const total = rocketVehicles.length;
  const showing = filtered.length;

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="max-w-2xl mb-8">
        <div className="text-[#C5A46E] uppercase tracking-[2px] text-xs">ROCKET DELIVERY</div>
        <h1 className="section-title mt-1">🚀 로켓출고 차량</h1>
        <p className="mt-3 text-slate-600">즉시 또는 빠른 출고가 가능한 차량들입니다. 재고 상황은 실시간 변동되니 상담으로 확인해 주세요.</p>
      </div>

      {/* Filters only (no images, text like 핫딜) */}
      <div className="sticky top-20 z-40 bg-[#F8FAFC] py-4 -mx-1 mb-6 border-b border-slate-100">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="모델 또는 브랜드 검색 (예: 그랜저)"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:border-[#C5A46E] focus:ring-1 focus:ring-[#C5A46E] text-sm bg-white placeholder:text-slate-400"
            />
            <span className="absolute left-3.5 top-3 text-slate-400">🔍</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">브랜드</span>
              {(["전체", "현대", "기아"] as BrandFilter[]).map((b) => (
                <button key={b} onClick={() => setBrand(b)} className={`px-3 py-1 rounded-full border text-xs transition ${brand === b ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{b}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">차종</span>
              {(["전체", "세단", "SUV", "MPV"] as CategoryFilter[]).map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1 rounded-full border text-xs transition ${category === c ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{c}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">연료</span>
              {(["전체", "하이브리드", "디젤", "가솔린", "전기"] as FuelFilter[]).map((f) => (
                <button key={f} onClick={() => setFuel(f)} className={`px-3 py-1 rounded-full border text-xs transition ${fuel === f ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text-only cards like 핫딜 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((v) => (
          <div key={v.id} className="card p-6 flex flex-col border border-slate-200 hover:border-[#C5A46E]/50 transition">
            <div className="font-bold text-xl mb-1 text-[#0F172A]">{v.model}</div>
            <div className="text-3xl font-semibold tracking-[-1px] text-[#0F172A] mb-2">{v.estMonthly || "상담 후 확정"}</div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block text-xs px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700">{v.deliveryDays} 내</span>
              <span className="inline-block text-xs px-2.5 py-0.5 rounded bg-amber-100 text-amber-700">재고 {v.stock}대</span>
              {v.fuelType && <span className="inline-block text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">{v.fuelType}</span>}
            </div>

            {v.note && <div className="text-sm text-slate-600 mb-4">{v.note}</div>}

            <div className="mt-auto pt-4 border-t">
              <ConsultationCTA variant="primary" prefillVehicle={v.model} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t text-xs text-slate-500">
        현재 <span className="font-medium text-[#0F172A]">{showing}대</span> 표시 중 / 전체 {total}대 (현대·기아 엑셀 매일 업데이트 기반 엄선. 실제 재고·조건은 상담으로 확인)
        <div className="mt-1 text-[10px] text-slate-400">엑셀 업로드 시 curate 하여 lib/data/rockets.ts 만 수정</div>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { rocketVehicles, type RocketVehicle } from "@/lib/data/rockets";
import ConsultationCTA from "@/components/ConsultationCTA";

type BrandFilter = "전체" | "현대" | "기아";
type CategoryFilter = "전체" | "세단" | "SUV" | "MPV";
type FuelFilter = "전체" | "하이브리드" | "디젤" | "가솔린" | "전기";
type SortOption = "출고빠른순" | "재고많은순" | "월비용낮은순";

export default function RocketPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<BrandFilter>("전체");
  const [category, setCategory] = useState<CategoryFilter>("전체");
  const [fuel, setFuel] = useState<FuelFilter>("전체");
  const [sort, setSort] = useState<SortOption>();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...rocketVehicles] as RocketVehicle[];

    // search model or brand
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

    // sort
    if (sort === "출고빠른순") {
      // prefer 즉시 / low days numeric-ish
      const dayScore = (d: string) => {
        if (d.includes("즉시")) return 0;
        const m = d.match(/(\d+)/);
        return m ? parseInt(m[1], 10) : 99;
      };
      list.sort((a, b) => dayScore(a.deliveryDays) - dayScore(b.deliveryDays));
    } else if (sort === "재고많은순") {
      list.sort((a, b) => b.stock - a.stock);
    } else if (sort === "월비용낮은순") {
      const getCost = (m?: string) => {
        if (!m) return 999;
        const n = m.match(/(\d+)/);
        return n ? parseInt(n[1], 10) : 999;
      };
      list.sort((a, b) => getCost(a.estMonthly) - getCost(b.estMonthly));
    }

    return list;
  }, [search, brand, category, fuel, sort]);

  const total = rocketVehicles.length;
  const showing = filtered.length;

  const openPrefill = (model: string) => {
    setSelectedVehicle(model);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="max-w-2xl mb-8">
        <div className="text-[#C5A46E] uppercase tracking-[2px] text-xs">ROCKET DELIVERY</div>
        <h1 className="section-title mt-1">로켓출고 차량</h1>
        <p className="mt-3 text-slate-600">"즉시 또는 빠른 출고가 가능한 차량들입니다. 재고 상황은 실시간 변동되니 상담으로 확인해 주세요."</p>
      </div>

      {/* Top Toolbar - live filters/search */}
      <div className="sticky top-20 z-40 bg-[#F8FAFC] py-4 -mx-1 mb-6 border-b border-slate-100">
        <div className="flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="모델 또는 브랜드 검색 (예: 그랜저, 하이브리드)"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 focus:border-[#C5A46E] focus:ring-1 focus:ring-[#C5A46E] text-sm bg-white placeholder:text-slate-400"
            />
            <span className="absolute left-3.5 top-3 text-slate-400">🔍</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {/* 브랜드 pills */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">브랜드</span>
              {(["전체", "현대", "기아"] as BrandFilter[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBrand(b)}
                  className={`px-3 py-1 rounded-full border text-xs transition ${brand === b ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* 차종 */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">차종</span>
              {(["전체", "세단", "SUV", "MPV"] as CategoryFilter[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1 rounded-full border text-xs transition ${category === c ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* 연료 */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">연료</span>
              {(["전체", "하이브리드", "디젤", "가솔린", "전기"] as FuelFilter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFuel(f)}
                  className={`px-3 py-1 rounded-full border text-xs transition ${fuel === f ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 col-span-2 md:col-span-2">
              <span className="text-xs text-slate-500 w-10 shrink-0">정렬</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="flex-1 py-1.5 px-3 rounded-2xl border border-slate-200 bg-white text-sm focus:border-[#C5A46E]"
              >
                <option value="출고빠른순">출고빠른순</option>
                <option value="재고많은순">재고많은순</option>
                <option value="월비용낮은순">월비용낮은순</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main responsive grid compact beautiful cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((v) => {
          const photo = v.imagePlaceholder || "https://picsum.photos/id/1015/400/240";
          return (
            <div key={v.id} className="card overflow-hidden flex flex-col border border-slate-200 hover:border-[#C5A46E]/40 transition">
              {/* Small photo area premium border + overlay badge */}
              <div className="relative h-28 bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={photo}
                  alt={v.model}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.style.background = "linear-gradient(135deg, #0F172A 0%, #1e2937 100%)";
                  }}
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-medium bg-white/95 text-[#0F172A] rounded border border-[#C5A46E]/60 tracking-wider">
                  {v.brand}
                </div>
                {v.estMonthly && (
                  <div className="absolute bottom-2 right-2 px-2.5 py-0.5 text-xs font-semibold bg-[#C5A46E] text-[#0F172A] rounded shadow">
                    {v.estMonthly}
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="font-semibold text-lg leading-tight mb-0.5 tracking-[-0.2px]">{v.model}</div>
                <div className="text-[11px] text-[#C5A46E] uppercase tracking-[1px] mb-2">{v.category} · {v.fuelType || "연료"}</div>

                {/* estMonthly large if present or 상담 요청 */}
                <div className="mb-2">
                  {v.estMonthly ? (
                    <span className="text-2xl font-semibold text-[#0F172A]">{v.estMonthly}</span>
                  ) : (
                    <span className="text-sm font-medium text-[#C5A46E]">상담 요청</span>
                  )}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">{v.deliveryDays} 내</span>
                  <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">재고 {v.stock}대</span>
                </div>

                {/* Short keyPoints or note line */}
                <div className="text-xs text-slate-600 mb-3 line-clamp-2 flex-1">
                  {v.keyPoints && v.keyPoints.length > 0 ? v.keyPoints.slice(0, 2).join(" · ") : v.note || "상담으로 최종 조건 확인"}
                </div>

                {/* Prominent CTA */}
                <ConsultationCTA
                  variant="outline"
                  prefillVehicle={v.model}
                />
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-10 text-slate-500">조건에 맞는 차량이 없습니다. 필터를 조정해 보세요.</div>
        )}
      </div>

      {/* Footer of section */}
      <div className="mt-10 pt-6 border-t text-xs text-slate-500">
        현재 <span className="font-medium text-[#0F172A]">{showing}대</span> 표시 중 / 전체 {total}대 (현대·기아 엑셀 매일 업데이트 기반 엄선. 실제 재고·조건은 상담으로 확인)
        <div className="mt-1 text-[10px] text-slate-400">엑셀 업로드 시 curate 하여 이 파일만 업데이트 (lib/data/rockets.ts)</div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        원하는 차량이 없으신가요? 맞춤 상담을 요청해 주세요.
      </div>
    </div>
  );
}

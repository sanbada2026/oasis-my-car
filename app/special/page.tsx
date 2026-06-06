"use client";

import { useState, useMemo } from "react";
import { specials, type Special } from "@/lib/data/specials";
import ConsultationCTA from "@/components/ConsultationCTA";

type BrandFilter = "전체" | "현대" | "기아";
type CategoryFilter = "전체" | "승용" | "SUV" | "MPV";
type FuelFilter = "전체" | "가솔린" | "하이브리드" | "LPI" | "EV" | "디젤";

export default function SpecialPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<BrandFilter>("전체");
  const [category, setCategory] = useState<CategoryFilter>("전체");
  const [fuel, setFuel] = useState<FuelFilter>("전체");

  const filtered = useMemo(() => {
    return specials.filter((s: Special) => {
      if (brand !== "전체" && s.brand !== brand) return false;
      if (category !== "전체" && s.category !== category) return false;
      if (fuel !== "전체" && s.fuelType !== fuel) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!s.model.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [search, brand, category, fuel]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="max-w-2xl mb-6">
        <div className="text-[#C5A46E] text-sm tracking-widest">TODAY'S HOT DEAL</div>
        <h1 className="section-title mt-2">🔥 오늘의 핫딜차량</h1>
        <p className="mt-2 text-lg text-slate-600">
          어느곳과 비교해도 자신있는 <strong className="text-[#C5A46E]">최저금리</strong> 견적
        </p>
      </div>

      {/* Filters - same style as rocket */}
      <div className="bg-white border rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="모델 검색 (예: 그랜저)"
            className="flex-1 border rounded-xl px-4 py-2 text-sm focus:border-[#C5A46E]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">제조사</span>
              {(["전체", "현대", "기아"] as BrandFilter[]).map((b) => (
                <button key={b} onClick={() => setBrand(b)} className={`px-3 py-1 rounded-full border text-xs transition ${brand === b ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{b}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">차종</span>
              {(["전체", "승용", "SUV", "MPV"] as CategoryFilter[]).map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1 rounded-full border text-xs transition ${category === c ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{c}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-500 mr-1 w-10">연료</span>
              {(["전체", "가솔린", "하이브리드", "LPI", "EV", "디젤"] as FuelFilter[]).map((f) => (
                <button key={f} onClick={() => setFuel(f)} className={`px-3 py-1 rounded-full border text-xs transition ${fuel === f ? "bg-[#0F172A] text-white border-[#0F172A]" : "bg-white hover:bg-slate-50 border-slate-200"}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <div key={s.id} className="card p-6 flex flex-col border border-slate-200 hover:border-[#C5A46E]/50 transition">
            <div className="font-bold text-xl mb-1 text-[#0F172A]">{s.model}</div>
            <div className="text-4xl font-semibold tracking-[-1px] text-[#0F172A] mb-3">{s.monthly}</div>

            {s.badge && (
              <div className="inline-block text-xs bg-[#C5A46E]/10 text-[#B38A4F] px-3 py-1 rounded mb-2 self-start">{s.badge}</div>
            )}
            {s.note && <div className="text-sm text-slate-600 mb-4">{s.note}</div>}

            <div className="mt-auto pt-4 border-t">
              <ConsultationCTA variant="primary" prefillVehicle={s.model} />
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="col-span-full text-center py-10 text-slate-500">조건에 맞는 핫딜이 없습니다.</div>}
      </div>

      <div className="mt-12 text-xs text-slate-500 border-t pt-6">
        정확한 조건은 상담 후 확정됩니다. 재고 및 금리는 변동될 수 있습니다.
      </div>
    </div>
  );
}

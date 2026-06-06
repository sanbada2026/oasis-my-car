"use client";

import { useState } from "react";
import ConsultationCTA from "@/components/ConsultationCTA";

// 소모품 교체 주기 데이터
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
  { item: "배터리", period: "3~4년", km: "-", note: "방전 시 무상 점검 권장" },
];

// 사고 대처 - 총 20개 캐피탈 & 렌트사 (사용자 jpg 20260606_182939.jpg 기반 + 하모니렌트 추가)
// 형식: 고객센터 XXXX-XXXX, 긴급출동 XXXX-XXXX
const CAPITAL_INSURANCE = [
  { capital: "현대캐피탈", logo: "현대", customerCenter: "1577-0700", emergency: "1577-0700" },
  { capital: "KB캐피탈", logo: "KB", customerCenter: "1588-0079", emergency: "1588-0079" },
  { capital: "롯데캐피탈", logo: "롯데", customerCenter: "1588-8100", emergency: "1588-8100" },
  { capital: "우리금융캐피탈", logo: "우리", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "하나캐피탈", logo: "하나", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "신한캐피탈", logo: "신한", customerCenter: "1599-9500", emergency: "1599-9500" },
  { capital: "BNK캐피탈", logo: "BNK", customerCenter: "1577-2280", emergency: "1644-2254" },
  { capital: "JB캐피탈", logo: "JB", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "DGB캐피탈", logo: "DGB", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "메리츠캐피탈", logo: "메리츠", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "한국캐피탈", logo: "한국", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "아시아캐피탈", logo: "아시아", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "유진캐피탈", logo: "유진", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "신영캐피탈", logo: "신영", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "대신캐피탈", logo: "대신", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "하모니렌트", logo: "하모니", customerCenter: "1588-5802", emergency: "1661-7977" },
  { capital: "AJ렌터카", logo: "AJ", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "쏘카", logo: "쏘카", customerCenter: "1599-9500", emergency: "1599-9500" },
  { capital: "그린카", logo: "그린", customerCenter: "1588-9500", emergency: "1588-9500" },
  { capital: "피플카", logo: "피플", customerCenter: "1588-9500", emergency: "1588-9500" },
];

export default function VehicleManagePage() {
  const [search, setSearch] = useState("");
  const [brandF, setBrandF] = useState("전체");
  const [typeF, setTypeF] = useState("전체");

  // 재고 부분은 사용자 요청으로 완전 삭제

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-6">
        <div className="text-[#C5A46E] text-xs tracking-widest">VEHICLE MANAGEMENT</div>
        <h1 className="section-title mt-1">🔧 차량관리</h1>
        <p className="mt-3 text-slate-600">매일 업데이트되는 차량 재고와 유지관리/사고 대처 정보를 확인하세요.</p>
      </div>

      {/* 소모품 교체 주기 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🛢️ 소모품 교체 시기 안내</h2>
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

      {/* 사고 대처 - 20개 풀 리스트 */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">🚨 사고 발생 시 대처 &amp; 각 캐피탈&렌트사 연락처 (총 20개)</h2>
        <p className="text-sm text-slate-600 mb-4">각 캐피탈 및 렌트사 고객센터와 긴급출동 번호입니다. 사고 발생 시 해당 번호로 연락하세요.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPITAL_INSURANCE.map((c, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A46E]/10 flex items-center justify-center text-lg font-bold text-[#C5A46E]">{c.logo}</div>
                <div className="font-semibold text-lg">{c.capital}</div>
              </div>
              <div className="text-sm space-y-1">
                <div><span className="text-slate-500">고객센터:</span> <span className="font-medium">{c.customerCenter}</span></div>
                <div><span className="text-slate-500">긴급출동:</span> <span className="font-medium">{c.emergency}</span></div>
              </div>
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

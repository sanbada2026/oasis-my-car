export interface Special {
  id: string;
  model: string;
  monthly: string;
  badge?: string;
  note?: string;
  brand: "현대" | "기아";
  category: "승용" | "SUV" | "MPV";
  fuelType: "하이브리드" | "디젤" | "가솔린" | "전기";
}

// 오늘의 핫딜차량 데이터
// 필터 지원: brand(현대/기아), category(승용/SUV/MPV), fuelType
// monthly는 표시하지만 로켓처럼 가격 강조는 최소화 가능. 이 파일만 수정하면 /special 과 teaser 반영.
export const specials: Special[] = [
  {
    id: "sp-001",
    model: "디올뉴그랜저HEV 캘리그래피",
    monthly: "월 65만원",
    badge: "재고특가",
    note: "재고할인 적용",
    brand: "현대",
    category: "승용",
    fuelType: "하이브리드",
  },
  {
    id: "sp-002",
    model: "2025 싼타페 하이브리드 캘리그래피",
    monthly: "월 58만원",
    badge: "재고특가",
    note: "즉시 출고 가능",
    brand: "현대",
    category: "SUV",
    fuelType: "하이브리드",
  },
  {
    id: "sp-003",
    model: "기아 카니발 하이브리드 7인승",
    monthly: "월 55만원",
    note: "가족용 최적 구성",
    brand: "기아",
    category: "MPV",
    fuelType: "하이브리드",
  },
  {
    id: "sp-004",
    model: "기아 쏘렌토 하이브리드 시그니처",
    monthly: "월 52만원",
    badge: "핫딜",
    brand: "기아",
    category: "SUV",
    fuelType: "하이브리드",
  },
  {
    id: "sp-005",
    model: "현대 팰리세이드 디젤 3.0",
    monthly: "월 68만원",
    note: "대형 SUV 재고 한정",
    brand: "현대",
    category: "SUV",
    fuelType: "디젤",
  },
  {
    id: "sp-006",
    model: "기아 K8 하이브리드 노블레스",
    monthly: "월 49만원",
    badge: "신규고객",
    note: "최저금리 적용",
    brand: "기아",
    category: "승용",
    fuelType: "하이브리드",
  },
  {
    id: "sp-007",
    model: "현대 투싼 하이브리드 인스퍼레이션",
    monthly: "월 46만원",
    brand: "현대",
    category: "SUV",
    fuelType: "하이브리드",
  },
  {
    id: "sp-008",
    model: "기아 스포티지 하이브리드 시그니처",
    monthly: "월 47만원",
    badge: "재고특가",
    note: "연비 우수 모델",
    brand: "기아",
    category: "SUV",
    fuelType: "하이브리드",
  },
  {
    id: "sp-009",
    model: "현대 그랜저 가솔린 2.5",
    monthly: "월 45만원",
    badge: "핫딜",
    brand: "현대",
    category: "승용",
    fuelType: "가솔린",
  },
];

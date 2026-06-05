export interface LowCreditVehicle {
  id: string;
  model: string;
  type: "신차" | "중고";
  price: string; // e.g. "월 28만원"
  stock: number;
  note: string;
}

// 저신용상품 (저신용장기렌트 정보 공유) 재고 업데이트 방법:
// 매일 당신이 만드는 신차/중고차 엑셀 재고 파일을 열어서
// model, type(신차/중고), price(월 XX만원), stock, note 를 복사해서
// 아래 배열에 새 객체로 추가/수정하세요.
// 이 파일만 수정하면 /lowcredit 페이지(4번 저신용상품) + 필터/그리드에 바로 반영됩니다.
// note에는 "저신용 협의 가능", "무보증 협의 가능", "승인율 높음" 등 실제 팁 기재.
export const lowCreditVehicles: LowCreditVehicle[] = [
  {
    id: "lc-001",
    model: "현대 그랜저 2023",
    type: "신차",
    price: "월 42만원",
    stock: 4,
    note: "저신용 협의 가능",
  },
  {
    id: "lc-002",
    model: "기아 K8 2022 중고",
    type: "중고",
    price: "월 35만원",
    stock: 6,
    note: "저신용 승인율 높음",
  },
  {
    id: "lc-003",
    model: "현대 아반떼 2024",
    type: "신차",
    price: "월 28만원",
    stock: 8,
    note: "신용 5등급 이하 가능",
  },
  {
    id: "lc-004",
    model: "기아 쏘렌토 2021 중고",
    type: "중고",
    price: "월 32만원",
    stock: 3,
    note: "재고 한정, 빠른 출고",
  },
  {
    id: "lc-005",
    model: "현대 투싼 2023",
    type: "신차",
    price: "월 31만원",
    stock: 5,
    note: "저신용 전용 프로모션",
  },
  {
    id: "lc-006",
    model: "기아 카니발 2022 중고",
    type: "중고",
    price: "월 38만원",
    stock: 2,
    note: "가족용 저신용 추천",
  },
  {
    id: "lc-007",
    model: "현대 팰리세이드 2024",
    type: "신차",
    price: "월 48만원",
    stock: 1,
    note: "저신용 별도 심사",
  },
  {
    id: "lc-008",
    model: "기아 K5 2023 중고",
    type: "중고",
    price: "월 26만원",
    stock: 7,
    note: "신용 회복 지원 상품",
  },
];
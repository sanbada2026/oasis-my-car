export interface Special {
  id: string;
  model: string;
  monthly: string;
  badge?: string;
  note?: string;
}

// 프로모션 차량(특가) 추가 방법:
// 이 배열에 새 객체를 추가한 후 저장하세요.
// Hyundai/Kia 인기 모델 위주로 월 렌탈료 45~75만원 범위로 현실적으로 작성.
// badge는 "프로모션", "재고특가" 등, note는 "재고할인 적용", "즉시 출고" 등 부가 설명.
// 사이트 전체에 반영되니 이 파일만 수정하면 됩니다.
export const specials: Special[] = [
  {
    id: "sp-001",
    model: "디올뉴그랜저HEV 캘리그래피",
    monthly: "월 65만원",
    badge: "프로모션",
    note: "재고할인 적용",
  },
  {
    id: "sp-002",
    model: "2025 싼타페 하이브리드 캘리그래피",
    monthly: "월 58만원",
    badge: "재고특가",
    note: "즉시 출고 가능",
  },
  {
    id: "sp-003",
    model: "기아 카니발 하이브리드 7인승",
    monthly: "월 55만원",
    note: "가족용 최적 구성",
  },
  {
    id: "sp-004",
    model: "기아 쏘레토 하이브리드 시그니처",
    monthly: "월 52만원",
    badge: "프로모션",
  },
  {
    id: "sp-005",
    model: "현대 팔리세이드 디젤 3.0",
    monthly: "월 68만원",
    note: "대형 SUV 재고 한정",
  },
  {
    id: "sp-006",
    model: "기아 K8 하이브리드 노블레스",
    monthly: "월 49만원",
    badge: "신규고객",
    note: "저금리 프로모션",
  },
  {
    id: "sp-007",
    model: "현대 투싼 하이브리드 인스퍼레이션",
    monthly: "월 46만원",
  },
  {
    id: "sp-008",
    model: "기아 스포티지 하이브리드 시그니처",
    monthly: "월 47만원",
    badge: "재고특가",
    note: "연비 우수 모델",
  },
];

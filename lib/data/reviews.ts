export interface Review {
  id: string;
  customer: string;
  vehicle: string;
  quote: string;
  date: string;
}

// 출고 후기 추가 방법: 이 배열에 새 객체 하나 추가 후 저장만 하면 끝!
// 새로운 후기는 이 파일 하나만 수정하면 바로 반영됩니다.
export const reviews: Review[] = [
  {
    id: "rv-001",
    customer: "김** 고객님",
    vehicle: "기아 카니발 하이브리드",
    quote: "대표님께서 직접 상담해주셔서 안심되었습니다. 출고 후에도 깨끗이 챙겨주셔서 감사합니다.",
    date: "2025. 03",
  },
  {
    id: "rv-002",
    customer: "박** 경영진",
    vehicle: "현대 그랜저 하이브리드",
    quote: "AI 견적이 아니라 직접 만나 설명들어주셔서 행복했습니다. 2년 지나 지금도 참 좋은 선택이었다고 생각합니다.",
    date: "2025. 01",
  },
  {
    id: "rv-003",
    customer: "이** 사업자",
    vehicle: "기아 쏐레토 하이브리드",
    quote: "로켓출고로 알아봤는데 실제로 빠르게 나왔습니다. 사후에 문제 있을 때 바로 대응해주신 점이 인상 깊았습니다.",
    date: "2024. 11",
  },
];

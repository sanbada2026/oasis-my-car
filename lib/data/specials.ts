export interface Special {
  id: string;
  title: string;
  description: string;
  conditions: string[];
  highlight?: string;
}

// 특가 조건 추가 방법: 이 배열에 새 객체 하나 추가 후 저장 하면 끝!
// 새로운 특가 추가 시 이 파일만 수정하면 사이트 전체에 반영됩니다.
export const specials: Special[] = [
  {
    id: "long-36",
    title: "36개월 이상 장기 계약 특가",
    description: "안정적인 장기 고객을 위한 최우선 조건 제공",
    conditions: ["36개월 이상 계약", "보증금 0~10% 협의 가능", "재계약 시 추가 혜택"],
    highlight: "1:1 전문가 매칭 포함",
  },
  {
    id: "biz-renewal",
    title: "법인 / 사업자 재계약 우대",
    description: "기업 고객 및 재계약 시 특별 조건 적용",
    conditions: ["법인/사업자 이용", "재계약 2회 차 이상", "유지비 개선 안내"],
    highlight: "전문 사후 관리 포함",
  },
  {
    id: "family-package",
    title: "가족 용도 안정 패키지",
    description: "가정용 차량을 안정적으로 우대하는 분들을 위한 패키지",
    conditions: ["가족용 (7인승 이상)", "36~60개월", "자동 재계약 안내"],
  },
];

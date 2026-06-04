export interface RocketVehicle {
  id: string;
  model: string;
  category: string;
  keyPoints: string[];
  note: string;
}

// 로켓출고 차량 추가: 이 배열에 추가 후 저장 하면 반영됩니다.
// 즉시 출고 가능 차량만 엄선해서 관리합니다.
export const rocketVehicles: RocketVehicle[] = [
  {
    id: "rv-grandeur",
    model: "현대 그랜저 하이브리드",
    category: "세단",
    keyPoints: ["즉시 출고 가능 재고 확보", "프리미엄 패키지 협의", "개인/법인 모두 가능"],
    note: "상담 후 정확한 출고 일정 확인",
  },
  {
    id: "rv-carnival",
    model: "기아 카니발 하이브리드",
    category: "MPV",
    keyPoints: ["요즘 가장 인기 재고 차", "가족 용도 최적화", "로켓 출고 실적 다수"],
    note: "7인승 / 9인승 옵션 협의",
  },
  {
    id: "rv-sorento",
    model: "기아 쏐레토 하이브리드",
    category: "SUV",
    keyPoints: ["실제 출고 가능", "고객 만족도 높은 모델", "여러 옵션 패키지 가능"],
    note: "상담 시 재고 상황 안내",
  },
];

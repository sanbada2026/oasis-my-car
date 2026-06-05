export interface Review {
  id: string;
  photoUrl: string;
  model: string;
  ageGroup: string;
  purpose: string;
  whyChose: string;
  preWorried: string;
  bestDuring: string;
  afterWord: string;
}

// 출고 후기 추가 방법: 이 배열에 새 객체 하나 추가 후 저장만 하면 끝!
// photoUrl은 https://picsum.photos/id/NN/400/300 같은 distinct 이미지 사용 (각각 다른 NN).
// model: 출고차종 전체 이름, ageGroup: "30대", "40대" 등.
// purpose: "출퇴근" / "가족용" / "업무용" / "법인차량" / "기타" 중 정확히 하나 사용.
// whyChose, preWorried, bestDuring, afterWord: 자연스럽고 솔직한 실제 고객 후기 문장으로 작성.
// 새로운 후기는 이 파일 하나만 수정하면 바로 반영됩니다.
export const reviews: Review[] = [
  {
    id: "rv-001",
    photoUrl: "https://picsum.photos/id/29/400/300",
    model: "기아 카니발 하이브리드 7인승",
    ageGroup: "40대",
    purpose: "가족용",
    whyChose: "가족 여행과 아이들 통학 모두 편해서 카니발을 선택했습니다. 상담 때 조건이 명확해서 믿음이 갔어요.",
    preWorried: "장기렌트 비용이 생각보다 많이 들까, 사고 났을 때 처리 어떻게 되는지 걱정했습니다.",
    bestDuring: "출고 후 첫 추석에 가족 8명이 타고 고향 다녀왔는데 공간과 승차감이 정말 좋았습니다.",
    afterWord: "유지비도 예상보다 적게 나오고, 사후 연락도 잘 주셔서 안심하고 타고 있습니다. 추천합니다.",
  },
  {
    id: "rv-002",
    photoUrl: "https://picsum.photos/id/30/400/300",
    model: "현대 그랜저 하이브리드 캘리그래피",
    ageGroup: "50대",
    purpose: "출퇴근",
    whyChose: "대표님께서 직접 상담해 주시고, AI 견적이 아닌 실차량 설명이 마음에 들었습니다.",
    preWorried: "고급 세단이라 월 비용이 부담스럽지 않을까, 연비도 걱정됐습니다.",
    bestDuring: "매일 출퇴근 80km 타는데 하이브리드 연비가 좋아서 기름값이 많이 줄었어요.",
    afterWord: "2년 넘게 타면서 한 번도 후회한 적 없고, 계약 만기 때 재계약할 생각입니다.",
  },
  {
    id: "rv-003",
    photoUrl: "https://picsum.photos/id/40/400/300",
    model: "기아 쏘렌토 하이브리드",
    ageGroup: "30대 후반",
    purpose: "업무용",
    whyChose: "업무로 지방 출장이 잦아서 SUV가 필요했는데, 로켓 출고로 빠르게 받을 수 있었습니다.",
    preWorried: "업무 차량이라 고장 나면 큰일 날까 봐, 사후관리 서비스가 제대로 될지 걱정했습니다.",
    bestDuring: "출고 1주일 만에 출장 다녀왔는데 트렁크 공간과 안정감이 업무에 딱 맞았습니다.",
    afterWord: "문제 생겼을 때 바로 대응해 주신 점이 인상 깊었습니다. 다음 차도 여기서 할게요.",
  },
  {
    id: "rv-004",
    photoUrl: "https://picsum.photos/id/48/400/300",
    model: "현대 팰리세이드 디젤",
    ageGroup: "40대 초반",
    purpose: "법인차량",
    whyChose: "법인 명의로 계약해야 해서 조건이 까다로웠는데, 투명하게 안내해 주셔서 진행했습니다.",
    preWorried: "법인 차량이라 세금이나 보험 처리가 복잡할까, 담당자가 바뀌면 불편할까 걱정했습니다.",
    bestDuring: "임원진이 타고 다니는데 승차감과 안전장비가 만족도가 높아서 좋았습니다.",
    afterWord: "계약 후에도 지속적으로 연락 주시고 관리해 주셔서 법인 계약으로 만족합니다.",
  },
  {
    id: "rv-005",
    photoUrl: "https://picsum.photos/id/59/400/300",
    model: "기아 K8 하이브리드",
    ageGroup: "30대",
    purpose: "기타",
    whyChose: "개인 사업자로 세단이 필요했는데, K8의 디자인과 편의사양이 마음에 들어 선택했습니다.",
    preWorried: "신차 장기렌트가 처음이라 계약서 내용과 숨은 비용이 있을까 봐 불안했습니다.",
    bestDuring: "출고 후 6개월 동안 고속도로 주행이 많았는데, 정숙성과 연비 모두 기대 이상이었습니다.",
    afterWord: "상담에서부터 출고, 사후까지 모두 만족스럽습니다. 주변 지인에게도 추천하고 있어요.",
  },
  {
    id: "rv-006",
    photoUrl: "https://picsum.photos/id/101/400/300",
    model: "현대 투싼 하이브리드",
    ageGroup: "20대 후반",
    purpose: "출퇴근",
    whyChose: "첫 차로 컴팩트 SUV를 원했는데, 월 비용이 합리적이고 옵션이 잘 들어 있어서 좋았습니다.",
    preWorried: "젊은 나이에 장기 계약이라 후회할까, 차량 크기가 일상생활에 맞을지 고민했습니다.",
    bestDuring: "도심 출퇴근과 주말 나들이 모두 편하고, 주차도 수월해서 일상이 편해졌습니다.",
    afterWord: "계약 잘한 것 같아요. 3년 후에도 여기서 또 이용할 계획입니다.",
  },
];

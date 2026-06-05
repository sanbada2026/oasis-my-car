**oasis-my-car**

10년 전문가(정한일 대표)가 직접 운영하는 신차 장기렌트 · 오토리스 전문 홈페이지. AI/광고가 아닌 사람의 진심과 경험으로 고객 한 분 한 분을 케어합니다.

## 👁️ 시안 (Visual Draft) — 지금 바로 보기 (HTML)

“시안으로 HTML로 눈으로 봐야 알거 같아” 피드백 반영. **모든 최근 수정사항(로고 fallback, 상담 요청 전용, 오늘의 프로모션 차량 5-10대, 로켓 고볼륨 필터 UI, 출고후기 사진+7필드, 카톡 링크, 하단 문구 등) 반영됨.**

1. 이 레포 다운로드 (ZIP) 혹은 clone
2. `previews/시안-전체.html` 파일을 브라우저에서 열기 (더블클릭)
3. 또는 GitHub 파일 페이지에서 Raw → 우클릭 후 로컬 저장 후 열기

- 헤더, 내비, 카드, 버튼, 텍스트, 컬러, 로고(텍스트 fallback 포함), 폼 등 실제 구현 코드와 **정확히 일치**
- Tailwind CDN 기반 자체 포함 파일 (Node 없이 바로 실행)
- 모바일 에뮬레이션: 브라우저 창 줄이기 또는 DevTools 모바일 모드 사용

## 라이브 프리뷰 (Interactive)
GitHub 레포를 Vercel에서 Import 하면 실제 동작하는 사이트를 바로 테스트할 수 있습니다.

## 데이터 업데이트 방법 (쉬운 추가)
- **오늘의 프로모션 차량 (특가)**: `lib/data/specials.ts` 에 새 {id, model, monthly, badge?, note?} 추가. 예: 디올뉴그랜저HEV 캘리그래피 월 65만원. 파일만 수정 = 전체 반영.
- **로켓출고 차량 (고볼륨 대응)**: `lib/data/rockets.ts` 에 현대/기아 엑셀 매일 업로드 시 curate(선별)해서 15~100+ entries 추가. brand/fuelType/estMonthly/deliveryDays/stock/imagePlaceholder 등 필드 사용. 페이지에 실시간 필터(브랜드/차종/연료/검색/정렬) + 컴팩트 카드 그리드 자동 적용.
- **출고 후기**: `lib/data/reviews.ts` 에 새 객체 추가. photoUrl (picsum 등), model(출고차종), ageGroup, purpose(출퇴근/가족용/업무용/법인차량/기타), whyChose, preWorried, bestDuring, afterWord 정확히. 사진+7필드 구조 자동 표시.
- **로고**: public/images/logo.svg (또는 .png) 넣기. 깨질 경우 Header/Footer/시안 모두 자동으로 네이비 "오아시스 마이카" 또는 "Oasis My car" 텍스트 fallback (지정 폰트 스타일).

## 구현 완료 상태
- Next.js 15 + TS + Tailwind 전체 구현 (GitHub main 브랜치)
- 정확 메뉴 1~5 + 상담 요청 CTA (견적/1:1/이메일/사후관리/직접만남 제거, 카톡 추가)
- 데이터 중심 (쉽게 추가 가능, 엑셀→로켓 curate 가이드 포함)
- 항상 눈에 띄는 상담 요청 CTA + 모달 (차종 프리필 지원)
- 고볼륨 로켓 UI (필터+컴팩트 5열 그리드, N/M 카운터, 시안성 높음)
- premium navy+gold, mobile-first, 신뢰감 있는 카피

---

(이하 기존 상세 내용은 git history 또는 이전 버전 참조)
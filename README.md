## oasis-my-car

**오아시스 마이카** — 10년차 전문가(정한일 대표)가 직접 운영하는 신차 장기렌트 · 오토리스 전문 홈페이지

고급스럽고 신뢰감 있는 디자인 (올오토홀딩스 스타일 참고). 가격/풀라인업 배제, 전문성·진심·고객 중심.

### 메뉴 (정확히 6개)
1. 회사 소개
2. 특가 조건
3. 로켓출고 차량 (즉시 출고)
4. 출고 후기
5. 사후관리
6. 상담 · 견적 요청 (항상 눈에 띄게)

### 기술
- Next.js 15 App Router + TS + Tailwind
- 완전 반응형 + Vercel 배포
- 데이터 드리븐 (특가/후기/차량 쉽게 추가)

### 로컬 실행
```bash
git clone https://github.com/sanbada2026/oasis-my-car.git
cd oasis-my-car
npm install
npm run dev
```

### 콘텐츠 업데이트 (가장 중요)
- 특가: `lib/data/specials.ts` 에 객체 추가
- 후기: `lib/data/reviews.ts`
- 로켓 차량: `lib/data/rockets.ts`
- 회사 소개 본문: `lib/content/about.ts`

변경 후 push → Vercel 자동 배포.

### 배포
GitHub 연결 후 [Vercel](https://vercel.com)에서 Import repository 추천.

### 디자인 원칙
- Navy + Warm Gold 고급 팔레트
- 큰 여백, 전문 카드, 강한 CTA
- "사람의 경험과 진심" 메시지 일관 유지

### 추가 작업 제안 (사용자 승인 후)
- 실제 사업자 정보 / 주소 / 전화번호 반영
- 실제 후기 사진 또는 대표 사진
- Resend 등으로 폼 메일 알림 연동
- 카카오톡 채널 딥링크

GitHub: https://github.com/sanbada2026/oasis-my-car

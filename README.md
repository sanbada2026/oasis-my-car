# oasis-my-car

올오토홀딩스 스타일의 신뢰감 있고 고급스러운 신차 장기렌트 · 오토리스 전문 홈페이지.

## 기술 스택
- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- 모바일 완벽 반응형
- Vercel 배포 최적화

## 사이트 구조 (메뉴 6개)
1. 회사 소개
2. 특가 조건
3. 로켓출고 차량
4. 출고 후기
5. 사후관리
6. 상담 · 견적 요청 (ud56b 눈에 띄게)

## 콘텐츠 추가 / 수정 (uac00장 중요)
- 특가 조건: `lib/data/specials.ts`
- 출고 후기: `lib/data/reviews.ts`
- 로켓출고 차량: `lib/data/rockets.ts`
- 회사 소개 텍스트: `lib/content/about.ts`

새 항목 추가 후 `git push` 하면 Vercel에 자동 반영됩니다.

## 개발 / 배포
```bash
npm install
npm run dev
npm run build
```

Vercel: GitHub 연결 후 자동 배포 권장.

## 참고
- 디자인: allautoholdings.com (uace0급스러운 신뢰감, 강한 CTA, 전문가 강조)
- 차별점: 화려한 광고 / AI 견적 대신 진심 전문가 직접 상담 + 책임 사후관리

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/80 pt-14 pb-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-10">
        <div className="md:col-span-5">
          <div className="font-semibold text-2xl text-white tracking-tight mb-2">Oasis My Car</div>
          <div className="text-white/60">10년 전문가의 진심 상담</div>
          <div className="mt-6 text-xs leading-relaxed text-white/50 max-w-xs">
            오아시스 마이카는 10년 이상 장기렌트 · 오토리스 현장 전문가가 직접 운영하는 전문 기업입니다.<br />
            누적 출고 2,000대+ 고객의 신뢰를 받고 있습니다.
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-medium text-white mb-4 text-sm tracking-widest">MENU</div>
          <div className="space-y-2.5 text-white/70">
            <Link href="/about" className="block hover:text-white">1. 회사 소개</Link>
            <Link href="/special" className="block hover:text-white">2. 특가 조건</Link>
            <Link href="/rocket" className="block hover:text-white">3. 로켓출고 차량</Link>
            <Link href="/reviews" className="block hover:text-white">4. 출고 후기</Link>
            <Link href="/aftercare" className="block hover:text-white">5. 사후관리</Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="font-medium text-white mb-4 text-sm tracking-widest">CONTACT</div>
          <div className="space-y-1.5 text-white/80">
            <a href="tel:1599-1496" className="block hover:text-white font-medium text-lg tracking-tight">1599-1496</a>
            <div className="text-xs pt-1">
              경기도 안양시 동안구 관악대로360번길 10<br />
              (관양동)
            </div>
            <div className="pt-3 text-xs">
              상담 시간: 평일 09:00 ~ 18:00<br />
              점심 시간 무관
            </div>
          </div>
          <div className="mt-8 text-[10px] text-white/40">
            주식회사 오아시스 마이카 | 대표 정한일<br />
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-[10px] text-white/40 flex flex-wrap gap-x-4">
        <span>사업자등록번호: 예시 000-00-00000</span>
        <span>통신판매업 신고번호: 제0000호</span>
        <Link href="/contact" className="hover:text-white/60">1:1 상담 요청</Link>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-[#C5A46E] text-sm tracking-[4px] mb-4">404</div>
        <h1 className="text-4xl font-semibold mb-3">페이지를 찾을 수 없습니다</h1>
        <p className="text-slate-600 mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <Link href="/" className="btn-primary inline-block px-8 py-3">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}

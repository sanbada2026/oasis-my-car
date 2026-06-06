"use client";

import Link from "next/link";
import { ArrowRight, Shield, Users, Clock, Award } from "lucide-react";
import ConsultationCTA from "@/components/ConsultationCTA";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0F172A] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8c8f0c6a9?q=80&w=2070')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 text-sm tracking-[2px] font-medium">
            10년 전문 직접 운영
          </div>
          <h1 className="text-6xl md:text-[72px] font-semibold tracking-[-2px] leading-[1.05] mb-5 max-w-5xl mx-auto">
            차를 판매하지 않습니다.
          </h1>
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-white/90 mb-6 leading-snug font-medium">
            우리는 고객에게 가장 유리한 선택을 제안합니다.
          </p>
          <div className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-10 mt-4">
            10년 경력 │ 누적 출고 2,000대+ │ 누적 조회수 150만+
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationCTA variant="primary" size="lg" />
            <Link href="/rocket" className="btn-outline border-white/70 text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 text-lg">
              로켓출고 차량 보기 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/special" className="btn-outline border-white/70 text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 text-lg">
              🔥 핫딜차량 보기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-12 text-white/60 text-sm tracking-widest">SCROLL TO EXPLORE</div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {[
            { icon: Clock, label: "전문 경력", value: "10년+" },
            { icon: Award, label: "누적 출고", value: "2,000대+" },
            { icon: Users, label: "1:1 현장 상담", value: "전담 제공" },
            { icon: Shield, label: "사후 책임", value: "계약 만기까지" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <item.icon className="w-7 h-7 mb-3 text-[#C5A46E]" />
              <div className="trust-number text-[#0F172A]">{item.value}</div>
              <div className="text-sm text-slate-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation - 차별점 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#C5A46E] text-sm tracking-[3px] font-medium mb-3">오아시스 마이카만의 차별점</div>
          <h2 className="section-title">AI나 광고가 아닌, 진심으로 케어합니다</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "현장 전문가 직접 상담", desc: "10년 경력전문가팀이 숫자만 나열되는 AI견적이 아닌 고객 한분 한분 상황과 환경에 맞는 맞춤 컨설팅 형식의 상담을 무료로 해드립니다." },
            { title: "출고 후까지 책임집니다", desc: "계약 완료가 끝이 아닙니다. 차량 문제, 유지비, 만기 재계약 까지 항상 함께합니다." },
            { title: "투명하고 진심 있는 조건", desc: "화려한 판촉이 아닙니다. 실제 고객에게 유리한 조건만을 투명히 안내드립니다." },
          ].map((item, idx) => (
            <div key={idx} className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-[#C5A46E]/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#C5A46E]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#0F172A]">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Menu Teaser */}
      <section className="bg-white border-t border-b py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[#C5A46E] text-xs tracking-[2px]">EXPLORE</div>
              <h2 className="text-3xl font-semibold">자세히 알아보세요</h2>
            </div>
            <Link href="/about" className="hidden md:inline-flex items-center text-sm text-[#C5A46E] hover:underline"> 전체 보기 <ArrowRight className="ml-1 w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { href: "/about", label: "🏢 회사 소개", sub: "정한일 대표의 이야기" },
              { href: "/special", label: "🔥 핫딜차량", sub: "핫한 조건" },
              { href: "/rocket", label: "🚀 로켓출고 차량", sub: "즉시 출고 가능" },
              { href: "/lowcredit", label: "💳 저신용상품", sub: "저신용 장기렌트 정보" },
              { href: "/aftercare", label: "🔧 차량관리", sub: "차량 재고 관리" },
            ].map((m, i) => (
              <Link key={i} href={m.href} className="group card p-6 flex flex-col justify-between min-h-[140px] hover:border-[#C5A46E]">
                <div>
                  <div className="font-semibold text-xl group-hover:text-[#C5A46E] transition-colors">{m.label}</div>
                  <div className="text-sm text-slate-500 mt-1">{m.sub}</div>
                </div>
                <ArrowRight className="w-5 h-5 mt-4 text-[#C5A46E] opacity-60 group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-4">지금 바로 상담 요청하세요</h2>
        <p className="text-xl text-slate-600 mb-8">10년 경력의 전문가가 직접 답변드립니다.</p>
        <ConsultationCTA variant="primary" size="lg" />
      </section>
    </div>
  );
}

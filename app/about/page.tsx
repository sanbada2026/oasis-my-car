import { aboutContent } from "@/lib/content/about";
import Link from "next/link";
import ConsultationCTA from "./components/ConsultationCTA";

export default function AboutPage() {
  const { hero, story, numbers, philosophy } = aboutContent;

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#C5A46E] text-sm tracking-[3px] mb-3">OUR STORY</div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-1px]">{hero.title}</h1>
          <p className="mt-4 text-2xl text-white/90">{hero.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-lg leading-relaxed text-slate-700 whitespace-pre-line">
        {story}
      </section>

      <section className="bg-white border-y py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {numbers.map((n, i) => (
            <div key={i}>
              <div className="trust-number text-[#0F172A]">{n.value}</div>
              <div className="mt-1 text-sm text-slate-500">{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="section-title mb-9 text-center">오아시스 마이카의 약속</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophy.map((p, idx) => (
            <div key={idx} className="card p-8">
              <h3 className="text-2xl font-semibold mb-3 text-[#0F172A]">{p.title}</h3>
              <p className="text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0F172A] py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-3">진심으로 만나 상담해보세요</h3>
          <p className="text-white/70 mb-8">10년 경력의 전문가가 직접 답방해드립니다.</p>
          <ConsultationCTA variant="primary" />
        </div>
      </section>
    </div>
  );
}

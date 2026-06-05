"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import { ArrowRight } from "lucide-react";

interface Props {
  variant?: "primary" | "nav" | "outline";
  size?: "default" | "lg";
  onClick?: () => void;
  prefillVehicle?: string;
}

export default function ConsultationCTA({ variant = "primary", size = "default", onClick, prefillVehicle }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setOpen(true);
  };

  const base = "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all active:scale-[0.985]";
  const styles =
    variant === "nav"
      ? "bg-[#C5A46E] text-[#0F172A] px-6 py-2.5 text-sm hover:bg-[#B38A4F]"
      : variant === "outline"
      ? "border border-white/70 text-white px-7 py-3 hover:bg-white hover:text-[#0F172A]"
      : size === "lg"
      ? "btn-primary text-lg px-10 py-4"
      : "btn-primary px-7 py-3 text-sm";

  return (
    <>
      {/* CTA button label updated to "상담 요청" (no · 견적) - duplicate kept in sync */}
      <button onClick={handleClick} className={`${base} ${styles}`}>
        상담 요청
        {variant !== "nav" && <ArrowRight className="w-4 h-4" />}
      </button>
      <ConsultationModal open={open} onOpenChange={setOpen} prefillVehicle={prefillVehicle} />
    </>
  );
}

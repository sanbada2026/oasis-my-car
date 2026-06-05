"use client";

import { useState } from "react";
import ConsultationForm from "./ConsultationForm";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefillVehicle?: string;
}

export default function ConsultationModal({ open, onOpenChange, prefillVehicle }: Props) {
  if (!open) return null;

  return (
    <div className="modal" onClick={() => onOpenChange(false)}>
      <div
        className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div>
            <div className="font-semibold text-xl">상담 요청</div>
            <div className="text-xs text-[#C5A46E] tracking-widest mt-0.5">10년 경력 전문가가 직접 답변드립니다</div>
            {prefillVehicle && (
              <div className="text-xs mt-1 text-[#B38A4F]">선택 차량: {prefillVehicle}</div>
            )}
          </div>
          <button onClick={() => onOpenChange(false)} className="p-2 -mr-1">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          <ConsultationForm compact onSuccess={() => setTimeout(() => onOpenChange(false), 1400)} prefillVehicle={prefillVehicle} />
        </div>
        <div className="bg-slate-50 px-6 py-4 text-[11px] text-slate-500 border-t">
          제출 후 10분 이내 전화 또는 문자로 연락드립니다.
        </div>
      </div>
    </div>
  );
}

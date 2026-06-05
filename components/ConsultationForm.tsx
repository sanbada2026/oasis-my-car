"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  phone: z.string().min(9, "연락처를 입력해주세요"),
  email: z.string().email().optional().or(z.literal("")),
  interest: z.string().optional(),
  vehicle: z.string().optional(),
  message: z.string().min(5, "상담 내용을 입력해주세요"),
  agree: z.literal(true, { errorMap: () => ({ message: "개인정보 처리 동의가 필요합니다" }) }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  compact?: boolean;
  onSuccess?: () => void;
  prefillVehicle?: string;
}

export default function ConsultationForm({ compact, onSuccess, prefillVehicle }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { agree: true as const, vehicle: prefillVehicle || "" },
  });

  // Update if prefill changes while open
  if (prefillVehicle) {
    // set on mount effect not needed for simple since default on open
  }

  const onSubmit = async (data: FormData) => {
    // Server Action 시뮬레이션 (MVP)
    await new Promise((r) => setTimeout(r, 650));

    console.log("[CONSULT SUBMIT]", data);

    toast.success("접수 완료! 10분 이내 직접 연락드립니다.", {
      description: "전문가가 확인 후 연락드립니다.",
    });

    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input {...register("name")} placeholder="성함" className="input" />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("phone")} placeholder="휴대폰 번호" className="input" />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <input {...register("email")} placeholder="이메일 (선택)" className="input" />

      <select {...register("interest")} className="input">
        <option value="">상담 분야 선택 (선택)</option>
        <option value="특가 조건">특가 조건</option>
        <option value="로켓출고 차량">로켓출고 차량</option>
        <option value="일반 상담">일반 상담</option>
        <option value="사후관리">사후관리</option>
      </select>

      <input {...register("vehicle")} placeholder="희망 차종 또는 모델 (선택)" className="input" defaultValue={prefillVehicle} />

      <textarea
        {...register("message")}
        rows={compact ? 3 : 4}
        placeholder="상담 내용 (예산, 기간, 용도 등)"
        className="input resize-y min-h-[92px]"
      />
      {errors.message && <p className="text-xs text-red-500 -mt-2">{errors.message.message}</p>}

      <label className="flex items-start gap-2 text-xs text-slate-600">
        <input type="checkbox" {...register("agree")} defaultChecked className="mt-0.5" />
        <span>
          개인정보 수집 및 이용에 동의합니다. (보기)
        </span>
      </label>
      {errors.agree && <p className="text-xs text-red-500">{errors.agree.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-3.5 text-base disabled:opacity-70"
      >
        {isSubmitting ? "접수 중..." : "상담 요청하기"}
      </button>

      <p className="text-center text-[10px] text-slate-400 pt-1">
        제출 후 전화로 우선 연락드립니다.
      </p>
    </form>
  );
}

// Central types (updated for current data shapes)
export interface Special {
  id: string;
  model: string;
  monthly: string;
  badge?: string;
  note?: string;
}

export interface Review {
  id: string;
  photoUrl: string;
  model: string;
  ageGroup: string;
  purpose: string;
  whyChose: string;
  preWorried: string;
  bestDuring: string;
  afterWord: string;
}

export interface RocketVehicle {
  id: string;
  model: string;
  category: string;
  keyPoints: string[];
  note: string;
  // additional fields in current data
  brand?: string;
  fuelType?: string;
  deliveryDays?: string;
  stock?: number;
  estMonthly?: string;
  imagePlaceholder?: string;
}

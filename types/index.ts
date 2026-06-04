// Central types
export interface Special {
  id: string;
  title: string;
  description: string;
  conditions: string[];
  highlight?: string;
}

export interface Review {
  id: string;
  customer: string;
  vehicle: string;
  quote: string;
  date: string;
}

export interface RocketVehicle {
  id: string;
  model: string;
  category: string;
  keyPoints: string[];
  note: string;
}

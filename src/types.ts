export interface Vehicle {
  id: string;
  name: string;
  variant: string;
  year: string;
  fuel: 'Petrol' | 'Diesel' | 'CNG' | 'Petrol + CNG';
  transmission: 'Manual' | 'Automatic';
  owner: 'First Owner' | 'Single Owner' | 'Second Owner';
  kilometers: string;
  price: string;
  priceValue: number; // in Lakhs, e.g., 11.0, 7.3, 6.8, 6.5
  features: string[];
  finance: string;
  downPayment?: string;
  badge?: string;
  isFeatured?: boolean;
  images: string[];
  whatsappMessage: string;
  available: boolean;
}

export interface Review {
  id: string;
  customer: string;
  rating: number;
  reviewText: string;
  date?: string;
}

export interface FilterState {
  category: 'ALL' | 'UNDER_7' | '7_TO_10' | 'OVER_10' | 'PETROL' | 'DIESEL' | 'CNG' | 'AUTOMATIC' | 'FIRST_OWNER';
  searchQuery: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsappPhone: string;
  address: string;
  subLocation: string;
  fullAddress: string;
  googleMapsUrl: string;
  reviewsUrl: string;
  hours: string;
}

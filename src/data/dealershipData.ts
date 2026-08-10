import imgFronxActual from '../assets/images/regenerated_image_1786300267595.jpg';
import imgSonetActual from '../assets/images/regenerated_image_1786300173193.jpg';
import imgHarrierActual from '../assets/images/regenerated_image_1786300060166.jpg';
import imgVenueActual from '../assets/images/regenerated_image_1786299846231.jpg';
import imgBalenoActual from '../assets/images/regenerated_image_1786298833859.jpg';
import imgHarrierNew from '../assets/images/regenerated_image_1786298833859.jpg';
import imgAvailable4 from '../assets/images/regenerated_image_1786300900031.jpg';
import imgAvailable3 from '../assets/images/regenerated_image_1786297127355.png';
import imgAvailable2 from '../assets/images/regenerated_image_1786296745045.jpg';
import imgAvailable1 from '../assets/images/regenerated_image_1786296662653.jpg';
import imgAvailable0 from '../assets/images/regenerated_image_1786296545065.jpg';
import imgShowroom0 from '../assets/images/regenerated_image_1786296397115.jpg';

import imgVenue from '../assets/images/venue.jpg';
import imgBaleno from '../assets/images/baleno.jpg';
import imgHarrier from '../assets/images/harrier.jpg';
import imgSonet from '../assets/images/sonet.jpg';
import imgFronx from '../assets/images/fronx.jpg';

import { Vehicle, Review, BusinessInfo } from '../types';

export const businessInfo: BusinessInfo = {
  name: "SK Car Bazar",
  tagline: "Quality Used Cars. Transparent Deals. Easy Finance.",
  phone: "9935443061",
  whatsappPhone: "919935443061",
  address: "Medical College Road, Bhathat, Gorakhpur",
  subLocation: "Gorakhpur, Uttar Pradesh",
  fullAddress: "NH24, Medical College Road, Bhathat, Chakkhan Mohammad, Uttar Pradesh 273306",
  googleMapsUrl: "https://maps.app.goo.gl/1dAHcEd1Xy3mANit9",
  reviewsUrl: "https://maps.google.com/?q=SK+Car+Bazar,+Medical+College+Road,+Bhathat,+Gorakhpur,+Uttar+Pradesh+273306",
  hours: "Monday – Sunday: 9:00 AM – 8:00 PM"
};

// Available Cars photos (carousel)
export const availableCarImages = [
  imgAvailable4,
  imgAvailable1,
  imgAvailable2,
  imgAvailable3
];

// Dealership showroom photos
export const showroomImages = [
  imgShowroom0,
  imgAvailable1,
  imgAvailable2,
  imgShowroom0
];

// Happy Deliveries photos
export const deliveryImages = [
  imgAvailable0,
  imgAvailable1,
  imgAvailable2,
  imgShowroom0
];

export const vehiclesData: Vehicle[] = [
  {
    id: "harrier-2020",
    name: "TATA HARRIER",
    variant: "Full Top Model",
    year: "September 2020",
    fuel: "Diesel",
    transmission: "Automatic",
    owner: "First Owner",
    kilometers: "90,000 km",
    price: "₹11.00 Lakh",
    priceValue: 11.0,
    features: [
      "Full Top Model",
      "Push Button Start",
      "4 New Tyres",
      "Zero Depreciation Insurance",
      "Stepney / Spare Wheel",
      "First Owner"
    ],
    finance: "Finance Facility Available",
    downPayment: "Approx. ₹3 Lakh",
    badge: "FEATURED",
    isFeatured: true,
    images: [
      imgHarrierActual,
      "https://placehold.co/600x400?text=No+Image"
    ],
    whatsappMessage: "Hello SK Car Bazar, I am interested in the Tata Harrier. Please share more details.",
    available: true
  },
  {
    id: "fronx-2023",
    name: "MARUTI SUZUKI FRONX",
    variant: "Delta Plus Top Model",
    year: "2023",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "First Owner",
    kilometers: "58,000 km",
    price: "₹7.30 Lakh",
    priceValue: 7.3,
    features: [
      "Delta Plus Top Model",
      "First Owner",
      "58,000 km Driven",
      "Double Keys",
      "Zero Depreciation Insurance"
    ],
    finance: "Finance Facility Available",
    downPayment: "Approx. ₹1.8 Lakh",
    badge: "TOP DEAL",
    isFeatured: true,
    images: [
      imgFronxActual,
      "https://placehold.co/600x400?text=No+Image"
    ],
    whatsappMessage: "Hello SK Car Bazar, I am interested in the Maruti Suzuki Fronx. Please share more details.",
    available: true
  },
  {
    id: "baleno-cng",
    name: "MARUTI SUZUKI BALENO",
    variant: "Delta",
    year: "2021",
    fuel: "Petrol + CNG",
    transmission: "Manual",
    owner: "Single Owner",
    kilometers: "1,15,000 km",
    price: "₹6.80 Lakh",
    priceValue: 6.8,
    features: [
      "Factory-Fitted CNG",
      "Petrol + CNG Fuel",
      "Single Owner",
      "Complete Service Record",
      "4 New Tyres",
      "Double Keys",
      "Unused Spare Wheel"
    ],
    finance: "Finance Facility Available",
    downPayment: "Approx. ₹1.5 Lakh",
    badge: "SUPER SAVER",
    isFeatured: false,
    images: [
      imgBalenoActual,
      "https://placehold.co/600x400?text=No+Image"
    ],
    whatsappMessage: "Hello SK Car Bazar, I am interested in the Maruti Suzuki Baleno. Please share more details.",
    available: true
  },
  {
    id: "venue-2021",
    name: "HYUNDAI VENUE",
    variant: "S",
    year: "2021",
    fuel: "Petrol",
    transmission: "Manual",
    owner: "First Owner",
    kilometers: "42,000 km",
    price: "₹6.50 Lakh",
    priceValue: 6.5,
    features: [
      "S Variant",
      "4 New Tyres",
      "Double Keys",
      "Zero Depreciation Insurance",
      "First Owner"
    ],
    finance: "Finance Facility Available",
    downPayment: "Only ₹1.5 Lakh",
    badge: "LOW DOWN PAYMENT",
    isFeatured: false,
    images: [
      imgVenueActual,
      "https://placehold.co/600x400?text=No+Image"
    ],
    whatsappMessage: "Hello SK Car Bazar, I am interested in the Hyundai Venue. Please share more details.",
    available: true
  },
  {
    id: "kia-sonet",
    name: "KIA SONET",
    variant: "HTX",
    year: "2022",
    fuel: "Diesel",
    transmission: "Manual",
    owner: "First Owner",
    kilometers: "Contact for Details",
    price: "Price on Call",
    priceValue: 0,
    features: [
      "HTX Variant",
      "Complete Inspection Done",
      "Original Registration",
      "Verified Service History"
    ],
    finance: "Finance Facility Available",
    badge: "FEATURED",
    isFeatured: false,
    images: [
      imgSonetActual,
      "https://placehold.co/600x400?text=No+Image"
    ],
    whatsappMessage: "Hello SK Car Bazar, I am interested in knowing more about the Kia Sonet.",
    available: true
  }
];

export const googleReviews: Review[] = [
  {
    id: "rev-1",
    customer: "Sakina Khatun",
    rating: 5,
    reviewText: "Best palace to buy user preowned car best price best value and good quality recommended to every one who want buy used car. Also best value to sell used car"
  },
  {
    id: "rev-2",
    customer: "Pintu Nishad",
    rating: 5,
    reviewText: "Best place to buy used car and sell"
  },
  {
    id: "rev-3",
    customer: "Banarshi banarshi",
    rating: 5,
    reviewText: "Best palace ro buy and sell used car"
  },
  {
    id: "rev-4",
    customer: "Avishkar Gupta",
    rating: 5,
    reviewText: "Good service\nBest behaviour"
  },
  {
    id: "rev-5",
    customer: "Himanshu Naval",
    rating: 5,
    reviewText: "Tooogs"
  },
  {
    id: "rev-6",
    customer: "Abhay Rai",
    rating: 5,
    reviewText: "Great experience at SK Car Bazar. Honest dealing and fair price for pre-owned vehicles."
  }
];

export const whyChooseUsList = [
  {
    id: "quality",
    title: "QUALITY CHECKED",
    description: "Reliable pre-owned vehicles thoroughly inspected for performance, engine health, and safety before display.",
    iconName: "CheckCircle2"
  },
  {
    id: "pricing",
    title: "TRANSPARENT PRICING",
    description: "Clear and straightforward pricing with zero hidden charges or unexpected costs.",
    iconName: "ShieldCheck"
  },
  {
    id: "finance",
    title: "EASY FINANCE",
    description: "Hassle-free finance assistance available for eligible buyers with competitive interest rates and flexible EMIs.",
    iconName: "Banknote"
  },
  {
    id: "support",
    title: "CUSTOMER SUPPORT",
    description: "Dedicated assistance from initial enquiry, test drives, documentation to post-purchase support.",
    iconName: "Headphones"
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "CHOOSE YOUR CAR",
    description: "Browse our verified stock of pre-owned cars online or visit our Bhathat showroom."
  },
  {
    step: "02",
    title: "CONTACT US",
    description: "Call us or message on WhatsApp to check availability and schedule a showroom visit."
  },
  {
    step: "03",
    title: "INSPECT & TEST DRIVE",
    description: "Take your preferred car for a live test drive and check complete document history."
  },
  {
    step: "04",
    title: "DRIVE AWAY",
    description: "Complete quick paperwork with easy finance options and drive your dream car home!"
  }
];

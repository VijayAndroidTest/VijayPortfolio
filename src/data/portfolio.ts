export interface Project {
  title: string;
  description: string;
  techStack?: string[];
  duration?: string;
  challenge?: string;
  solution?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  email: string;      // Added
  address: string;    // Added
  phone: string;      // Added
  projects: Project[];
}

export const personalInfo: PortfolioData = {
  name: "Vijayarajan G",
  role: "Lead Android Developer",
  email: "vijay.dev@example.com",
  address: "Apartment 4B, Chennai, Tamil Nadu 600001",
  phone: "+91 98765 43210",
  projects: [
    {
      title: "Grouppal",
      description: "Business Sharing Platform helping build stronger communities and economic growth via QR code transactions.",
      techStack: ["Kotlin", "MVVM", "Razorpay", "DI", "Room"],
      duration: "March 2023 - May 2026"
    },
    {
      title: "InterPay",
      description: "POS (Point of Sale) app with ISO-8583 support for NFC, EMV chip, and magstripe payments.",
      techStack: ["Kotlin", "MVVM", "Bluetooth", "NFC", "Room"],
    },
    {
      title: "Around",
      description: "Travel and E-commerce app with real-time location mapping and live user tracking.",
      techStack: ["Java", "WebRTC", "Google Maps", "Audio/Video Streaming"],
      duration: "8 months"
    },
    {
      title: "Financial Tech",
      description: "Financial planning app that generates retirement income plans based on dynamic user inputs.",
      techStack: ["Kotlin", "Payment Gateways"],
      duration: "6 months"
    },
    {
      title: "Gladiator Tennis",
      description: "Platform for tennis players to find substitutes, schedule matches, and view performance stats.",
      techStack: ["Java", "Material Design", "Web Services"],
      duration: "6 months"
    },
    {
      title: "Dine Connect",
      description: "Restaurant discovery app featuring real-time availability and social media integration.",
      techStack: ["Java", "FCM", "Google Maps"],
      duration: "5 months"
    },
    {
      title: "Time sheet",
      description: "Task management and time tracking for employees with admin and user roles.",
      techStack: ["Java", "Recycler View", "Charts"],
      duration: "8 months"
    },
    {
      title: "Pasture",
      description: "AI-based textile measurement app using camera and barcode scanning for inventory.",
      techStack: ["Kotlin", "AI", "BLE", "Barcode Scanner"],
      duration: "10 months"
    }
  ]
};
export interface Project {
  title: string;
  description: string;
  techStack?: string[];
  duration?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  summary: string;
  email: string;
  address: string;
  phone: string;
  github: string;
  linkedIn: string;

  experienceYears: string;

  skills: string[];

  achievements: string[];

  experiences: Experience[];

  projects: Project[];
}

export const personalInfo: PortfolioData = {
  name: "Vijayarajan G",

  role: "Senior Android & React Native Developer",

  summary:
    "Mobile Application Developer with 9+ years of experience building Android and Cross-Platform applications using Kotlin, Java, React Native, Expo and Firebase. Experienced in FinTech, POS, E-Commerce, Travel and AI-powered solutions.",

  experienceYears: "9+ Years",

  email: "vijayarajan1003@gmail.com",

  address: "Mettur, Salem District, Tamil Nadu, India",

  phone: "+91 6374807852",

  github: "https://github.com/VijayAndroidTest",

  linkedIn: "https://www.linkedin.com/in/vijay-raja-57620313b",

  skills: [
    "Kotlin",
    "Java",
    "React Native",
    "Expo",
    "Firebase",
    "MVVM",
    "Jetpack Compose",
    "Room",
    "Retrofit",
    "REST APIs",
    "Google Maps",
    "BLE",
    "NFC",
    "Razorpay",
    "SQLite",
    "Git",
    "Android SDK"
  ],

  achievements: [
    "9+ Years Professional Experience",
    "8+ Enterprise Mobile Applications Delivered",
    "FinTech & POS Domain Expertise",
    "React Native + Expo Development",
    "Firebase Authentication & Firestore",
    "Google Maps, NFC, BLE Integrations",
    "MVVM & Clean Architecture",
    "Team Leadership Experience"
  ],

  experiences: [
    {
      company: "CrownShield",
      role: "Senior Android Developer",
      period: "2019-2023"
    },
    {
      company: "Grouppal",
      role: "Android Developer / Lead Developer",
      period: "2023 - Present"
    }
  ],

  projects: [
    {
      title: "Grouppal Business / Users",
      description:
        "Business sharing platform helping local businesses grow through QR-code based community commerce.",
      techStack: ["Kotlin", "MVVM", "Room", "Razorpay"],
      duration: "2023 - 2026"
    },

    {
      title: "InterPay",
      description:
        "POS payment application supporting NFC, EMV Chip and Magstripe transactions using ISO-8583.",
      techStack: ["Kotlin", "Bluetooth", "NFC", "MVVM"],
      duration: "1+ Year"
    },

    {
      title: "Around",
      description:
        "Travel and E-Commerce application with live location tracking and communication features.",
      techStack: ["Java", "Google Maps", "WebRTC"],
      duration: "8 Months"
    },

    {
      title: "Financial Tech",
      description:
        "Financial planning application generating retirement income projections.",
      techStack: ["Kotlin", "Payment Gateway"],
      duration: "6 Months"
    },

    {
      title: "Gladiator Tennis",
      description:
        "Sports platform for match scheduling and player performance tracking.",
      techStack: ["Java", "Material Design"],
      duration: "6 Months"
    },

    {
      title: "Dine Connect",
      description:
        "Restaurant discovery platform with social engagement and real-time updates.",
      techStack: ["Java", "FCM", "Google Maps"],
      duration: "5 Months"
    },

    {
      title: "Timesheet",
      description:
        "Employee task management and productivity tracking application.",
      techStack: ["Java", "Charts", "RecyclerView"],
      duration: "8 Months"
    },

    {
      title: "Pasture",
      description:
        "AI-powered textile inventory system using barcode scanning and BLE devices.",
      techStack: ["Kotlin", "AI", "BLE"],
      duration: "10 Months"
    },

    {
      title: "Nagu Organics",
      description:
        "React Native + Expo e-commerce application with Firebase Authentication, Product Catalog, Cart Management, Firestore integration and Google Sign-In.",
      techStack: [
        "React Native",
        "Expo",
        "Firebase",
        "TypeScript",
        "Google Sign-In",
        "Firestore"
      ],
      duration: "2026"
    }
  ]
};
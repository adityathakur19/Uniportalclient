export interface Course {
  id: number
  name: string
  domain: string
  description: string
  duration: number // in months
  fees: number // in USD
  image: string
  educationLevel?: string // Add this line - optional property
}

// Domain options for filtering
export const domains = [
  "Engineering & Technology",
  "Computer Science",
  "Management",
  "Medical Sciences",
  "Pharmacy",
  "Law",
  "Social Sciences",
  "Agriculture",
  "Fashion & Media",
  "Hospitality",
  "Education",
]

// Course data
export const courses: Course[] = [
  // Engineering & Technology
  {
    id: 1,
    name: "Ph.D. Engineering & Technology",
    domain: "Engineering & Technology",
    description: "Advanced research developing innovative technologies for complex engineering challenges.",
    duration: 36, // 3 years minimum
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 2,
    name: "M.Tech Computer Science & Engineering",
    domain: "Engineering & Technology",
    description: "Advanced algorithms and software engineering with AI and cybersecurity focus.",
    duration: 24, // 2 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 3,
    name: "M.Tech Mechanical Engineering",
    domain: "Engineering & Technology",
    description: "Advanced mechanical systems design with robotics and manufacturing technologies.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 4,
    name: "M.Tech Production Engineering",
    domain: "Engineering & Technology",
    description: "Manufacturing processes and industrial automation with quality control systems.",
    duration: 24,
    fees: 4000,
    image:
      "https://cgu-odisha.ac.in/wp-content/uploads/2023/05/industrial-eng-graduates_md.jpg",
    educationLevel: "Masters",
  },
  {
    id: 5,
    name: "M.Tech Electrical Engineering",
    domain: "Engineering & Technology",
    description: "Power systems and renewable energy technologies with practical applications.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 6,
    name: "M.Tech Civil Engineering",
    domain: "Engineering & Technology",
    description: "Structural analysis and sustainable construction practices for infrastructure development.",
    duration: 24,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 7,
    name: "M.Tech Electronics and Communication Engineering",
    domain: "Engineering & Technology",
    description: "Signal processing and embedded systems with communication network applications.",
    duration: 24,
    fees: 4000,
    image:
      "https://happenings.lpu.in/wp-content/uploads/2024/01/Electronics-and-Communication-Engineering.jpg",
    educationLevel: "Masters",
  },
  {
    id: 8,
    name: "M.Tech Artificial Intelligence",
    domain: "Engineering & Technology",
    description: "Machine learning algorithms and neural networks for intelligent systems.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 9,
    name: "M.Tech Data Science",
    domain: "Engineering & Technology",
    description: "Analytics and predictive modeling for extracting insights from complex data.",
    duration: 24,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 10,
    name: "M.Tech Cyber Security",
    domain: "Engineering & Technology",
    description: "Network security and ethical hacking to protect against cyber threats.",
    duration: 24,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 11,
    name: "M.Tech Internet of Things (IOT)",
    domain: "Engineering & Technology",
    description: "Connected device ecosystems and sensor networks for smart applications.",
    duration: 24,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 12,
    name: "M.Tech Renewable Energy Resources",
    domain: "Engineering & Technology",
    description: "Solar, wind, and biomass technologies for sustainable power generation.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 13,
    name: "M.Tech Environmental Engineering",
    domain: "Engineering & Technology",
    description: "Pollution control and sustainable resource management for environmental protection.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 14,
    name: "M.Tech (Part Time) Computer Science & Engineering",
    domain: "Engineering & Technology",
    description: "Flexible program for working professionals in advanced computer science.",
    duration: 36, // 3 years
    fees: 3600,
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 15,
    name: "M.Tech (Part Time) Mechanical Engineering",
    domain: "Engineering & Technology",
    description: "Part-time advanced mechanical engineering for industry professionals.",
    duration: 36,
    fees: 3600,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 16,
    name: "M.Tech (Part Time) Electronics & Communication Engineering",
    domain: "Engineering & Technology",
    description: "Evening program in advanced electronics for working professionals.",
    duration: 36,
    fees: 3600,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 17,
    name: "M.Tech (Part Time) CAD/CAM",
    domain: "Engineering & Technology",
    description: "Computer-aided design and manufacturing for working engineering professionals.",
    duration: 36,
    fees: 3600,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 18,
    name: "B.Tech (CSE) with specialisation in Cyber Security & Ethical Hacking",
    domain: "Engineering & Technology",
    description: "Network security and ethical hacking for digital systems protection.",
    duration: 48, // 4 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 19,
    name: "B.Tech Computer Science & Engineering",
    domain: "Engineering & Technology",
    description: "Programming, algorithms, and software engineering for technology careers.",
    duration: 48,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 20,
    name: "B.Tech Cyber Security",
    domain: "Engineering & Technology",
    description: "Information security and digital forensics for data protection.",
    duration: 48,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 21,
    name: "B.Tech Mechanical Engineering",
    domain: "Engineering & Technology",
    description: "Mechanical systems and manufacturing processes with hands-on laboratory work.",
    duration: 48,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 22,
    name: "B.Tech Civil Engineering",
    domain: "Engineering & Technology",
    description: "Structural engineering and infrastructure development for construction industry.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 23,
    name: "B.Tech Mechatronics Engineering",
    domain: "Engineering & Technology",
    description: "Interdisciplinary program combining mechanical, electronic, and computer engineering principles.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 24,
    name: "B.Tech Electronics & Communication Engineering",
    domain: "Engineering & Technology",
    description: "Electronic circuits and communication systems for technology applications.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 25,
    name: "B.Tech Artificial Intelligence",
    domain: "Engineering & Technology",
    description: "Machine learning and neural networks for AI applications development.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 26,
    name: "B.Tech Electrical Engineering",
    domain: "Engineering & Technology",
    description: "Power systems and electrical machines for energy sector applications.",
    duration: 48,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 27,
    name: "B.Tech Internet of Things (IOT)",
    domain: "Engineering & Technology",
    description: "Connected device ecosystems and smart applications for various industries.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 28,
    name: "B.Tech Automobile Engineering",
    domain: "Engineering & Technology",
    description: "Vehicle design and automotive systems for transportation industry.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 29,
    name: "B.Tech Biomedical Engineering",
    domain: "Engineering & Technology",
    description: "Engineering principles for healthcare technologies and medical devices development.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 30,
    name: "B.Tech Electrical Vehicle Technology",
    domain: "Engineering & Technology",
    description: "Electric vehicle design and sustainable transportation systems development.",
    duration: 48,
    fees: 3000,
    image:
      "https://etimg.etb2bimg.com/photo/116633435.cms",
    educationLevel: "Bachelors",
  },
  {
    id: 31,
    name: "B.Tech Drone Technology",
    domain: "Engineering & Technology",
    description: "Unmanned aerial vehicle design and applications across various industries.",
    duration: 48,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 32,
    name: "B.Tech Electronics & Computer Science Engineering",
    domain: "Engineering & Technology",
    description: "Integrated electronics and computer science for digital systems development.",
    duration: 48,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 33,
    name: "B.Tech Aerospace Engineering",
    domain: "Engineering & Technology",
    description: "Aircraft and spacecraft design with aerodynamics and propulsion systems.",
    duration: 48,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 34,
    name: "BSc Animation VFX and Game ART",
    domain: "Computer Science",
    description: "3D modeling and visual effects for gaming and entertainment.",
    duration: 36, // 3 years
    fees: 5000,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 35,
    name: "BSc Design",
    domain: "Computer Science",
    description: "Graphic design and UI/UX with creative design thinking methodologies.",
    duration: 48, // 4 years
    fees: 5000,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 36,
    name: "Diploma in Computer Science & Engineering",
    domain: "Engineering & Technology",
    description: "Basic programming and computer hardware for software development careers.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 37,
    name: "Diploma in Mechanical Engineering",
    domain: "Engineering & Technology",
    description: "Basic mechanical principles and manufacturing processes for technical careers.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 38,
    name: "Diploma in Electronics & Communication Engineering",
    domain: "Engineering & Technology",
    description: "Electronic circuits and communication systems for technical positions.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1563770557593-bda2abc1d186?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 39,
    name: "Diploma in Automobile Engineering",
    domain: "Engineering & Technology",
    description: "Automotive systems and vehicle maintenance for transportation industry careers.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 40,
    name: "Diploma in Electrical Engineering",
    domain: "Engineering & Technology",
    description: "Electrical systems and power distribution for technical positions.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 41,
    name: "Diploma in Civil Engineering",
    domain: "Engineering & Technology",
    description: "Structural engineering and construction techniques for building industry.",
    duration: 36,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },

  // Pharmacy
  {
    id: 42,
    name: "Ph.D. Pharmaceutical Sciences",
    domain: "Pharmacy",
    description: "Advanced pharmaceutical research with original contributions to the field.",
    duration: 36, // 3 years minimum
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 43,
    name: "M. Pharmacy - Pharmaceutics",
    domain: "Pharmacy",
    description: "Drug formulation and delivery systems with pharmaceutical technology research.",
    duration: 24, // 2 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 44,
    name: "M. Pharmacy - Pharmacology",
    domain: "Pharmacy",
    description: "Drug action and toxicology studies with pharmacodynamics research.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 45,
    name: "M.Sc. Pharmacovigilance",
    domain: "Pharmacy",
    description: "Drug safety monitoring and adverse event reporting systems.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 46,
    name: "M.Sc. Clinical Research",
    domain: "Pharmacy",
    description: "Clinical trial design and regulatory affairs for pharmaceutical research.",
    duration: 24,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 47,
    name: "B. Pharmacy",
    domain: "Pharmacy",
    description: "Pharmaceutical sciences and drug formulation for pharmacy practice.",
    duration: 48, // 4 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 48,
    name: "B. Pharm (Practice)",
    domain: "Pharmacy",
    description: "Clinical pharmacy and patient care with pharmacy management.",
    duration: 48,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 49,
    name: "B. Pharmacy (Lateral Entry)",
    domain: "Pharmacy",
    description: "Accelerated pharmacy degree for diploma holders in pharmaceutical sciences.",
    duration: 36, // 3 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 50,
    name: "D. Pharmacy",
    domain: "Pharmacy",
    description: "Basic pharmaceutical sciences and drug dispensing for pharmacy assistants.",
    duration: 24, // 2 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b4220292?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },

  // Management
  {
    id: 51,
    name: "Ph.D. Management Studies",
    domain: "Management",
    description: "Advanced research in management with original contributions to field.",
    duration: 36, // 3 years minimum
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 52,
    name: "MBA in Event Management",
    domain: "Management",
    description: "Planning and executing events with marketing and logistics focus.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 53,
    name: "MBA in Media Studies",
    domain: "Management",
    description: "Media business and content strategy for digital media management.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1504465188792-96c4e8752e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 54,
    name: "MBA in Sales and Distribution Management",
    domain: "Management",
    description: "Sales strategies and distribution channels for customer relationship management.",
    duration: 24,
    fees: 3200,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 55,
    name: "MBA in Logistics & Supply Chain Management",
    domain: "Management",
    description: "Supply chain optimization and logistics for global operations management.",
    duration: 24,
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 56,
    name: "MBA in Digital Marketing",
    domain: "Management",
    description: "Online marketing strategies and analytics for digital business growth.",
    duration: 24,
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 57,
    name: "MBA - Executive",
    domain: "Management",
    description: "Leadership and strategy program for experienced working professionals.",
    duration: 24,
    fees: 5000,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 58,
    name: "MBA in Retail Management",
    domain: "Management",
    description: "Retail operations and customer experience management for stores.",
    duration: 24,
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 59,
    name: "MBA in Financial Analytics",
    domain: "Management",
    description: "Financial modeling and risk assessment for investment strategies.",
    duration: 24,
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 60,
    name: "MBA (IN ASSOCIATION WITH SUNSTONE)",
    domain: "Management",
    description: "Industry-partnered business education with enhanced placement opportunities.",
    duration: 24,
    fees: 5000,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 61,
    name: "MBA in Marketing",
    domain: "Management",
    description: "Marketing strategies and brand management for consumer markets.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 62,
    name: "MBA in Finance",
    domain: "Management",
    description: "Financial management and investment analysis for corporate finance careers.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b2a0b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 63,
    name: "MBA in Human Resource",
    domain: "Management",
    description: "Talent management and organizational behavior for HR professionals.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 64,
    name: "MBA in IT",
    domain: "Management",
    description: "IT management and digital transformation for technology businesses.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 65,
    name: "MBA in Digital Marketing",
    domain: "Management",
    description: "Social media strategies and online analytics for digital marketing.",
    duration: 24,
    fees: 3200,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 66,
    name: "MBA in Entrepreneurship & Family Business",
    domain: "Management",
    description: "Business development and family business management for entrepreneurs.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1571610312512-5ce9a6d8df6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 67,
    name: "MBA in Health Care Management",
    domain: "Management",
    description: "Healthcare administration and policy for medical business operations.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 68,
    name: "MBA in Logistics & Supply Chain Management",
    domain: "Management",
    description: "Global operations and supply chain optimization for logistics.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 69,
    name: "Post Graduate Diploma in Logistics and Supply Chain Management",
    domain: "Management",
    description: "Supply chain operations and distribution management for logistics professionals.",
    duration: 12, // 1 year
    fees: 3200,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 70,
    name: "Post Graduate Diploma in Industrial Relations and Labour Management",
    domain: "Management",
    description: "Labor laws and workforce management for industrial relations.",
    duration: 12,
    fees: 3200,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 71,
    name: "Post Graduate Diploma in International Trade and Export Management",
    domain: "Management",
    description: "Global trade practices and export procedures for international business.",
    duration: 12,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 72,
    name: "Post Graduate Diploma in Event Management",
    domain: "Management",
    description: "Event planning and execution for corporate and social events.",
    duration: 12,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 73,
    name: "Post Graduate Diploma in Retail Management",
    domain: "Management",
    description: "Retail operations and store management for customer service.",
    duration: 12,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 74,
    name: "Post Graduate Diploma in Hospital Administration",
    domain: "Management",
    description: "Healthcare facility management and patient care administration services.",
    duration: 12,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 75,
    name: "Post Graduate Diploma in Office Organization and Management",
    domain: "Management",
    description: "Office administration and workplace efficiency for organizational management.",
    duration: 12,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 76,
    name: "Diploma in Marketing Management",
    domain: "Management",
    description: "Marketing principles and promotional strategies for consumer markets.",
    duration: 12,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 77,
    name: "Diploma in Entrepreneurship",
    domain: "Management",
    description: "Business startup and innovation for entrepreneurial mindset development.",
    duration: 12,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 78,
    name: "Diploma in Management",
    domain: "Management",
    description: "Business management principles and leadership for organizational behavior.",
    duration: 12,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 79,
    name: "Certificate Course in Executive Development Program (EDP)",
    domain: "Management",
    description: "Leadership and management skills enhancement for working professionals.",
    duration: 6, // 6 months
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 80,
    name: "Certificate Course in Management Development Program (MDP)",
    domain: "Management",
    description: "Advanced management techniques and leadership development for managers.",
    duration: 6,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 81,
    name: "BBA",
    domain: "Management",
    description: "Business fundamentals and management principles for corporate careers.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 82,
    name: "BBA (by Sunstone)",
    domain: "Management",
    description: "Industry-partnered business education with enhanced placement opportunities.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 83,
    name: "BBA (Business Analytics) With Upgrad",
    domain: "Management",
    description: "Business fundamentals with data analytics and business intelligence tools.",
    duration: 36,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 84,
    name: "BBA Digital Marketing with Upgrad",
    domain: "Management",
    description: "Business fundamentals with digital marketing strategies and analytics.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 85,
    name: "M.Com",
    domain: "Management",
    description: "Financial accounting and corporate finance with taxation studies.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 86,
    name: "B.Com (Hons.)",
    domain: "Management",
    description: "Accounting, finance, and taxation for business economics careers.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },

  // Computer Science
  {
    id: 87,
    name: "MCA",
    domain: "Computer Science",
    description: "Advanced programming and software development for IT solutions.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 88,
    name: "MCA (Lateral Entry)",
    domain: "Computer Science",
    description: "Accelerated computer applications program for BCA graduates.",
    duration: 24,
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 89,
    name: "PGDCA",
    domain: "Computer Science",
    description: "Computer applications and programming for various industry roles.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 90,
    name: "M.Sc. (IT)",
    domain: "Computer Science",
    description: "Information technology and network management for IT infrastructure.",
    duration: 24, // 2 years
    fees: 3200,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 91,
    name: "B.Sc. (IT)",
    domain: "Computer Science",
    description: "Information technology fundamentals and networking for system administration.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 92,
    name: "BCA (By Sunstone)",
    domain: "Computer Science",
    description: "Industry-partnered computer applications with enhanced placement opportunities.",
    duration: 36,
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 93,
    name: "BCA",
    domain: "Computer Science",
    description: "Programming and software development for computer applications careers.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 94,
    name: "BCA- Specialization in Artificial Intelligence (AI)",
    domain: "Computer Science",
    description: "Computer applications with AI training for intelligent systems development.",
    duration: 36,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 95,
    name: "BCA NextGen- Specialization in Data Science",
    domain: "Computer Science",
    description: "Data analytics and visualization with computer applications fundamentals.",
    duration: 36,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 96,
    name: "BCA (INTERNET OF THINGS)",
    domain: "Computer Science",
    description: "Connected devices and sensor networks for IoT applications.",
    duration: 36,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 97,
    name: "BCA (DATA SCIENCE)",
    domain: "Computer Science",
    description: "Data collection and analysis for data-driven decision making.",
    duration: 36,
    fees: 4000,
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 98,
    name: "BCA (ARTIFICIAL INTELLIGENCE)",
    domain: "Computer Science",
    description: "AI algorithms and machine learning for intelligent system design.",
    duration: 36,
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },

  // Hospitality
  {
    id: 99,
    name: "Ph.D. Hotel Management & Catering Technology",
    domain: "Hospitality",
    description: "Advanced research in hospitality operations and tourism management.",
    duration: 36, // 3 years minimum
    fees: 5000,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 100,
    name: "MBA In Tourism and Hospitality Management",
    domain: "Hospitality",
    description: "Tourism economics and hospitality operations for global industry leadership.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 101,
    name: "M.Sc. in Hotel Management & Catering Technology",
    domain: "Hospitality",
    description: "Food production and accommodation management for hospitality operations.",
    duration: 24,
    fees: 3200,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 102,
    name: "Bachelors in Hotel Management & Catering Technology (BHMCT)",
    domain: "Hospitality",
    description: "Hotel operations and food production with hospitality business administration.",
    duration: 48, // 4 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 103,
    name: "Bachelor in Hotel Management (BHM)",
    domain: "Hospitality",
    description: "Hotel operations and front office management for hospitality services.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 104,
    name: "Bachelor in Tourism & Travel Management",
    domain: "Hospitality",
    description: "Tourism operations and travel planning for destination management careers.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 105,
    name: "B.Sc. in Airport & Cargo Management",
    domain: "Hospitality",
    description: "Airport operations and cargo handling for aviation industry careers.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 106,
    name: "B.Sc. in Home Science & Hospitality Management",
    domain: "Hospitality",
    description: "Home science principles with hospitality management practices.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 107,
    name: "B.Sc. in Airlines & Airport Management",
    domain: "Hospitality",
    description: "Airline operations and aviation safety for passenger services.",
    duration: 36,
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1531125227120-9f8e5c8d2d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 108,
    name: "B. Vocational in Personal Care and Wellness",
    domain: "Hospitality",
    description: "Wellness services and personal care techniques for spa management.",
    duration: 36,
    fees: 3000,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 109,
    name: "PGD in Travel and Tourism Management",
    domain: "Hospitality",
    description: "Tourism operations and destination management for travel professionals.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },

  {
    id: 110,
    name: "Diploma in Air Ticketing & GDS (Galileo)",
    domain: "Hospitality",
    description: "Airline reservation systems and ticketing for travel agencies.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 111,
    name: "PGD in Hospitality Management",
    domain: "Hospitality",
    description: "Hotel operations and guest services for hospitality business management.",
    duration: 12, // 1 year
    fees: 3000,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 112,
    name: "Diploma in Culinary Arts",
    domain: "Hospitality",
    description: "Professional cooking techniques and kitchen management for chefs.",
    duration: 12, // 1 year
    fees: 3000,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 113,
    name: "Diploma in Air Cargo Management",
    domain: "Hospitality",
    description: "Air freight operations and logistics management for cargo handling.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 114,
    name: "Diploma in Airlines Cabin Crew & Hospitality",
    domain: "Hospitality",
    description: "In-flight service and safety protocols for airline cabin crew.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 115,
    name: "Tour Guiding",
    domain: "Hospitality",
    description: "Tour management and destination knowledge for visitor engagement.",
    duration: 6, // 6 months
    fees: 2000,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 116,
    name: "Airport & Cargo Operation",
    domain: "Hospitality",
    description: "Ground handling and passenger services at airports.",
    duration: 6, // 6 months
    fees: 2000,
    image:
      "https://images.unsplash.com/photo-1531125227120-9f8e5c8d2d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 117,
    name: "Food & Beverage Production",
    domain: "Hospitality",
    description: "Food preparation and kitchen operations with beverage service.",
    duration: 6, // 6 months
    fees: 2000,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 118,
    name: "Communication Skills",
    domain: "Professional Development",
    description: "Enhancing verbal and written communication abilities.",
    duration: 6, // 6 months
    fees: 2000,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Certificate",
  },
  {
    id: 119,
    name: "Ph.D. Law",
    domain: "Law",
    description: "Advanced legal research and jurisprudence.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 120,
    name: "LL.M",
    domain: "Law",
    description: "Specialized legal expertise through advanced coursework.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 121,
    name: "LL.B",
    domain: "Law",
    description: "Comprehensive foundation in legal principles.",
    duration: 36, // 3 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 122,
    name: "B.A.LL.B",
    domain: "Law",
    description: "Liberal arts education with legal training.",
    duration: 60, // 5 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 123,
    name: "B.COM. LL.B",
    domain: "Law",
    description: "Commerce education with legal studies.",
    duration: 60, // 5 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 124,
    name: "PG Diploma in Alternate Dispute Resolution",
    domain: "Law",
    description: "Mediation and arbitration for legal disputes.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 125,
    name: "PG Diploma in Human Rights Law",
    domain: "Law",
    description: "International and domestic human rights frameworks.",
    duration: 12, // 1 year
    fees: 1600,
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 126,
    name: "Ph.D. Social Sciences",
    domain: "Social Sciences",
    description: "Advanced research in social science disciplines.",
    duration: 36, // 3 years
    fees: 1000,
    image:
      "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 127,
    name: "M.A Economics",
    domain: "Social Sciences",
    description: "Advanced economic theory and policy applications.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 128,
    name: "M.A Psychology",
    domain: "Social Sciences",
    description: "Human behavior and cognitive processes.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 129,
    name: "M.A Clinical Psychology",
    domain: "Social Sciences",
    description: "Psychological assessment and treatment of mental disorders.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 130,
    name: "M.A Sociology",
    domain: "Social Sciences",
    description: "Social structures and cultural dynamics.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 131,
    name: "M.A Political Science",
    domain: "Social Sciences",
    description: "Political systems and governance structures.",
    duration: 24, // 2 years
    fees: 3200,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 132,
    name: "M.A English",
    domain: "Humanities",
    description: "Advanced literary analysis and critical theory.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 133,
    name: "M.A Punjabi",
    domain: "Humanities",
    description: "Punjabi language and literature.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 134,
    name: "M.A Police Administration",
    domain: "Social Sciences",
    description: "Law enforcement management and police operations.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 135,
    name: "M.A Inter-Religious Studies",
    domain: "Humanities",
    description: "Comparative religion and interfaith dialogue.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 136,
    name: "M.A in Music (Vocal/Instrumental)",
    domain: "Arts",
    description: "Musical performance and composition skills.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 137,
    name: "M.A Fine Arts",
    domain: "Arts",
    description: "Advanced artistic techniques and creative expression.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 138,
    name: "M.P.E.S.",
    domain: "Physical Education",
    description: "Physical education and sports science.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 139,
    name: "B.A. (Punjabi, Hindi, English, Sociology, Psychology, Political Science, History)",
    domain: "Humanities",
    description: "Humanities and social science specializations.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 140,
    name: "B.Vocational in Fashion Designing",
    domain: "Fashion",
    description: "Clothing design and textile studies.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 141,
    name: "B.Vocational in Interior Designing",
    domain: "Design",
    description: "Space planning and interior decoration.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 142,
    name: "B.A. in Fine Arts",
    domain: "Arts",
    description: "Visual arts and artistic techniques.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 143,
    name: "B.A Hons (Economics, Public Administration, Computer)",
    domain: "Humanities",
    description: "Economics, public administration, or computer applications.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 144,
    name: "B.P.E.S.",
    domain: "Physical Education",
    description: "Physical education and sports science.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 145,
    name: "PG Diploma in Music Therapy",
    domain: "Arts",
    description: "Music for therapeutic and healing purposes.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 146,
    name: "PG Diploma Inter-Religious Studies",
    domain: "Humanities",
    description: "Comparative religion and theological studies.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 147,
    name: "PG Diploma in Counselling Psychology",
    domain: "Psychology",
    description: "Psychological counseling techniques.",
    duration: 12, // 1 year
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 148,
    name: "PG Diploma in Guidance & Counselling",
    domain: "Psychology",
    description: "Career guidance and personal development support.",
    duration: 12, // 1 year
    fees: 3200,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 149,
    name: "Ph.D Sciences",
    domain: "Sciences",
    description: "Advanced scientific research.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 150,
    name: "M.Sc Chemistry",
    domain: "Sciences",
    description: "Advanced chemical principles and analytical techniques.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 151,
    name: "M.Sc Physics",
    domain: "Sciences",
    description: "Quantum mechanics and electrodynamics.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 152,
    name: "M.Sc Mathematics",
    domain: "Sciences",
    description: "Advanced mathematical analysis and abstract algebra.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 153,
    name: "M.Sc Botany",
    domain: "Sciences",
    description: "Plant sciences and botanical research.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 154,
    name: "M.Sc Zoology",
    domain: "Sciences",
    description: "Animal sciences and zoological research.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1535637603896-07c179d71f96?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 155,
    name: "M.Sc Biotechnology",
    domain: "Sciences",
    description: "Genetic engineering and molecular biology.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 156,
    name: "M.Sc Pharmaceutical Chemistry",
    domain: "Pharmaceutical Sciences",
    description: "Chemical aspects of drug development.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1585435557343-3b348031e799?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 157,
    name: "M.Sc Food Science & Technology",
    domain: "Food Sciences",
    description: "Food processing and preservation techniques.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 158,
    name: "M.Sc Environmental Science",
    domain: "Environmental Sciences",
    description: "Ecological systems and pollution control.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 159,
    name: "M.Sc Astronomy and Astrophysics",
    domain: "Sciences",
    description: "Celestial objects and stellar evolution.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 160,
    name: "B.Sc Life Sciences (Medical) (with Hons. in Botany/Zoology/Biotechnology)",
    domain: "Sciences",
    description: "Biological sciences with plant, animal, or biotechnology.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 161,
    name: "B.Sc Physical Sciences (Non-Medical) (with Hons. in Physics/Chemistry/Mathematics/Computer)",
    domain: "Sciences",
    description: "Physical sciences with various specializations.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 162,
    name: "B.Sc in Food Science and Technology",
    domain: "Food Sciences",
    description: "Food processing and product development.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 163,
    name: "PG Diploma in Disaster Preparedness and Rehabilitation in collaboration with INDIAN RED SOCIETY",
    domain: "Disaster Management",
    description: "Emergency response and disaster management.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1580974852861-c381510bc98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 164,
    name: "PG Diploma in Radiation Physics",
    domain: "Sciences",
    description: "Radiation principles and safety protocols.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 165,
    name: "PG Diploma in Waste Water Treatment",
    domain: "Environmental Sciences",
    description: "Water pollution control and treatment technologies.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1519381295326-7d27a2f7e2a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 166,
    name: "PG Diploma in Solid and Liquid Resource Management",
    domain: "Environmental Sciences",
    description: "Waste management and recycling techniques.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 167,
    name: "PG Diploma in Water Crisis and Water Conservation Methods",
    domain: "Environmental Sciences",
    description: "Water scarcity and conservation strategies.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 168,
    name: "PG Diploma in Water Quality Monitoring and Assessment",
    domain: "Environmental Sciences",
    description: "Water testing and contamination assessment.",
    duration: 12, // 1 year
    fees: 3000,
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 169,
    name: "PG Diploma in Mushroom Cultivation",
    domain: "Agricultural Sciences",
    description: "Fungiculture techniques and commercial production.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 170,
    name: "Ph.D Education",
    domain: "Education",
    description: "Advanced research in educational theory.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 171,
    name: "M.Ed",
    domain: "Education",
    description: "Educational theory and curriculum development.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 172,
    name: "B.Ed",
    domain: "Education",
    description: "Preparing students for teaching careers.",
    duration: 24, // 2 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 173,
    name: "Ph.D",
    domain: "Medical Sciences",
    description: "Advanced research in medical sciences.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755183?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 174,
    name: "M.Sc Forensic Science",
    domain: "Forensic Sciences",
    description: "Crime scene investigation and evidence analysis.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 175,
    name: "M.Sc Clinical Embryology",
    domain: "Medical Sciences",
    description: "Reproductive technologies and fertility treatments.",
    duration: 24, // 2 years
    fees: 8000,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 176,
    name: "M.Sc Stem Cell Technologies & Regenerative Medicines",
    domain: "Medical Sciences",
    description: "Stem cell biology and tissue engineering.",
    duration: 24, // 2 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 177,
    name: "M.Sc Nutrigenomics and Personalized Nutrition",
    domain: "Nutrition Sciences",
    description: "Genetics and personalized dietary interventions.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 178,
    name: "M.Sc Medical Radiology & Imaging Technology",
    domain: "Medical Sciences",
    description: "Diagnostic imaging techniques and radiological procedures.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1516069677018-378761110b846?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 179,
    name: "M.Sc Renal Sciences and Dialysis Therapy Technology",
    domain: "Medical Sciences",
    description: "Kidney disease management and dialysis procedures.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 180,
    name: "M.Sc Operation Theatre Technology",
    domain: "Medical Sciences",
    description: "Surgical assistance and operating room management.",
    duration: 24, // 2 years
    fees: 3200,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 181,
    name: "M.Sc Medical Laboratory Sciences",
    domain: "Medical Sciences",
    description: "Diagnostic testing and laboratory management.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 182,
    name: "M.Sc MLT- Hematology and Blood Banking",
    domain: "Medical Sciences",
    description: "Blood analysis and transfusion medicine.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 183,
    name: "M.Sc MLT- Pathology (Histopathology, Cytopathology and Immunopathology)",
    domain: "Medical Sciences",
    description: "Tissue analysis and disease diagnosis.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1576671414121-aa2d60f1e5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 184,
    name: "M.Sc Total Quality Management",
    domain: "Management",
    description: "Quality control systems and process improvement.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 185,
    name: "M.Sc Clinical Research",
    domain: "Medical Sciences",
    description: "Clinical trial design and research ethics.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 186,
    name: "M.Sc Medical Microbiology",
    domain: "Medical Sciences",
    description: "Disease-causing microorganisms and infection control.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 187,
    name: "Master in Physiotherapy (Orthopedics, Neurology, Pediatrics, Cardiorespiratory)",
    domain: "Physiotherapy",
    description: "Rehabilitation techniques for various conditions.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 188,
    name: "Masters in Sports Physiotherapy",
    domain: "Physiotherapy",
    description: "Athletic injury management and sports rehabilitation.",
    duration: 24, // 2 years
    fees: 3200,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 189,
    name: "M.Sc Cardiovascular Technology",
    domain: "Medical Sciences",
    description: "Cardiac diagnostics and cardiovascular procedures.",
    duration: 24, // 2 years
    fees: 3200,
    image: "https://images.unsplash.com/photo-1559757175-7cb057fba3c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 190,
    name: "Masters in Sports Nutrition",
    domain: "Nutrition Sciences",
    description: "Athletic dietary requirements and performance nutrition.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 191,
    name: "Master in Public Health",
    domain: "Public Health",
    description: "Population health and disease prevention.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 192,
    name: "MBA in Hospital Administration",
    domain: "Healthcare Management",
    description: "Healthcare facility management and medical services.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 193,
    name: "BPT Bachelor of Physiotherapy",
    domain: "Physiotherapy",
    description: "Physical therapy techniques and rehabilitation.",
    duration: 48, // 4 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 194,
    name: "B.Sc Medical Microbiology",
    domain: "Medical Sciences",
    description: "Microorganisms and infection control.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 195,
    name: "B.Sc Medical Laboratory Sciences",
    domain: "Medical Sciences",
    description: "Clinical testing and laboratory management.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 196,
    name: "Diploma in Medical Lab Sciences",
    domain: "Medical Sciences",
    description: "Basic laboratory techniques and sample analysis.",
    duration: 24, // 2 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1576671414121-aa2d60f1e5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 197,
    name: "BSc Forensic Science",
    domain: "Forensic Sciences",
    description: "Crime scene investigation and forensic techniques.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 198,
    name: "BSc Cardiovascular Technology",
    domain: "Medical Sciences",
    description: "Cardiac diagnostics and cardiovascular procedures.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1559757175-7cb057fba3c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 199,
    name: "BSc Optometry",
    domain: "Medical Sciences",
    description: "Vision assessment and eye health evaluation.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1551019139-9a2d60b6b42c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 200,
    name: "BSc Optometry (2nd Year Entry)",
    domain: "Medical Sciences",
    description: "Lateral entry program in optometry.",
    duration: 24, // 2 years
    fees: 4000,
    image: "https://images.unsplash.com/photo-1551019139-9a2d60b6b42c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 201,
    name: "BSc Medical Radiology & Imaging Technology",
    domain: "Medical Sciences",
    description: "Diagnostic imaging techniques and radiological procedures.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1516069677018-378761110b846?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 202,
    name: "BSc Medical Radiology & Imaging Technology (Lateral Entry)",
    domain: "Medical Sciences",
    description: "Lateral entry program in radiological imaging.",
    duration: 24, // 2 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1516069677018-378761110b846?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 203,
    name: "B.Sc Clinical Embryology",
    domain: "Medical Sciences",
    description: "Reproductive technologies and fertility treatments.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 204,
    name: "Diploma in Medical Radiology and Imaging Technology",
    domain: "Medical Sciences",
    description: "Basic radiological techniques.",
    duration: 24, // 2 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1516069677018-378761110b846?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 205,
    name: "B.Sc Stem Cell Technologies & Regenerative Medicines",
    domain: "Medical Sciences",
    description: "Stem cell biology and tissue engineering.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 206,
    name: "B.Sc Nutrigenetics and Personalised Nutrition",
    domain: "Nutrition Sciences",
    description: "Genetics and personalized dietary interventions.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 207,
    name: "Ph.D Agriculture",
    domain: "Agricultural Sciences",
    description: "Advanced research in agricultural sciences.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 208,
    name: "M.Sc Agriculture (Agronomy/Horticulture)",
    domain: "Agricultural Sciences",
    description: "Crop science and horticultural practices.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 209,
    name: "B.Sc (Hons.) Agriculture",
    domain: "Agricultural Sciences",
    description: "Crop production and soil science.",
    duration: 48, // 4 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 210,
    name: "Ph.D in Fashion Management/Fashion Communication/Mass Communication and Journalism",
    domain: "Fashion & Communication",
    description: "Advanced research in fashion business.",
    duration: 36, // 3 years
    fees: 5000,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "PhD",
  },
  {
    id: 211,
    name: "MBA in Fashion Management",
    domain: "Fashion",
    description: "Fashion retail operations and brand management.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 212,
    name: "M.A. in Mass Communication and Journalism",
    domain: "Media Studies",
    description: "Media production and journalism ethics.",
    duration: 24, // 2 years
    fees: 3200,
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Masters",
  },
  {
    id: 213,
    name: "Post Graduate Diploma in Fashion Management",
    domain: "Fashion",
    description: "Fashion retail operations and brand management.",
    duration: 12, // 1 year
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Diploma",
  },
  {
    id: 214,
    name: "B.Sc Fashion Designing",
    domain: "Fashion",
    description: "Clothing design and textile science.",
    duration: 36, // 3 years
    fees: 3000,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 215,
    name: "BA in Mass Communication and Journalism",
    domain: "Media Studies",
    description: "Media production and content creation.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 216,
    name: "B.Sc Fashion Management",
    domain: "Fashion",
    description: "Fashion business operations and retail management.",
    duration: 36, // 3 years
    fees: 3000,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 217,
    name: "B.Sc Nursing- Post Basic",
    domain: "Nursing",
    description: "Advanced study in patient care.",
    duration: 24, // 2 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
  {
    id: 218,
    name: "B.Sc Nursing",
    domain: "Nursing",
    description: "Patient care and clinical procedures.",
    duration: 48, // 4 years
    fees: 4000,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    educationLevel: "Bachelors",
  },
]

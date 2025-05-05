import API_URL from '@/components/config/api-url';
import { Country } from './types';


// Countries with calling codes
export const COUNTRIES: Country[] = [
  { name: "United States", code: "US", phoneCode: "+1" },
  { name: "United Kingdom", code: "UK", phoneCode: "+44" },
  { name: "India", code: "IN", phoneCode: "+91" },
  { name: "Canada", code: "CA", phoneCode: "+1" },
  { name: "Australia", code: "AU", phoneCode: "+61" },
  { name: "Nigeria", code: "NG", phoneCode: "+234" },
  { name: "Ghana", code: "GH", phoneCode: "+233" },
  { name: "Kenya", code: "KE", phoneCode: "+254" },
  { name: "South Africa", code: "ZA", phoneCode: "+27" },
  { name: "China", code: "CN", phoneCode: "+86" },
  { name: "Japan", code: "JP", phoneCode: "+81" },
  { name: "Germany", code: "DE", phoneCode: "+49" },
  { name: "France", code: "FR", phoneCode: "+33" },
  { name: "Brazil", code: "BR", phoneCode: "+55" },
  { name: "Mexico", code: "MX", phoneCode: "+52" },
  { name: "Egypt", code: "EG", phoneCode: "+20" },
  { name: "Saudi Arabia", code: "SA", phoneCode: "+966" },
  { name: "UAE", code: "AE", phoneCode: "+971" },
  { name: "Pakistan", code: "PK", phoneCode: "+92" },
  { name: "Bangladesh", code: "BD", phoneCode: "+880" },
  { name: "Other", code: "Other", phoneCode: "" }
];

// Courses offered with degree types
export const COURSES = [
  // B.Tech Programs
  "B.Tech - Computer Science & Engineering",
  "B.Tech - Mechanical Engineering",
  "B.Tech - Electronics & Communication",
  "B.Tech - Civil Engineering",
  "B.Tech - Electrical Engineering",
  "B.Tech - Information Technology",
  "B.Tech - Chemical Engineering",
  "B.Tech - Aerospace Engineering",
  
  // M.Tech Programs
  "M.Tech - Computer Science & Engineering",
  "M.Tech - Electronics & Communication",
  "M.Tech - Mechanical Engineering",
  "M.Tech - Civil Engineering",
  "M.Tech - Electrical Engineering",
  "M.Tech - Biotechnology",
  "M.Tech - Artificial Intelligence",
  "M.Tech - Data Science",
  
  // PhD Programs
  "PhD - Engineering",
  "PhD - Science",
  "PhD - Medicine",
  "PhD - Humanities",
  "PhD - Business Management",
  "PhD - Agriculture",
  
  // Diploma Programs
  "Diploma - Computer Applications",
  "Diploma - Mechanical Engineering",
  "Diploma - Electronics",
  "Diploma - Civil Engineering",
  "Diploma - Fashion Design",
  "Diploma - Hotel Management",
  
  // Other Programs
  "MBBS - Medicine",
  "BDS - Dental Sciences",
  "MBA - Business Administration",
  "BBA - Business Administration",
  "B.Arch - Architecture",
  "B.Pharm - Pharmacy",
  "LLB - Law",
  "Other"
];

// Colleges/Universities
export const COLLEGES = [
  "Delhi University",
  "IIT Delhi",
  "IIT Bombay",
  "IIT Madras",
  "AIIMS",
  "Manipal University",
  "Jawaharlal Nehru University",
  "Banaras Hindu University",
  "University of Hyderabad",
  "Amity University",
  "Lovely Professional University",
  "Anna University",
  "National Law School of India University",
  "Other"
];

// Stats for homepage
export const STATS = [
  { value: 15, label: "Partnered Universities", suffix: "+" },
  { value: 5000, label: "Successful Admissions", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" }
];

// API endpoints
export const API_ENDPOINTS = {
  // STUDENT_REGISTRATION: "https://uniportal.onrender.com/api/student-registration",
  // AGENT_REGISTRATION: "https://uniportal.onrender.com/api/agent-registration",
  // CONTACT_FORM: "https://uniportal.onrender.com/api/uni-contact"

  STUDENT_REGISTRATION: `${API_URL}/student-registration`,
  AGENT_REGISTRATION: `${API_URL}/agent-registration`,
  CONTACT_FORM: `${API_URL}/uni-contact`,
};

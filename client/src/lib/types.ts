// Registration forms types
export interface StudentRegistration {
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  whatsapp?: string;
  email: string;
  course: string;
  college: string;
  passport: string;
  documents?: string[];
}

export interface AgentRegistration {
  agentName: string;
  country: string;
  phone: string;
  whatsapp?: string;
  email: string;
  passport: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  message: string;
}

// Country data type
export interface Country {
  name: string;
  code: string;
  phoneCode: string;
}

// Course and college data
export type Course = string;
export type College = string;

// Testimonial data type
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  country: string;
  image: string;
  text: string;
  rating: number;
}

// Stats data type
export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

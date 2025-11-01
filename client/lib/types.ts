export interface Resume {
  id?: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications?: string[];
  theme?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface EditCommand {
  id: string;
  command: string;
  timestamp: Date;
  status: 'pending' | 'applied' | 'failed';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

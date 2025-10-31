export interface ResumeData {
  basics: {
    name: string;
    email: string;
    phone: string;
    headline: string;
    summary: string;
  };
  education: any[];
  experience: any[];
  projects: any[];
  skills: any[];
}

export interface ThemeData {
  fontFamily: string;
  primaryColor: string;
  layout: "single" | "two-column";
  accentColor: string;
}

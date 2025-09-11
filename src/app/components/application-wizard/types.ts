export type PersonalInfo = {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  homePhone: string;
  mobilePhone: string;
  email: string;
  nin: string;
};

export type EmploymentDesired = {
  position: string;
  dateAvailable: string; // yyyy-mm-dd
};

export type EducationEntry = {
  schoolName: string;
  course: string;
  years: string;
  degree: string;
};

export type Education = {
  highSchool: EducationEntry;
  university: EducationEntry;
  extra: string;
};

export type EmploymentHistoryEntry = {
  current: "yes" | "no" | "";
  employer: string;
  positions: string;
  startDate: string;
  endDate: string;
  startingSalary: string;
  endingSalary: string;
  address: string;
  cityState: string;
  phone: string;
  supervisorEmail: string;
  essentialFunctions: string;
  reasonForLeaving: string;
};

export type Languages = {
  english?: string;
  hausa?: string;
  yoruba?: string;
  igbo?: string;
};

export type Uploads = {
  cvFile: File | null;
  coverLetter: string;
};

export type ApplicationData = {
  agreedToTerms: boolean;
  personalInfo: PersonalInfo;
  employmentDesired: EmploymentDesired;
  education: Education;
  employmentHistory: {
    contactCurrent: "yes" | "no" | "";
    entries: [EmploymentHistoryEntry, EmploymentHistoryEntry, EmploymentHistoryEntry];
  };
  languages: Languages;
  uploads: Uploads;
};

export const createInitialApplicationData = (position: string): ApplicationData => ({
  agreedToTerms: false,
  personalInfo: {
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    nin: "",
  },
  employmentDesired: { position, dateAvailable: "" },
  education: {
    highSchool: { schoolName: "", course: "", years: "", degree: "" },
    university: { schoolName: "", course: "", years: "", degree: "" },
    extra: "",
  },
  employmentHistory: {
    contactCurrent: "",
    entries: [0, 1, 2].map(() => ({
      current: "",
      employer: "",
      positions: "",
      startDate: "",
      endDate: "",
      startingSalary: "",
      endingSalary: "",
      address: "",
      cityState: "",
      phone: "",
      supervisorEmail: "",
      essentialFunctions: "",
      reasonForLeaving: "",
    })) as [EmploymentHistoryEntry, EmploymentHistoryEntry, EmploymentHistoryEntry],
  },
  languages: {},
  uploads: { cvFile: null, coverLetter: "" },
});



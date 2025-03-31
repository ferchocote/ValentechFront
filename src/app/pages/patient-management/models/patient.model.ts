export interface Patient {
    id: string;
    fullName: string;
    documentNumber: string;
    email: string;
    phone: string;
    disease: string;
  }
  
  export interface AddPatientDto {
    firstName: string;
    lastName: string;
    documentNumber: string;
    email: string;
    phone: string;
    disease: string;
    creationUser: string;
  }
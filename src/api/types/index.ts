export type GenderType = "MALE" | "FEMALE";
  
export interface SignUpInputType {
    name: string;
    email: string;
    password: string;
    country: string;
    gender: GenderType;
}
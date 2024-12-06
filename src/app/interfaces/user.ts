export interface User {
    name: string;
    email: string;
    sector: string;
    role: string;
    firebaseId?:string
    health?: string,
    dentistry?: string
}

export interface Customer {
  id: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
  address: string;
  gstNumber: string;
  openingBalance: number;
  creditLimit: number;
  createdAt?: string;
  updatedAt?: string;
}
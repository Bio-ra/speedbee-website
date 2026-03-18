export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  weight: string;
  tag?: string | null;
  image: string;
}
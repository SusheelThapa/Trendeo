export interface Product {
  imageUrl: string;
  price: string;
  originalPrice?: string;
  rating: number;
  remainingItems: number;
  name: string;
  isNew?: boolean;
  discount?: string;
}

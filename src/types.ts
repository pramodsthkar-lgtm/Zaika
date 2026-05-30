export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

import { api } from "../lib/axios";

type RatingType = { rate: number; count: number };

export type Categorys =
  | "eletronic"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Categorys;
  image: string;
  rating: RatingType;
}

interface GetProductsProps {
  category: Categorys;
  limit?: number;
}

export async function getProducts({ category, limit }: GetProductsProps) {
  const response = await api.get<Product[]>(`/products/category/${category}`, {
    params: { limit: limit },
  });
  return response.data;
}

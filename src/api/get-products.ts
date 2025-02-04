import { api } from "../lib/axios";

interface getProductsProps {
  query?: string;
}

export async function getProducts({ query }: getProductsProps) {
  const response = await api.get("/sites/MLB/search", { params: { q: query } });
  return response.data.results;
}

import { api } from "../lib/axios";

export interface resultsType {
  id: string;
  site_id: string;
  title: string;
  subtitle: string | null;
  seller_id: number;
  price: number;
  prices: {
    id: string;
    type: string;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    exchange_rate: number;
    amount_refunded: number;
  }[];
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  };
  address: {
    state_id: string;
    state_name: string;
  };
  shipping: {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
  };
  seller_address: {
    id: string;
    address_line: string;
    state: string;
    country: string;
    city: string;
  };
  rating: {
    average: number;
    total: number;
  };
  variations: Array<{
    id: string;
    price: number;
    attribute_combinations: Array<{ name: string; value_name: string }>;
  }>;
  category_id: string;
  category_name: string;
}

type responseType = {
  available_filters: {
    id: string;
    name: string;
    type: string;
    values: {
      id: string;
      name: string;
      path_from_root: Array<{ id: string; name: string }>;
    }[];
  }[];
  results: resultsType[];
  filters: {
    id: string;
    name: string;
    type: string;
    values: Array<{
      id: string;
      name: string;
      path_from_root: Array<{ id: string; name: string }>;
    }>;
  }[];
  query: string;
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  sort: {
    id: string;
    name: string;
  };
};

interface getProductsProps {
  query: string;
  limit?: number;
}

export async function getProducts({ query, limit }: getProductsProps) {
  const response = await api.get<responseType>("/sites/MLB/search", {
    params: { q: query, limit: limit },
  });
  return response.data.results;
}

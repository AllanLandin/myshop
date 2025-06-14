import { ref, type InjectionKey, type Ref } from "vue";
import type { Product } from "../api/get-products";

export interface cartListItemType extends Product {
  productAmount: number;
}

export const cartListKey = Symbol() as InjectionKey<Ref<cartListItemType[]>>;

export function useCartList() {
  const cartList = ref<cartListItemType[]>([] as cartListItemType[]);

  return cartList;
}

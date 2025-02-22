import { ref, type InjectionKey, type Ref } from "vue";
import type { resultsType } from "../api/get-products";

export interface cartListItemType extends resultsType {
  productAmount: number;
}

export const cartListKey = Symbol() as InjectionKey<Ref<cartListItemType[]>>;

export function useCartList() {
  const cartList = ref<cartListItemType[]>([] as cartListItemType[]);

  return cartList;
}

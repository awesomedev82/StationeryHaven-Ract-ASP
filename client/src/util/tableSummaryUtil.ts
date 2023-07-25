import { BasketItem } from "../models/basket";

export const calculateSubtotalCount = (items: BasketItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateDeliveryFee = (subtotal: number): number => {
  return subtotal > 9999 ? 0 : 500;
};

export interface OrderItem {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  address2: string;
  city: string;
  country: string;
  emailAddress: string;
  fullName: string;
  isRequired: boolean;
  state: string;
  zip: string;
}

export interface Order {
  buyerId: string;
  deliveryFee: number;
  id: number;
  orderDate: string;
  orderItems: OrderItem[];
  orderStatus: string;
  shippingAddress: ShippingAddress;
  subtotal: number;
  total: number;
}

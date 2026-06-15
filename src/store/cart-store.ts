import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  available?: boolean;
  orderPrice: number;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type AddToCartProduct = {
  id: number;
  name: string;
  price?: number;
  image: string;
  description?: string;
  available?: boolean;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: AddToCartProduct) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        if (typeof product.price !== "number") {
          console.warn("Cannot add product without selected price:", product);
          return;
        }

        const currentItems = get().items;
        const existing = currentItems.find((item) => item.id === product.id);

        if (existing) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });

          return;
        }

        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          available: product.available,
          orderPrice: product.price,
          quantity: 1,
        };

        set({
          items: [...currentItems, newItem],
        });
      },

      removeItem: (id) => {
        const currentItems = get().items;

        set({
          items: currentItems.filter((item) => item.id !== id),
        });
      },

      increaseQuantity: (id) => {
        const currentItems = get().items;

        set({
          items: currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      },

      decreaseQuantity: (id) => {
        const currentItems = get().items;

        set({
          items: currentItems
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.orderPrice * item.quantity,
          0
        ),
    }),
    {
      name: "bashamelo-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
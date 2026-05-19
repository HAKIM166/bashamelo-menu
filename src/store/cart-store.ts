import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "@/data/menu";

export type CartProduct = MenuItem & {
  orderPrice: number;
};

export type CartItem = CartProduct & {
  quantity: number;
};

function getOrderPrice(price: number | string): number {
  if (typeof price === "number") return price;

  const sizes = price.match(/S\s*(\d+)\s*\|\s*L\s*(\d+)/i);
  if (sizes) return Number(sizes[2]);

  const fallback = Number(price);
  return Number.isFinite(fallback) ? fallback : 0;
}

type CartStore = {
  items: CartItem[];
  addItem: (product: MenuItem) => void;
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
        const orderPrice = getOrderPrice(product.price);

        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, orderPrice, quantity: 1 }],
          };
        });
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),

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
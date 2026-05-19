import type { CartItem } from "@/store/cart-store";

const RESTAURANT_WHATSAPP_NUMBER = "966507922020";
const MAX_TOTAL_ITEMS = 20;

export type CustomerInfo = {
  name: string;
  phone: string;
  orderType: "delivery" | "pickup";
  address?: string;
  notes?: string;
};

export function createWhatsAppOrderUrl(
  items: CartItem[],
  totalPrice: number,
  customer: CustomerInfo
) {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  if (totalQuantity > MAX_TOTAL_ITEMS) {
    alert(
      `الحد الأقصى للطلب الواحد ${MAX_TOTAL_ITEMS} قطعة. للطلبات الكبيرة يرجى التواصل معنا مباشرة عبر واتساب.`
    );
    return "";
  }

  const orderLines = items
    .map((item, index) => {
      const itemTotal = item.orderPrice * item.quantity;

      return `${index + 1}) ${item.name}
الكمية: ${item.quantity}
سعر القطعة: ${item.orderPrice} ريال
الإجمالي: ${itemTotal} ريال`;
    })
    .join("\n\n");

  const message = `طلب جديد من موقع بشاميلو

بيانات العميل:
الاسم: ${customer.name}
الجوال: ${customer.phone}
نوع الطلب: ${customer.orderType === "delivery" ? "توصيل" : "استلام من الفرع"}${
    customer.orderType === "delivery"
      ? `\nالعنوان: ${customer.address || "-"}`
      : ""
  }${customer.notes ? `\nملاحظات: ${customer.notes}` : ""}

تفاصيل الطلب:
${orderLines}

الإجمالي: ${totalPrice} ريال
عدد القطع: ${totalQuantity}

الرجاء تأكيد الطلب مع العميل.`;

  return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
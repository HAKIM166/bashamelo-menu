export type OfferVariant = {
  id: number;
  label: string;
  price: number;
  oldPrice?: number;
  description: string;
};

export type OfferItem = {
  id: number;
  name: string;
  price?: number;
  oldPrice?: number;
  description?: string;
  image: string;
  available?: boolean;
  variants?: OfferVariant[];
};

export const offersData: OfferItem[] = [
  {
    id: 1001,
    name: "عرض الجالون",
    image: "/images/offers/gallon-offer.jpg",
    available: true,
    variants: [
      {
        id: 10011,
        label: "1 لتر",
        price: 15,
        oldPrice: 20,
        description: "جالون عصير طبيعي 1 لتر",
      },
      {
        id: 10012,
        label: "1.5 لتر",
        price: 20,
        oldPrice: 25,
        description: "أي جالون عصير طبيعي 1.5 لتر",
      },
    ],
  },
  {
    id: 1002,
    name: "عرض العصير",
    price: 16,
    oldPrice: 20,
    description: "2 كانز عصير طبيعي",
    image: "/images/offers/juice-offer.jpg",
    available: true,
  },
];
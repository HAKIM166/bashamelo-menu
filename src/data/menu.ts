export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  calories?: number;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: 'البشاميل',
    items: [
      {
        id: 1,
        name: 'بشاميل لحم',
        price: 25,
        image: '/images/menu/bashamel-meat.jpg',
        calories: 2500,
      },
      {
        id: 2,
        name: 'بشاميل دجاج',
        price: 25,
        image: '/images/menu/bashamel-chicken.jpg',
        calories: 2400,
      },
      {
        id: 3,
        name: 'بشاميل روبيان',
        price: 28,
        image: '/images/menu/bashamel-shrimp.jpg',
        calories: 2350,
      },
      {
        id: 4,
        name: 'بشاميل بطاطا حلوة',
        price: 15,
        image: '/images/menu/bashamel-sweet.jpg',
        calories: 2000,
      },
      {
        id: 5,
        name: 'سمبوسة',
        price: 13,
        image: '/images/menu/sambosa.jpg',
        calories: 1900,
      },
    ],
  },

  {
    category: 'البرجر',
    items: [
      {
        id: 6,
        name: 'سماش برجر لحم + بطاطس',
        price: 18,
        image:'/images/menu/double-smash.jpg' ,
        calories: 1800,
      },
      {
        id: 7,
        name: 'سماش برجر تريبل + بطاطس',
        price: 23,
        image: '/images/menu/smash-burger.jpg',
        calories: 2000,
      },
      {
        id: 8,
        name: 'فيليه دجاج + بطاطس',
        price: 20,
        image: '/images/menu/chicken-fillet.jpg',
        calories: 1700,
      },
      {
        id: 9,
        name: 'بطاطس بشاميلو',
        description: 'قطع استربس + بطاطس + مكس صوص',
        price: 17,
        image: '/images/menu/bashamelo-fries.jpg',
        calories: 1300,
      },
      {
        id: 10,
        name: 'بطاطس سادة',
        price: 7,
        image: '/images/menu/fries.jpg',
        calories: 1000,
      },
      {
        id: 11,
        name: 'دونر كباب',
        price: 15,
        image: '/images/menu/doner.jpg',
        calories: 800,
      },
    ],
  },

  {
    category: 'الخلية',
    items: [
      {
        id: 12,
        name: 'خلية كلاسيك',
        price: 25,
        image: '/images/menu/khaliya-classic.jpg',
        calories: 850,
      },
      {
        id: 13,
        name: 'خلية بيكان',
        price: 27,
        image: '/images/menu/khaliya-pecan.jpg',
        calories: 800,
      },
      {
        id: 14,
        name: 'خلية نوتيلا زعتر',
        price: 27,
        image: '/images/menu/khaliya-nutella.jpg',
        calories: 900,
      },
      {
        id: 15,
        name: 'خلية سينابون',
        price: 27,
        image: '/images/menu/khaliya-cinnamon.jpg',
        calories: 769,
      },
      {
        id: 16,
        name: 'أصابع جبن',
        price: 23,
        image: '/images/menu/cheese-fingers.jpg',
        calories: 546,
      },
      {
        id: 17,
        name: 'سينابون رول',
        price: 10,
        image: '/images/menu/cinnamon-roll.jpg',
        calories: 493,
      },
    ],
  },

  {
    category: 'العصائر',
    items: [
      {
        id: 18,
        name: 'كنزة عصير كبير',
        price: 12,
        image: '/images/menu/juice-gallon.jpg',
        calories: 400,
      },
      {
        id: 19,
        name: 'جالون عصير (1 لتر)',
        price: 17,
        image: '/images/menu/juice-can.jpg',
        calories: 650,
      },
            {
        id: 20,
        name: 'بيبسي',
        price: 3,
        image: '/images/menu/pepsi.jpg',
        calories: 450,
      },
            {
        id: 21,
        name: 'مياه',
        price: 1,
        image: '/images/menu/water-aquafina.jpg',
      },
    ],
  },
];

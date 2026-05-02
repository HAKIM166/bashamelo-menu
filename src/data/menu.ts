export type MenuItem = {
  id: number;
  name: string;
  price: number | string;
  description?: string;
  image: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    category: 'البشاميل',
    items: [
      { id: 1, name: 'بشاميل لحم', price: 'S 15 | L 25', image: '/images/menu/bashamel-meat.jpg' },
      { id: 2, name: 'بشاميل دجاج', price: 'S 15 | L 25', image: '/images/menu/bashamel-chicken.jpg' },
      { id: 3, name: 'بشاميل روبيان', price: 'S 18 | L 28', image: '/images/menu/bashamel-shrimp.jpg' },
      { id: 4, name: 'بشاميل بطاطا حلوة', price: 12, image: '/images/menu/bashamel-sweet.jpg' },
      { id: 5, name: 'بطاطس بشاميل', price: 18, image: '/images/menu/bashamel-fries.jpg' },
    ],
  },
  {
    category: 'البرجر',
    items: [
      { id: 6, name: 'سماش برجر لحم', description: 'برجر وبطاطس', price: 18, image: '/images/menu/smash-burger.jpg' },
      { id: 7, name: 'سماش تريبل لحم', description: 'برجر وبطاطس', price: 23, image: '/images/menu/triple-smash.jpg' },
      { id: 8, name: 'فيليه دجاج', description: 'فيليه وبطاطس', price: 20, image: '/images/menu/chicken-fillet.jpg' },
      { id: 12, name: 'وجبة برجر أطفال', price: 12, image: '/images/menu/kids-burger.jpg' },
      { id: 13, name: 'وجبة ناجتس أطفال', price: 12, image: '/images/menu/kids-nuggets.jpg' },
    ],
  },
  {
    category: 'مكرونتي',
    items: [
      { id: 9, name: 'مكرونة بالصوص الأحمر', description: 'لحم أو دجاج', price: 20, image: '/images/menu/red-sauce-pasta.jpg' },
    ],
  },
  {
    category: 'بطاطسنا',
    items: [
      { id: 10, name: 'دونر كباب', price: 15, image: '/images/menu/doner-kebab.jpg' },
      { id: 11, name: 'لحم طاطس', price: 18, image: '/images/menu/meat-tates.jpg' },
      { id: 14, name: 'أصابع موزاريلا', price: 12, image: '/images/menu/mozzarella-sticks.jpg' },
      { id: 15, name: 'بطاطس ويدجيز', price: 9, image: '/images/menu/potato-wedges.jpg' },
      { id: 16, name: 'بطاطس كيرلي', price: 8, image: '/images/menu/curly-fries.jpg' },
      { id: 17, name: 'حلقات البصل', price: 7, image: '/images/menu/onion-rings.jpg' },
      { id: 18, name: 'بطاطس مُبهر', price: 7, image: '/images/menu/spiced-fries.jpg' },
    ],
  },
  {
    category: 'البيتزا',
    items: [
      { id: 19, name: 'بيتزا بيبروني', price: 15, image: '/images/menu/pepperoni-pizza.jpg' },
      { id: 20, name: 'بيتزا ميكس جبن', price: 15, image: '/images/menu/mix-cheese-pizza.jpg' },
      { id: 21, name: 'بيتزا لحم', price: 18, image: '/images/menu/meat-pizza.jpg' },
      { id: 22, name: 'بيتزا مارجريتا', price: 12, image: '/images/menu/margherita-pizza.jpg' },
      { id: 23, name: 'بيتزا خضار', price: 12, image: '/images/menu/vegetables-pizza.jpg' },
      { id: 24, name: 'بيتزا دجاج', price: 18, image: '/images/menu/chicken-pizza.jpg' },
      { id: 25, name: 'بيتزا تونة', price: 18, image: '/images/menu/tuna-pizza.jpg' },
      { id: 26, name: 'بيتزا ديناميت', price: 18, image: '/images/menu/dynamite-pizza.jpg' },
    ],
  },
  {
    category: 'العصائر',
    items: [
      { id: 27, name: 'كنز عصير فريش', price: 12, image: '/images/menu/fresh-juice-can.jpg' },
      { id: 28, name: 'بيبسي', price: 3, image: '/images/menu/pepsi.jpg' },
      { id: 29, name: 'ماء', price: 1, image: '/images/menu/water.jpg' },
    ],
  },
];
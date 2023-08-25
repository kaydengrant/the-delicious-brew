export {
  Logo,
  MugHot,
  AngleLeft,
  AngleRight,
  AngleDown,
  AngleUp,
  Truck,
  BoxOpen,
  Lock,
  CreditCard,
  Search,
  Cart,
  HamburgerMenu,
  Close,
  Check,
  Plus,
  Cone,
  Minus,
  ArrowRight,
  AddShoppingCart,
  RemoveShoppingCart,
  Error,
} from './icons';

export {
  loadingContainerAnim,
  loadingSteamContainerAnim,
  loadingSteamAnim,
  heroCarouselAnim,
  navBarExtendedAnim,
  navBarMobileAnim,
} from './animations';

export const addCommasToNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const capitalizeString = (string: string) => {
  const substrings = string.split(/[-\s]+/);
  const capitalizedSubstrings = substrings.map((substring) => {
    return substring.charAt(0).toUpperCase() + substring.slice(1).toLowerCase();
  });

  return capitalizedSubstrings.join(' ');
};

export const navCategories = [
  {
    key: 1,
    name: 'espresso',
    title: 'Espresso',
    links: [
      { key: 10, title: 'All Espresso', to: '/shop/products/espresso' },
      { key: 11, title: 'Machines', to: '/shop/products/espresso-machines' },
      {
        key: 12,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/espresso-accessories',
      },
    ],
  },
  {
    key: 2,
    name: 'drip',
    title: 'Drip',
    links: [
      { key: 20, title: 'All Drip', to: '/shop/products/drip' },
      { key: 21, title: 'Machines', to: '/shop/products/drip-machines' },
      {
        key: 22,
        title: 'Accessories',
        to: '/shop/products/drip-accessories',
      },
    ],
  },
  {
    key: 3,
    name: 'pour-over',
    title: 'Pour Over',
    links: [
      { key: 30, title: 'All Pour Over', to: '/shop/products/pour-over' },
      { key: 31, title: 'Brewers', to: '/shop/products/pour-over-brewers' },
      {
        key: 32,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/pour-over-accessories',
      },
    ],
  },
  {
    key: 4,
    name: 'press',
    title: 'Press',
    links: [
      { key: 40, title: 'All Press', to: '/shop/products/press' },
      { key: 41, title: 'Brewers', to: '/shop/products/press-brewers' },
      {
        key: 42,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/press-accessories',
      },
    ],
  },
  {
    key: 5,
    name: 'beans',
    title: 'Beans',
    links: [
      { key: 50, title: 'All Beans', to: '/shop/products/beans' },
      { key: 51, title: 'Whole Beans', to: '/shop/products/beans-whole' },
      { key: 52, title: 'Pre-Ground Beans', to: '/shop/products/beans-ground' },
    ],
  },
  {
    key: 6,
    name: 'accessories',
    title: 'Additional Tools & Accessories',
    links: [
      { key: 60, title: 'All Accessories', to: '/shop/products/accessories' },
      { key: 61, title: 'Grinders', to: '/shop/products/accessories-grinders' },
      { key: 62, title: 'Filters', to: '/shop/products/accessories-filters' },
      { key: 63, title: 'Kettles', to: '/shop/products/accessories-kettles' },
      {
        key: 64,
        title: 'Scales & Measuring',
        to: '/shop/products/accessories-measuring',
      },
      {
        key: 65,
        title: 'Miscellaneous',
        to: '/shop/products/accessories-misc',
      },
    ],
  },
];

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

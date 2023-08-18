import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
} from 'react';
import { toast } from 'react-toastify';

type StateContextProps = {
  children: ReactElement;
};

type ProviderProps = {
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: any, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: 'inc' | 'dec') => void;
  onRemove: (product: any) => void;
};

const Context = createContext<ProviderProps>({
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
  setQty: () => {},
  incQty: () => {},
  decQty: () => {},
  onAdd: () => {},
  toggleCartItemQuantity: () => {},
  onRemove: () => {},
});

export const StateContext: React.FC<StateContextProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  let foundProduct: any;

  const onAdd = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product: any) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: 'inc' | 'dec') => {
    foundProduct = cartItems.find((item) => item._id === id);

    if (value === 'inc') {
      setCartItems(
        cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec' && foundProduct.quantity > 1) {
      setCartItems(
        cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

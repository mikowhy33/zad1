export type FetchedData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type AddToCart = {
  addToCartFunc: (item: FetchedData) => void;
  deleteFromCart: (item: FetchedData) => void;
  cart: FetchedData[];
};

export type AddToCartHome = {
  addToCart: (item: FetchedData) => void;
};

import type { FetchedData } from "../types/types";

type AddToCart = {
  addToCartFunc: (item: FetchedData) => void;
   cart: FetchedData[];
};

export function Home({ addToCartFunc,cart}:AddToCart) {

  console.log(JSON.stringify(cart))
  return <div>This is a HomePage</div>;
}

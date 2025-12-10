import { useMemo, useState } from 'react';
import { FetchingHook } from '../hooks/fetchingHook';
import type { FetchedData } from '../types/types';

type AddToCart = {
  addToCart: (item: FetchedData) => void;
};

export function Home({ addToCart }: AddToCart) {
  const { dataFromApi, loading, errorWhileFetching } = FetchingHook();

  console.log('Data from homepage');
  console.log(dataFromApi);

  console.log(dataFromApi.length + 'Length');
  const randomNr = Math.floor(Math.random() * 20);

  console.log(randomNr);

  

  const [addedRandom, setAddedRandom] = useState(false);

  const AddedToTheBasket = () => {
    // setTimeout(() => {
    setAddedRandom(true);
    // }, 1000);

    addToCart(dataFromApi[randomNr]);
  };

  if (loading) {
    return <>Loading the products</>;
  }

  if (errorWhileFetching) {
    return <>There has been an error while fetching the data</>;
  }

  if (addedRandom) {
    return <p>Added to the basket</p>;
  }

  return (
    <>
      <div>This is a HomePage</div>

      <div className="w-24 h-24 mx-auto">
        <img src={dataFromApi[randomNr].image} alt="" className="w-full h-full" />
      </div>

      <button className="w-fit" onClick={AddedToTheBasket}>
        Add to the basket
      </button>
    </>
  );
}

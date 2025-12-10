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

  // console.log(randomNr);

  const [timesAddesToTheBasket, setTimesAddesToTheBasket] = useState(0);

  const randomItem = useMemo(() => {
    const randomNr = Math.floor(Math.random() * 20);

    return dataFromApi[randomNr];
  }, [dataFromApi]);

  const AddedToTheBasket = () => {
    // setTimeout(() => {
    setAddedRandom(true);
    // }, 1000);

    addToCart(randomItem);
    setTimesAddesToTheBasket((prev) => prev + 1);
  };
  const [addedRandom, setAddedRandom] = useState(false);

  if (loading) {
    return <>Loading the products</>;
  }

  if (errorWhileFetching) {
    return <>There has been an error while fetching the data</>;
  }

  // if (addedRandom) {
  //   return <p>Added to the basket</p>;
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <div>This is a HomePage</div>

      <div className="w-24 h-24 mx-auto">
        <img src={randomItem.image} alt="" className="w-full h-full" />
      </div>

      <button className="w-fit mx-auto" onClick={AddedToTheBasket}>
        Add to the basket
      </button>

      {addedRandom === true ? (
        <p className="bg-green-300 w-xs mx-auto text-black rounded-2xl">Added {timesAddesToTheBasket} an item to the basket!</p>
      ) : null}
    </div>
  );
}

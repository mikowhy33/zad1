import { useEffect, useState } from 'react';
import type { FetchedData } from '../types/types';

export const FetchingHook = () => {
  const [dataFromApi, setDataFromApi] = useState<FetchedData[]>([]);

  const [loading, setLoading] = useState(true);

  const [errorWhileFetching, setErrorWhileFetching] = useState<string>();

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('Error while fetching');
        }

        const res = await response.json();
        // console.log(res);
        setDataFromApi(res);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.error('Error while fetching:', e);
        setErrorWhileFetching(e.message || String(e));
      } finally {
        // if all good loading is not needed
        setLoading(false);
      }
    };

    fetching();
  }, []);

  const SortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = e.target.value;
    //0 default, 1 title, 2 price
    // console.log(sortType);

    // copy of our data
    const sorted = [...dataFromApi];

    if (sortType === '1') {
      setDataFromApi(sorted.sort((a, b) => (a.title > b.title ? 1 : -1)));
      return;
    }
    if (sortType === '2') {
      setDataFromApi(sorted.sort((a, b) => a.price - b.price));
      return;
    } else {
      setDataFromApi(sorted.sort((a, b) => a.id - b.id));
      
    }
  };

  return {
    dataFromApi,
    loading,
    errorWhileFetching,
    SortBy
  };
};

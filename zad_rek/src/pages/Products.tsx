import { useEffect, useState } from 'react';
// import { data } from 'react-router-dom';

type FetchedData = {
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

export function Products() {
  const [dataFromApi, setDataFromApi] = useState<FetchedData[]>([]);

  useEffect(() => {
    try {
      const fetching = async () => {
        const data = await fetch('https://fakestoreapi.com/products');

        if (!data.ok) {
          throw new Error('Error while fetching');
        }

        const res = await data.json();
        console.log(res);

        setDataFromApi(res);
      };
      fetching();
    } catch (e) {
      throw new Error(String(e));
    }
  }, []);

  const SortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = e.target.value;
    //0 default, 1 title, 2 price
    console.log(sortType);

    // copy of our data
    const sorted = [...dataFromApi];

    if (sortType === '1') {
      setDataFromApi(sorted.sort((a, b) => (a.title > b.title ? 1 : -1)));
      return;
    }
    if (sortType === '2') {
      setDataFromApi(sorted.sort((a: any, b: any) => a.price - b.price));
      return;
    } else {
      setDataFromApi(sorted.sort((a, b) => a.id - b.id));
      console.log('bzz');
    }
  };

  return (
    <>
      <div>a list of products here</div>

      {/* trick to always get a type;) */}
      {/* <select defaultValue={0} onChange={(e)=>SortBy(e)}> */}
      <select defaultValue={0} onChange={SortBy} className="bg-black rounded-xl m-2 p-2">
        <option value={0}>Sort by: Default</option>
        <option value={1}>Sort by: Title</option>
        <option value={2}>Sort by: Price</option>
      </select>
      <hr />
      <ul>
        {dataFromApi.map((item) => (
          <li key={item.id} className="mb-8 mt-4 border p-4">
            <div className="flex justify-between ">
              <div className="w-md">
                <p>
                  {item.id}. {item.title}
                </p>
                <p>
                  <strong>Category:</strong> {item.category}
                </p>
                <p>
                  <strong>Price:</strong> {item.price}
                </p>
                <p>
                  <strong>Item rating:</strong> {item.rating.rate}
                </p>
                <p>
                  <strong>Item rating count:</strong> {item.rating.count}
                </p>
              </div>
              <img src={item.image} alt="" className="max-h-28 max-w-md" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

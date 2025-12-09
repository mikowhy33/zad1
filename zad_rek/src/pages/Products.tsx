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

  return (
    <>
      <div>a list of products here</div>
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

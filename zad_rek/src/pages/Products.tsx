
import type { FetchedData } from '../types/types';
import { FetchingHook } from '../hooks/fetchingHook';
// import { TrashCan } from '../components/TrashCan';
// import { data } from 'react-router-dom';

type AddToCart = {
  addToCartFunc: (item: FetchedData) => void;
  deleteFromCart: (item: FetchedData) => void;
  cart: FetchedData[];
  
};

export function Products({ addToCartFunc, deleteFromCart, cart }: AddToCart) {
 

  // a custom hook for fetching but as well sorting
  // normally to fetch we use TanStackQuery
  const {dataFromApi,loading,errorWhileFetching,SortBy}=FetchingHook();

  const getProductQuantity = (id: number) => {
    return cart.filter((cartItem) => cartItem.id === id).length;
  };
  

  if (errorWhileFetching) {
    return (
      <>
        <p className='font-bold text-red-500'>{errorWhileFetching}</p>
      </>
    );
  }
  return (
    <>
      <div>a list of products here</div>

      {/* trick to always get a type;) */}
      {/* <select defaultValue={0} onChange={(e)=>SortBy(e)}> */}

      {loading ? (
        <p className="font-bold">LOADING...</p>
      ) : (
        <>
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
                  <div className="w-md flex flex-col items-center gap-y-2">
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
                    <button className="w-fit" onClick={() => addToCartFunc(item)}>
                      Add to the basket
                    </button>
                    <button className="w-fit" onClick={() => deleteFromCart(item)}>
                      Delete From the basket
                    </button>
                    <div>
                      <strong>Quantity of this product Inside the Bin:</strong> {getProductQuantity(item.id)}
                    </div>
                  </div>
                  <img src={item.image} alt="" className="max-h-28 max-w-md my-auto" />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

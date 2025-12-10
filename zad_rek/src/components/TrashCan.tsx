// import { useState } from "react";

type Props = {
  count: number;
};

export const TrashCan = ({ count }: Props) => {
  const bzz = () => {
    // console.log('bbzz');
  };

  // const [quantityOfProducts,setQuantityOfProducts]=useState()

  return (
    <>
      <div>{count}</div>

      <div className="absolute  right-4 w-16 h-16 min-h-0 min-w-0">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTMgNmgxOHYySDNWNnptMiAzaDE0bC0xLjUgMTJIOS41TDcgMTJ6bTUtNWg0djJIOFY0eiIvPjwvc3ZnPg=="
          className="  w-full h-full min-h-0 min-w-0 "
          onClick={bzz}
        ></img>
        <div className="absolute top-11 right-4 bg-black text-red-500 border border-red-500 rounded-2xl  p-1">{count}</div>
      </div>
      {/* </div> */}
    </>
  );
};

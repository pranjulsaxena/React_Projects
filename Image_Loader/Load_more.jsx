import React, { useEffect, useState } from "react";
import axios from "axios";

function Load_more() {
  const [Loading, setLoading] = useState(false);
  const [Products, setProducts] = useState([]);
  const [Count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await axios(
        `https://dummyjson.com/products?limit=20&skip=${Count * 20}`
      );
      const data = response.data.products;
      const updatedData = [...Products, ...data];
      setProducts(updatedData);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [Count]);

  useEffect(() => {
    if (Products.length === 100) {
      setDisabled(true);
    }
  }, [Products])

  const LoadMore = () => {
    setCount(prevCount => prevCount + 1);
  };

  if (Loading && Products.length === 0) return <div className="mt-10 text-center text-4xl">Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-wrap  gap-4 p-2 w-full">
        {Products.map((item, index) => (
          <div className="w-[300px]  border-2 flex flex-col items-center">
            <img
              key={index}
              className="rounded-sm object-cover"
              src={item.thumbnail}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        ))}

      </div>
      <div className="flex items-center flex-col">
        <button disabled={disabled | Loading} className={`cursor-pointer disabled border-1 bg-blue-500 px-2 py-3 mt-4 rounded-lg font-bold ${disabled === true ? ' disabled:cursor-not-allowed bg-slate-600' : ''}`} onClick={LoadMore}>
          {Loading === true ? "Loading ..." : "Load more"}
        </button>
        {disabled && <p>You have reached the maximum limit</p>}
      </div>
    </div>
  );
}

export default Load_more;

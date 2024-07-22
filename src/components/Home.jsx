import React from "react";
// import useFetchData from "../hooks/fetchData";
import Skeleton from "./Skeleton";
import { useEffect, useState } from "react";

const Home = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((json) => {
        let randomNumber = Math.floor(Math.random() * json.length);
        setResponse(json[randomNumber]);
      })
      .catch((error) => {
        toast.error(`${error}`);
        setLoading(false);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <div className="mx-auto card  md:w-2/5 image-full bg-gradient-to-r from-indigo-400  to-pink-400 shadow-xl">
      <div className="card-body justify-center">
        <h2 className="card-title justify-center pb-5 text-2xl">Quote !</h2>
        <p className="text-xl font-semibold text-white md:ps-10 ">
          "{response.text}"
        </p>
        <p className="text-slate-400 mt-4 md:ps-80">- {response.author}</p>
        <button
          className="btn btn-primary md:mx-32 md:mt-10 text-white text-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-pink-400 to-90% hover:from-pink-400 hover:to-yellow-300"
          onClick={fetchData}
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default Home;

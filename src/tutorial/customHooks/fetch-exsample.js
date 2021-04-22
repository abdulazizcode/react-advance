import React from "react";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? <Loading /> : <Fetched />}</h2>
    </div>
  );
};

const Loading = () => {
  return (
    <div className='laoding'>
      <h1>Loading...</h1>
    </div>
  );
};

const Fetched = () => {
  return (
    <div className='feched'>
      <h1>Data Fetched!!!</h1>
      <p>Check the console.</p>
    </div>
  );
};
export default Example;

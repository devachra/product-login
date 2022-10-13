import { Fragment, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/ProductPage/ProductItem";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const isClickedIcon = useSelector((state) => state.fav.isClickedIcon);

  const fatchData = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fatchData();
  }, [fatchData]);

  return (
    <Fragment>
      {isClickedIcon &&
        alert("Product Added to Favourite Cart is Successfully")}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-5 ">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;

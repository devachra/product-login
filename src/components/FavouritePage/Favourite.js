import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FavouriteComponent from "./FavouriteItem";

const Favourite = () => {
  const favProducts = useSelector((state) => state.fav.items);
  const isNotification = useSelector((state) => state.fav.notification);

  return (
    <Fragment>
      {isNotification && alert("Are you Sure remove this product")}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex  flex-wrap -m-4">
            {favProducts.length === 0 ? (
              <h1 className=" m-auto p-24 font-black text-5xl   ">
                Favourite Cart Is Empty
              </h1>
            ) : (
              favProducts.map((product) => (
                <FavouriteComponent
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Favourite;

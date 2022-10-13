import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { favActions } from "../../redux/favourite";

const FavouriteComponent = ({ id, title, price, category, image }) => {
  const dispatch = useDispatch();

  const removeFavouriteHandler = () => {
    dispatch(favActions.removeItemToFavourite(id));
  };

  return (
    <div
      key={id}
      className="lg:w-1/4 lg:m-12 shadow-xl shadow-slate-300 my-5 md:mx-auto md:w-1/2 p-6 w-full box-border  border-pink-200 border-4 hover:scale-105 ease-in-out transition-all duration-700 "
    >
      <Link to="/" className="block relative h-64 rounded overflow-hidden">
        <img
          alt={title}
          className="object-contain object-center w-full h-full block"
          src={image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category.toUpperCase()}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>

        <div className="flex  mt-3 justify-between">
          <p className="mt-1">${price}</p>
          <button
            onClick={removeFavouriteHandler}
            className="rounded-full w-10 h-10 bg-red-300 p-0 border-0 inline-flex items-center justify-center text-red-800 ml-4 cursor-pointer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 "
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteComponent;

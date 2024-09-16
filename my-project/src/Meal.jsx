import React, { useState, useEffect } from "react";
import axios from "axios";

const Meal = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals); // API returns "meals"
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 py-5 text-center">
        <h1 className="text-3xl text-white font-bold">Menu Card using React</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 max-w-7xl">
          {items.map(({ strMeal, strMealThumb, idMeal }) => (
            <div key={idMeal} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{strMeal}</h3>
                <p className="text-gray-600 mt-2">Delicious seafood dish</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-3">
        <p>&copy; 2024 All rights reserved to @kanicodes</p>
      </footer>
    </div>
  );
};

export default Meal;

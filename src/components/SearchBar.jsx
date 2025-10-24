import { useEffect, useState } from "react";
import data from "./data.js";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  return (
    <div className=" flex flex-col items-center px-4">
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full max-w-md p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-500 text-center">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

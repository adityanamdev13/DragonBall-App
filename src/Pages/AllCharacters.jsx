import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useDataFetch from "../hooks/useDataFetch";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../components/Spinner";

const AllCharacters = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const endpoint = `https://dragonball-api.com/api/characters?limit=${limit}&page=${page}`;
  const { data,loading, error } = useDataFetch(endpoint);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="text-center font-bold font-serif text-5xl my-4">
        All Characters
      </h1>
      {!loading ? (
        <>
          {" "}
          <div className="grid grid-cols-4 mx-15 my-5 gap-8">
            {data &&
              data.items.map((item) => (
                <CharacterCard key={item.id} character={item} />
              ))}
          </div>
          <div className="flex justify-center items-center gap-4 my-4">
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-40"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <AiOutlineMinus size={24} />
            </button>
            <span className="text-xl font-semibold">Page {page}</span>
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-40"
              onClick={handleNextPage}
              disabled={page === data.meta.totalPages}
            >
              <AiOutlinePlus size={24} />
            </button>
          </div>
        </>
      ) : <Spinner/>}
    </>
  );
};

export default AllCharacters;

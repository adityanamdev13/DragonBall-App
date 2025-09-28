import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import CharacterCard from "../components/CharacterCard";

const fetchPlanets = async ({ pageParam = 1 }) => {
  const limit = 12;
  const response = await fetch(
    `https://dragonball-api.com/api/planets?limit=${limit}&page=${pageParam}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch planets');
  }
  
  return response.json();
};

const AllPlanets = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanets,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {

      const currentPage = lastPage.meta?.currentPage || 1;
      const totalPages = lastPage.meta?.totalPages || 1;
      
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "error") {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center font-bold font-serif md:text-5xl  text-3xl my-4">
        All Planets ({data?.pages?.[0]?.meta?.totalItems || 0 || 0})
      </h1>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4 lg:mx-15 my-5 md:gap-8 gap-3">
            {data?.pages.map((page) =>
              page.items?.map((planet) => (
                <CharacterCard key={planet.id} character={planet} />
              ))
            )}
          </div>

          {/* Infinite scroll trigger */}
          <div ref={ref} className="flex justify-center py-8">
            {isFetchingNextPage && <Spinner />}
            {!hasNextPage && data?.pages.length > 0 && (
              <p className="text-gray-500 text-lg">No more planets</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AllPlanets;
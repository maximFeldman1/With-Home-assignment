import React, { useRef, useEffect, useState, useMemo } from "react";
import { useFetchEvents } from "../../../hooks/useFetchEvents";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchBar from "../SearchBar/SearchBar";
import EventGrid from "../EventGrid/EventGrid";

const InfiniteLoader: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useFetchEvents();
  const [search, setSearch] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(search, 300);

  const allEvents = useMemo(
    () => data?.pages.flatMap((evList) => evList) ?? [],
    [data]
  );

  const filtered = useMemo(() => {
    if (!debouncedSearch) return allEvents;
    const term = debouncedSearch.toLowerCase();

    return allEvents.filter((ev) => ev.name.toLowerCase().includes(term) ?? "");
  }, [allEvents, debouncedSearch]);

  useEffect(() => {
    if (!sentinelRef.current || !hasNextPage) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchNextPage();
    });
    obs.observe(sentinelRef.current);

    return () => obs.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <div className="sticky top-0 z-10 bg-white pb-2 pt-2">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <EventGrid events={filtered} />
      {debouncedSearch && filtered.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          <p>
            לא נמצאו תוצאות עבור <strong>{debouncedSearch}</strong>
          </p>
          <button onClick={() => setSearch("")} className="mt-2 text-blue-600 ">
            נקה חיפוש
          </button>
        </div>
      )}
      <div ref={sentinelRef} className="h-8">
        {isFetchingNextPage && <p className="text-center">Loading more…</p>}
      </div>
      {isFetching && !isFetchingNextPage && (
        <p className="text-center">Refreshing…</p>
      )}
    </>
  );
};

export default InfiniteLoader;

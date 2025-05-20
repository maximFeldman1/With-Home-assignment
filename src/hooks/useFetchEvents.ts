import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchEvents } from '../api/events';
import { Event } from '../types/event';

export const useFetchEvents = () =>
  useInfiniteQuery<Event[], Error>(
    ['events'],
    ({ pageParam = 1 }) => fetchEvents(pageParam),
    {
      getNextPageParam: (lastPage, pages) =>
        pages.length < 20 ? pages.length + 1 : undefined,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );

import React, { lazy, Suspense } from "react";

const InfiniteLoader = lazy(
  () => import("../components/Event/InfiniteLoader/InfiniteLoader")
);

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-2xl font-bold p-4">Events</h1>
      <Suspense
        fallback={
          <div className="p-8 text-center">
            <p>טוען אירועים…</p>
          </div>
        }
      >
        <InfiniteLoader />
      </Suspense>
    </main>
  );
}

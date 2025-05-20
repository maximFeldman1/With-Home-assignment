import React from "react";
import EventCard from "../EventCard/EventCard";
import { Event } from "../../../types/event";

interface Props {
  events: Event[];
}

const EventGrid: React.FC<Props> = ({ events }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {events.map((ev) => (
      <EventCard key={ev.id} event={ev} />
    ))}
  </div>
);

export default React.memo(EventGrid);

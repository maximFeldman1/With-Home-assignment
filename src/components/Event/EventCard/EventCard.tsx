import React from "react";
import { Event } from "../../../types/event";
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarIcon,
  MapPin as MapPinIcon,
} from "lucide-react";
import placeHolderImage from "../../../assets/defaultImage.jpg";
import { InfoRow } from "../../Share/InfoRow/InfoRow";
import { formatTime } from "../../../utils";
import { EventImageCard } from "../EventImageCard/EventImageCard";

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const imageSrc = event.header.images[0].src || placeHolderImage;
  const date = new Date(event.activityBlock.startDate);
  const dayName = date.toLocaleDateString("he-IL", { weekday: "short" });
  const dayNum = date.getDate();
  const { participantsCount, maxParticipants } = event.people.numbers;

  return (
    <div className="relative group bg-white rounded-2xl shadow-md overflow-hidden">
      <EventImageCard
        imageSrc={imageSrc}
        alt={event.name}
        maxParticipants={maxParticipants}
        participantsCount={participantsCount ?? 0}
      >
        <button className="w-32 h-10 bg-blue-600 text-white rounded-full">
          הרשמה
        </button>
      </EventImageCard>

      <div className="p-4 flex">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-white text-center shadow rounded-lg">
            <div className="text-xs text-gray-500 pt-1">{dayName}</div>
            <div className="text-xl font-bold">{dayNum}</div>
          </div>
        </div>

        <div className="flex-1 space-y-2 text-right">
          <h3 className="text-lg font-semibold leading-snug">{event.name}</h3>
          {event.activityBlock.date && (
            <InfoRow icon={<CalendarIcon size={16} />} text={dayName} />
          )}
          <InfoRow
            icon={<ClockIcon size={16} />}
            text={`${formatTime(event.activityBlock.startDate)} - ${formatTime(
              event.activityBlock.endDate
            )}`}
          />
          <InfoRow
            icon={<DollarIcon size={16} />}
            text={event.paymentText || "חינם"}
          />
          {event.activityBlock.location.text && (
            <InfoRow
              icon={<MapPinIcon size={16} />}
              text={event.activityBlock.location.text}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(EventCard);

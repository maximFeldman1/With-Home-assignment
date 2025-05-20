import React from "react";
import clsx from "clsx";

interface EventImageCardProps {
  imageSrc: string;
  alt: string;
  maxParticipants: number;
  participantsCount?: number;
  children?: React.ReactNode;
  className?: string;
}

export const EventImageCard: React.FC<EventImageCardProps> = ({
  imageSrc,
  alt,
  maxParticipants,
  participantsCount = 0,
  children,
  className,
}) => {
  return (
    <div className={clsx("relative h-48 group", className)}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full shadow">
        +{maxParticipants}/{participantsCount}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-200 rounded-lg">
        {children && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

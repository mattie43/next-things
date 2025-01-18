"use client";

import { Typography } from "@mui/material";
import { pastelColors } from "@/constants";
import { InfoOutlined } from "@mui/icons-material";
import Image from "next/image";
import useEventTracker from "./useEventTracker.hook";
import useSettings from "@/app/rotmg/useSettings.hook";
import TopRealmScores from "../components/TopRealmScores";

export default function page() {
  const { settings } = useSettings();
  const { events } = useEventTracker();
  const noEvents = settings.eventTrackerList?.length === 0;

  const filteredEvents = events.filter((event) => {
    if (
      settings.eventTrackerList.includes("Dungeon Key") &&
      event.realm === "Nexus"
    )
      return true;
    return settings.eventTrackerList?.includes(event.name);
  });

  const showEvents = noEvents ? events : filteredEvents;

  const imgUrl = (id: string) =>
    `https://realm.wiki/Sprite/ByObjectId?id=${id}`;

  function utcToLocalTime(timeStr: string) {
    // Split the string into hours and minutes
    if (!timeStr) return "";
    const [hours, minutes] = timeStr.split(":").map(Number);

    // Create a new Date object in UTC
    const utcDate = new Date(
      Date.UTC(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate(),
        hours,
        minutes
      )
    );

    // Convert to local time (Date objects automatically adjust to local timezone)
    return utcDate.toTimeString().slice(0, 8);
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center gap-1 p-4 m-auto">
        <InfoOutlined fontSize="small" />
        <Typography fontSize="small">Refreshes every 10 seconds.</Typography>
      </div>
      <TopRealmScores />
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2 px-4 pb-4 overflow-auto w-full content-start flex-1">
        {showEvents.map((event, i) => (
          <div
            key={i}
            className={`flex flex-row border-2 p-2 gap-2 items-center h-fit ${
              event.name === "Unknown" ? "hidden" : ""
            }`}
            style={{
              borderColor: pastelColors[i % 5],
              color: pastelColors[i % 5],
            }}
          >
            <Image
              src={imgUrl(event.eventId)}
              alt={event.name}
              width={64}
              height={64}
            />
            <div className="flex flex-col gap-1">
              <Typography fontSize="small">Name: {event.name}</Typography>
              <Typography fontSize="small">Server: {event.server}</Typography>
              <Typography fontSize="small">
                {`Realm: ${event.realm} ${event.realmCount} ${
                  event.realmScore ? `(${event.realmScore}%)` : ""
                }`}
              </Typography>
              <Typography fontSize="small">
                Spawned: {utcToLocalTime(event.spawnTime)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

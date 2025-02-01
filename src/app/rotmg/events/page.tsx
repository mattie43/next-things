"use client";

import useEventTracker from "./useEventTracker.hook";
import useSettings from "@/app/rotmg/useSettings.hook";
import TopRealmScores from "../components/TopRealmScores";
import SingleEvent from "../components/SingleEvent";
import Infobox from "../components/Infobox";

export default function page() {
  const { settings } = useSettings();
  const { events } = useEventTracker();
  const noEvents = settings.eventTrackerList?.length === 0;

  const filteredEvents = events.filter((event) => {
    if (
      settings.eventTrackerList?.includes("Dungeon Key") &&
      event.realm === "Nexus"
    )
      return true;
    return settings.eventTrackerList?.includes(event.name);
  });

  const showEvents = noEvents ? events : filteredEvents;

  const showGuides = settings.showGuides;

  const info =
    "Search and sort events by selecting them from the side panel. While nothing is selected, everything will be shown. Events will automatically refresh every 10 seconds.";

  return (
    <div className="flex flex-col h-full w-full">
      {showGuides && <Infobox info={info} />}
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2 px-4 pb-4 overflow-auto w-full flex-1">
        <TopRealmScores />
        {showEvents.map((event, ind) => (
          <SingleEvent
            key={`${event.eventId}-${ind}`}
            event={event}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
}

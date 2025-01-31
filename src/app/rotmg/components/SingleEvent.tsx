import Image from "next/image";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { pastelColors } from "@/constants";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function SingleEvent({
  event,
  ind,
}: {
  event: any;
  ind: number;
}) {
  const [imgError, setImgError] = useState(false);

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
    <div
      className={`flex flex-row border-2 p-2 gap-2 items-center h-fit ${
        event.name === "Unknown" ? "hidden" : ""
      }`}
      style={{
        borderColor: pastelColors[ind % pastelColors.length],
        color: pastelColors[ind % pastelColors.length],
      }}
    >
      {imgError ? (
        <QuestionMarkIcon />
      ) : (
        <Image
          src={imgUrl(event.eventId)}
          onError={() => {
            console.log("img error");
            setImgError(true);
          }}
          alt={event.name}
          width={64}
          height={64}
        />
      )}
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
  );
}

"use client";

import Image from "next/image";
import useEventTracker from "./useEventTracker";

export default function page() {
  const { items, isLoading } = useEventTracker();
  const imgUrl = (id: string) =>
    `https://realm.wiki/Sprite/ByObjectId?id=${id}`;

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item, i) => (
        <div key={i}>
          {item.name}
          <Image
            src={imgUrl(item.eventId)}
            alt={item.name}
            width={64}
            height={64}
          />
        </div>
      ))}
    </div>
  );
}

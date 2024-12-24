import useSWR from "swr";
import { dungeons, events } from "./events";

type TEventAPI = {
  success: boolean;
  value: string;
};

type TEvent = {
  eventId: string;
  realm: string;
  server: string;
  realmCount: number; // Out of 85
  unknownNumber: number;
  realmScore: number;
  spawnTime: string;
  uid: string;
  unknownBoolean: boolean;
};

export default function useEventTracker() {
  const url = "https://realmstock.network/Notifier/EventHistory";

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR<TEventAPI>(url, fetcher);

  const items = () => {
    if (!data) return [];
    const splitStr = data.value.split("\n");
    const pipeSplit = splitStr.map((item: string) => item.split("|"));
    const obj = pipeSplit.map((item: string[]) => {
      const name = events[item[0]] || dungeons[item[0]] || "Unknown";
      const realmCount = `${item[3]}/${item[1] === "Nexus" ? 200 : 85}`;

      return {
        eventId: item[0],
        realm: item[1],
        server: item[2],
        realmCount,
        unknownNumber: Number(item[4]),
        realmScore: Number(item[5]),
        spawnTime: item[6],
        uid: item[7],
        unknownBoolean: item[8] === "True",
        name,
      };
    });
    return obj;
  };

  return { items: items(), isLoading };
}

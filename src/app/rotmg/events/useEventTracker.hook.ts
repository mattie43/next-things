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
  realmCount: string;
  unknownNumber: number;
  realmScore: number;
  spawnTime: string;
  uid: string;
  unknownBoolean: boolean;
  name: string;
};

export default function useEventTracker() {
  const url = "https://realmstock.network/Notifier/EventHistory";

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, isValidating } = useSWR<TEventAPI>(url, fetcher, {
    refreshInterval: 10000,
  });

  const items: () => TEvent[] = () => {
    if (!data) return [];
    const lineSplit = data.value.split("\n");
    const pipeSplit = lineSplit.map((item: string) => item.split("|"));
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

  const topRealms = () => {
    const scores = {} as {
      [key: string]: {
        server: string;
        realm: string;
        score: number;
      };
    };
    items().forEach((item) => {
      if (!item.realmScore || item.realmScore <= 0) return;
      scores[`${item.server} ${item.realm}`] = {
        server: item.server,
        realm: item.realm,
        score: item.realmScore,
      };
    });
    const sortedScores = Object.values(scores).sort(
      (a, b) => b.score - a.score
    );
    return sortedScores;
  };

  return { topRealms: topRealms(), events: items(), isLoading, isValidating };
}

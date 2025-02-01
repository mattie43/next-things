import useSWR from "swr";
import { TDailyQuest } from "./dailyQuests.constants";

export const sortItems = [
  {
    id: "type",
    label: "Type",
  },
  {
    id: "alphabetical",
    label: "Alphabetical",
  },
  {
    id: "fame",
    label: "Fame",
  },
  {
    id: "difficulty",
    label: "Difficulty",
  },
];

const KEY = "rotmg-settings";

type TRotmgSettings = {
  showNames: boolean;
  showDifficulty: boolean;
  hideCompleted: boolean;
  crossedDungeons: string[];
  sortBy: {
    id: string;
    label: string;
  };
  showGuides: boolean;
  eventTrackerList: string[];
  dailyQuestList: TDailyQuest[];
  dailyDungeonList: string[];
};

const defaultSettings: TRotmgSettings = {
  showDifficulty: true,
  showNames: true,
  hideCompleted: false,
  crossedDungeons: [],
  sortBy: sortItems[0],
  showGuides: true,
  eventTrackerList: [],
  dailyQuestList: [],
  dailyDungeonList: [],
};

export default function useSettings() {
  const fetcher = (arg: string): Promise<TRotmgSettings> => {
    return new Promise((resolve) => {
      const item = localStorage.getItem(arg);
      if (item) {
        resolve(JSON.parse(item));
      } else {
        localStorage.setItem(arg, JSON.stringify(defaultSettings));
        resolve(defaultSettings as TRotmgSettings);
      }
    });
  };

  const { data, isLoading, mutate } = useSWR<TRotmgSettings>(KEY, fetcher);

  const settings = {
    showDifficulty: data?.showDifficulty ?? defaultSettings.showDifficulty,
    showNames: data?.showNames ?? defaultSettings.showNames,
    hideCompleted: data?.hideCompleted ?? defaultSettings.hideCompleted,
    crossedDungeons: data?.crossedDungeons ?? defaultSettings.crossedDungeons,
    sortBy: data?.sortBy ?? defaultSettings.sortBy,
    showGuides: data?.showGuides ?? defaultSettings.showGuides,
    eventTrackerList:
      data?.eventTrackerList ?? defaultSettings.eventTrackerList,
    dailyQuestList: data?.dailyQuestList ?? defaultSettings.dailyQuestList,
    dailyDungeonList:
      data?.dailyDungeonList ?? defaultSettings.dailyDungeonList,
  };

  const setSettings = (
    value: (currentData: TRotmgSettings) => TRotmgSettings
  ) => {
    mutate((currentData) => {
      const newValue = value(currentData as TRotmgSettings);
      localStorage.setItem(KEY, JSON.stringify(newValue));
      return newValue;
    }, false);
  };

  return { settings, setSettings, isLoading };
}

"use client";

import useSettings from "@/app/rotmg/useSettings.hook";
import Infobox from "../components/Infobox";
import SingleDaily from "../components/SingleDaily";

export default function page() {
  const { settings } = useSettings();
  const quests = settings.dailyQuestList;
  const showGuide = settings.showGuides;

  const info =
    "Select tinkerer dailies from the side panel to start tracking them. Clicking on a mark will 'mark' it as collected. Clicking on the 'X' will remove the quest from the list.";

  return (
    <div className="flex flex-col h-full w-full">
      {showGuide && <Infobox info={info} />}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2 px-4 p-4 overflow-auto w-full content-start flex-1">
        {quests?.map((quest, index) => (
          <SingleDaily key={quest.id} quest={quest} index={index} />
        ))}
      </div>
    </div>
  );
}

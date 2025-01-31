import { usePathname } from "next/navigation";
import MapPanel from "./MapPanel";
import DungeonsPanel from "./DungeonsPanel";
import EventsPanel from "./EventsPanel";
import DailiesPanel from "./DailiesPanel";

export default function SidePanel() {
  const path = usePathname();

  return (
    <div className="border-r-2 border-slate-500 flex flex-col flex-1 items-center p-4 gap-4 min-w-fit">
      {path === "/rotmg/dungeons" && <DungeonsPanel />}
      {path === "/rotmg/dailies" && <DailiesPanel />}
      {path === "/rotmg/map" && <MapPanel />}
      {path === "/rotmg/events" && <EventsPanel />}
    </div>
  );
}

import { usePathname } from "next/navigation";
import MapPanel from "./MapPanel";
import EventsPanel from "./EventsPanel";
import DailiesPanel from "./DailiesPanel";

export default function SidePanel() {
  const path = usePathname();

  if (path === "/rotmg/dungeons") return <></>;

  return (
    <div className="flex flex-col flex-1 p-2 border-r-2 border-slate-500">
      {path === "/rotmg/dailies" && <DailiesPanel />}
      {path === "/rotmg/map" && <MapPanel />}
      {path === "/rotmg/events" && <EventsPanel />}
    </div>
  );
}

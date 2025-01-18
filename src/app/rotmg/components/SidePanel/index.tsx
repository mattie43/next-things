import { usePathname } from "next/navigation";
import RotmgTabs from "./RotmgTabs";
import MapPanel from "./MapPanel";
import DungeonsPanel from "./DungeonsPanel";
import EventsPanel from "./EventsPanel";

export default function SidePanel() {
  const path = usePathname();

  return (
    <div className="h-screen border-r-2 border-slate-500 flex flex-col items-center p-4 gap-4 min-w-fit">
      <RotmgTabs />
      {path === "/rotmg/map" && <MapPanel />}
      {path === "/rotmg/dungeons" && <DungeonsPanel />}
      {path === "/rotmg/events" && <EventsPanel />}
    </div>
  );
}

import { Typography } from "@mui/material";
import { pastelColors } from "@/constants";
import useEventTracker from "../events/useEventTracker.hook";

export default function TopRealmScores() {
  const { topRealms } = useEventTracker();

  return (
    <div className="flex flex-col p-4 items-center">
      <Typography fontWeight={700}>Top Realm Scores</Typography>
      <div className="flex flex-wrap gap-1 justify-center">
        {topRealms?.map((realm, index) => (
          <Typography
            key={`${realm.server}-${realm.realm}`}
            variant="body2"
            fontSize="small"
            className="border-2 p-1"
            style={{
              borderColor: pastelColors[index % 5],
              color: pastelColors[index % 5],
            }}
          >
            {realm.server}-{realm.realm}: {realm.score}%
          </Typography>
        ))}
      </div>
    </div>
  );
}

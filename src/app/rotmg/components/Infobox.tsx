import { InfoOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

export default function Infobox({ info }: { info: string | ReactNode }) {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-4 w-full m-auto border-b-2 border-slate-500">
      <InfoOutlined fontSize="small" />
      <Typography fontSize="small" className="max-w-[980px]">
        {info}
      </Typography>
    </div>
  );
}

import { Button, CardHeader, CardTitle } from "@/ui";
import { openDialog } from "..";

export default function Header() {
  return (
    <CardHeader className="flex items-center justify-between">
      <CardTitle>header</CardTitle>
      <Button onClick={openDialog}>More</Button>
    </CardHeader>
  );
}

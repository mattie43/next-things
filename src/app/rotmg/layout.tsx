import { RotmgOptionsProvider } from "@/context/rotmgOptions.context";

export default function layout({ children }: any) {
  return <RotmgOptionsProvider>{children}</RotmgOptionsProvider>;
}

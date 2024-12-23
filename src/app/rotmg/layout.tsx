import RotmgToolbar from "./RotmgToolbar";

export default function layout({ children }: any) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* <RotmgToolbar /> */}
      {children}
    </div>
  );
}

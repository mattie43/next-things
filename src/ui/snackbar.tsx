export const Snackbar = (props: any) => {
  const { message, open } = props;

  return (
    <div
      className={`
        fixed bg-transparent text-foreground bottom-10 left-10 p-2 rounded-sm transition-all
        ${open ? "translate-x-0" : "translate-x-[-200%]"}
      `}
      // className={`
      //   bottom-10 left-10 p-2 m-0 bg-[var(--black)] text-[var(--white)] transition-all
      //   border-chart-1 border rounded flex gap-2 items-center
      //   translate-x-[${open ? "0" : "-200%"}]
      // `}
    >
      {message}
    </div>
  );
};

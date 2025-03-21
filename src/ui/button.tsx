export const Button = (props: any) => {
  const { children, variant, className, onClick } = props;

  const variants: { [key: string]: string } = {
    default: "bg-slate-600 active:shadow-lg rounded-sm",
    text: "bg-transparent",
    outline: "bg-transparent border-2 border-slate-600 rounded-sm",
    icon: "bg-slate-600 rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-fit p-1 cursor-pointer text-foreground hover:opacity-90 active:opacity-80
        ${variants[variant ? variant : "default"]}
        ${className ? className : ""}
      `}
    >
      {children}
    </button>
  );
};

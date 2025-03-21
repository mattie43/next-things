import { MyLinks } from "@/components/MyLinks";
import { Fragment } from "react";
import { pastelColors } from "@/constants";
import Link from "next/link";

const body = "Hi.";
const body2 = "My name is Matt Ericksen.";
const body3 = "This is where I put things that I build.";
const links = [
  {
    text: "null",
    route: "/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen px-[10vw] gap-6 text-2xl">
      <p>{body}</p>
      <p>{body2}</p>
      <p>{body3}</p>
      <div className="flex w-fit gap-2.5">
        {links.map((item, i) => (
          <Fragment key={i}>
            <Link
              href={item.route}
              style={{
                color: pastelColors[i % pastelColors.length],
              }}
            >
              {item.text}
            </Link>
            <span hidden={i === links.length - 1}>•</span>
          </Fragment>
        ))}
      </div>
      <MyLinks />
    </div>
  );
}

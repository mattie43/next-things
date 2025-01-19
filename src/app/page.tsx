import { MyLinks } from "@/app/home/MyLinks";
import { body, body2, body3, links } from "@/app/home/homeText.constants";
import { Fragment } from "react";
import { pastelColors } from "@/constants";
import Link from "next/link";

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
                color: pastelColors[i % 5],
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

import { MyLinks } from "@/app/home/MyLinks";
import { body, body2, body3 } from "@/app/home/homeText.constants";
import Link from "next/link";

export default function Home() {
    return (
        <div className="home">
            <p>{body}</p>
            <p>{body2}</p>
            <div className="body3">
                {body3.map((item, i) => (
                    <Link key={i} href={item.route}>
                        {item.text}
                    </Link>
                ))}
            </div>
            {<MyLinks />}
        </div>
    );
}

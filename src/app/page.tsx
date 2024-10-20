import { MyLinks } from "@/components";
import { body, body2, body3 } from "@/constants";
import Link from "next/link";

export default function Home() {
    return (
        <div>
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

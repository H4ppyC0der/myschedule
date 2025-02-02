import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ buttonText, pageLink, organizationLogo }) => {
    return (
        <nav className="px-4 py-2 border-b-[1px] mb-4">
            <ul className="grid grid-cols-3 gap-3">
                <li className="text-2xl font-thin relative text-left ">
                    <Link href="/">
                        <Image
                            layout={"fill"}
                            objectFit={"contain"}
                            src={organizationLogo}
                            alt="Organization Logo"
                        />
                    </Link>
                </li>
                <li></li>
                <li className="text-right">
                    <Link href={pageLink}>
                        <button className="hover:bg-slate-100 text-sm border-[1px] rounded-sm px-2 py-1">
                            {buttonText}
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

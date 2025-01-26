import React from "react";
import Link from "next/link";
import Timezone from "../timezone/Timezone";

const Nav = () => {
    return (
        <nav className="px-4 py-2 flex justify-end">
            <ul className="grid grid-cols-4 md:grid-cols-10 gap-3">
                <li className=" col-span-2 md:col-span-8"></li>
                <li className="col-span-1 text-right">
                    <Link href={"/dashboard"}>
                        <button className="hover:text-emerald-700 text-sm">
                            Login
                        </button>
                    </Link>
                </li>
                <li className="col-span-1 text-left">
                    <button className="hover:text-emerald-700 text-sm">
                        Signup
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

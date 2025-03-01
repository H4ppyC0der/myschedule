"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAgentStore } from "@/store/agent-store";
import { MagnifyingGlass, Oval } from "react-loader-spinner";
import { usersData } from "@/data/data";

const Search = () => {
    const { agents, setFilter } = useAgentStore();
    const [cancelSearchDisplay, setCancelSearchDisplay] = useState("hidden");
    const [searchWord, setSearchWord] = useState("");
    const [listDisplay, setListDisplay] = useState("hidden");

    const handleSearch = (e) => {
        setSearchWord(e.target.value);
        setCancelSearchDisplay("block");
        setListDisplay("block");
    };

    const setFilteFn = (e) => {
        setFilter(e);
        setListDisplay("hidden");
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 my-2">
            <div className="relative">
                <IoIosCloseCircleOutline
                    onClick={() => {
                        setSearchWord(""), setCancelSearchDisplay("hidden");
                    }}
                    className={`${cancelSearchDisplay} absolute right-4 text-lg top-2 z-40`}
                />
                <input
                    className="border-slate-200 w-full rounded-full py-1 px-4 bg-slate-100 relative focus:outline-slate-200"
                    placeholder="Search"
                    value={searchWord}
                    onChange={(e) => handleSearch(e)}
                    type="text"
                />
                {searchWord && (
                    <ul
                        className={`${listDisplay} absolute bg-slate-100 left-0 top-9 border-[1px] divide-y-[1px] divide-slate-200 rounded-md  w-full z-50 h-fit max-h-50dvh overflow-y-auto`}
                    >
                        {usersData.schedule.filter(
                            (agent) =>
                                agent.firstName
                                    .toLowerCase()
                                    .includes(searchWord.toLowerCase()) ||
                                agent.lastName
                                    .toLowerCase()
                                    .includes(searchWord.toLowerCase())
                        ).length === 0 ? (
                            <li className="py-2 px-4">No results found</li>
                        ) : (
                            usersData.schedule
                                .filter(
                                    (agent) =>
                                        agent.firstName
                                            .toLowerCase()
                                            .includes(
                                                searchWord.toLowerCase()
                                            ) ||
                                        agent.lastName
                                            .toLowerCase()
                                            .includes(searchWord.toLowerCase())
                                )
                                .map((agent) => (
                                    <li
                                        key={agent.id}
                                        className="hover:cursor-pointer hover:bg-slate-200 py-2 px-4 text-sm"
                                        value={agent.id}
                                        onClick={(e) =>
                                            setFilteFn(e.target.value)
                                        }
                                    >
                                        {agent.lastName +
                                            ", " +
                                            agent.firstName}
                                    </li>
                                ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;

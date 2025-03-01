"use client";
import React, { useEffect, useState } from "react";
import { useAgentStore } from "@/store/agent-store";
import AgentSchedule from "@/components/agent-schedule/AgentSchedule";
import AgentName from "@/components/agent-name/AgentName";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useCalendarStore } from "@/store/calendar-store";
import { usersData } from "@/data/data";
import Timezone from "../timezone/Timezone";

const Calendar = () => {
    const {
        currentFilter,
        page,
        addPage,
        minusPage,
        prevAgentData,
        nextAgentData,
        setColumn,
        column,
    } = useAgentStore();
    const { month, year, increaseMonth, decreaseMonth } = useCalendarStore();
    useEffect(() => {
        column ? column : setColumn(window.innerWidth < 1024 ? 2 : 6);
    }, []);
    const nextArrow = currentFilter
        ? usersData.schedule.filter(
              (agent) =>
                  String(agent.id) === String(currentFilter) ||
                  String(agent.client) === String(currentFilter)
          ).length -
              page <=
              column ||
          usersData.schedule.filter(
              (agent) =>
                  String(agent.id) === String(currentFilter) ||
                  String(agent.client) === String(currentFilter)
          ).length < column
            ? "cursor-not-allowed"
            : "cursor-pointer"
        : usersData.schedule.length - page <= column ||
          usersData.schedule.length < column
        ? "cursor-not-allowed"
        : "cursor-pointer";
    const backArrow = page <= 0 ? "cursor-not-allowed" : "cursor-pointer";
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="mt-5">
            <div className="flex justify-end mb-2">
                <Timezone />
            </div>
            <div className="grid grid-cols-5 items-center h-12 border-b-[1px] border-t-[1px]">
                <IoIosArrowRoundBack
                    onClick={() => {
                        decreaseMonth();
                    }}
                    className=" justify-self-end hover:cursor-pointer border-[1px] border-slate-300 rounded-full w-8 h-8 col-span-1  md:col-span-2 font-bold text-2xl text-slate-800 hover:shadow-2xl hover:bg-slate-100"
                />
                <h1 className="text-center font-bold text-xl col-span-3 md:col-span-1 select-none ">
                    {months[month] + ", " + year}
                </h1>
                <IoIosArrowRoundForward
                    onClick={() => {
                        increaseMonth();
                    }}
                    className="justify-self-start hover:cursor-pointer w-8 h-8 border-[1px] border-slate-300  rounded-full col-span-1 md:col-span-2 font-bold text-2xl text-slate-800 hover:shadow-2xl hover:bg-slate-100"
                />
            </div>
            <div className="text-sm relative">
                <button
                    className={`hover:${backArrow} absolute top-2 font-bold text-xl text-slate-${
                        backArrow == "cursor-pointer" ? 950 : 400
                    }`}
                    onClick={() => {
                        minusPage();
                        prevAgentData();
                    }}
                    disabled={backArrow == "cursor-not-allowed"}
                >
                    <IoIosArrowBack />
                </button>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mr-0 lg:mr-4">
                    {currentFilter
                        ? usersData.schedule
                              .filter(
                                  (agent) =>
                                      String(agent.id) ===
                                          String(currentFilter) ||
                                      String(agent.client) ===
                                          String(currentFilter)
                              )
                              .slice(page, page + column)
                              .map((user) => (
                                  <AgentName key={user.id} data={user} />
                              ))
                        : usersData.schedule
                              .map((user) => (
                                  <AgentName key={user.id} data={user} />
                              ))
                              .slice(page, page + column)}
                </div>
                <button
                    className={`absolute hover:${nextArrow} right-1 top-2  font-bold text-xl text-slate-${
                        nextArrow == "cursor-pointer" ? 950 : 400
                    }`}
                    onClick={() => {
                        addPage();
                        nextAgentData();
                    }}
                    disabled={nextArrow == "cursor-not-allowed"}
                >
                    <IoIosArrowForward />
                </button>
                <div className="h-[85dvh] overflow-y-auto grid grid-cols-2 md:grid-cols-6 gap-2">
                    {currentFilter
                        ? usersData.schedule
                              .filter(
                                  (agent) =>
                                      String(agent.id) ===
                                          String(currentFilter) ||
                                      String(agent.client) ===
                                          String(currentFilter)
                              )
                              .slice(page, page + column)
                              .map((user) => (
                                  <AgentSchedule key={user.id} data={user} />
                              ))
                        : usersData.schedule
                              .slice(page, page + column)
                              .map((user) => (
                                  <AgentSchedule key={user.id} data={user} />
                              ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;

import React from "react";
import { DateTime, Settings, Duration } from "luxon";

const Daily = ({ data, day, month, year, dayOff, currentTimezone }) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const startDate = Date.UTC(
        data[0].startDate.split("/")[0],
        data[0].startDate.split("/")[1],
        data[0].startDate.split("/")[2]
    );
    const endDate = Date.UTC(
        data[0].endDate.split("/")[0],
        data[0].endDate.split("/")[1],
        data[0].endDate.split("/")[2]
    );
    const utcNow = Date.UTC(year, month, day);
    const breakDuration = 30;
    const duration = Duration.fromObject({ minutes: breakDuration });

    const estTime = DateTime.fromObject(
        {
            hour: data[0].offTime,
            day,
            month,
            year,
        },
        { zone: "America/New_York" }
    );

    return utcNow >= startDate && utcNow <= endDate ? (
        dayOff.includes(estTime.toFormat("cccc")) ? (
            <ul className="text-center text-sm py-2">
                <li className="bg-slate-100 text-slate-100">0</li>
                <li className="border-b-[1px] font-semibold">
                    {DateTime.fromISO(estTime)
                        .setZone(currentTimezone)
                        .toFormat("ccc") +
                        ", " +
                        DateTime.fromISO(estTime)
                            .setZone(currentTimezone)
                            .toFormat("DD")}
                </li>
                <li className="bg-slate-900 text-slate-100 font-bold">OFF</li>
                <li className="bg-slate-100 text-slate-100">0</li>
            </ul>
        ) : (
            <ul className="text-center text-sm py-2">
                <li className="border-b-[1px] font-semibold">
                    {DateTime.fromISO(estTime)
                        .setZone(currentTimezone)
                        .toFormat("ccc") +
                        ", " +
                        DateTime.fromISO(estTime)
                            .setZone(currentTimezone)
                            .toFormat("DD")}
                </li>
                <li className="bg-lime-200">
                    {DateTime.fromObject(
                        {
                            hour: data[0][estTime.toFormat("cccc")]?.in,
                            day,
                            month,
                            year,
                        },
                        { zone: "America/New_York" }
                    )
                        .setZone(currentTimezone)
                        .toLocaleString(DateTime.TIME_SIMPLE) +
                        " - " +
                        DateTime.fromObject(
                            {
                                minute:
                                    data[0][estTime.toFormat("cccc")].break +
                                    ": " +
                                    data[0][estTime.toFormat("cccc")].break
                                        .toString()
                                        .includes(":")
                                        ? data[0][
                                              estTime.toFormat("cccc")
                                          ].break.split(":")[1]
                                        : data[0][estTime.toFormat("cccc")]
                                              .break,
                                hour:
                                    data[0][estTime.toFormat("cccc")].break +
                                    ": " +
                                    data[0][estTime.toFormat("cccc")].break
                                        .toString()
                                        .includes(":")
                                        ? data[0][
                                              estTime.toFormat("cccc")
                                          ].break.split(":")[0]
                                        : data[0][estTime.toFormat("cccc")]
                                              .break,
                                day,

                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                            .setZone(currentTimezone)
                            .toLocaleString(DateTime.TIME_SIMPLE)}
                </li>
                <li className="bg-green-500 text-slate-100 font-semibold">
                    BREAK ({breakDuration} minutes)
                </li>
                <li className="bg-lime-200">
                    {DateTime.fromObject(
                        {
                            hour: data[0][
                                estTime.toFormat("cccc")
                            ].break.includes(":")
                                ? data[0][estTime.toFormat("cccc")].break.split(
                                      ":"
                                  )[0]
                                : data[0][estTime.toFormat("cccc")].break,
                            minute: data[0][
                                estTime.toFormat("cccc")
                            ].break.includes(":")
                                ? data[0][estTime.toFormat("cccc")].break.split(
                                      ":"
                                  )[1]
                                : "00",
                            day,
                            month,
                            year,
                        },
                        { zone: "America/New_York" }
                    )
                        .setZone(currentTimezone)
                        .plus(duration)
                        .toLocaleString(DateTime.TIME_SIMPLE) +
                        " - " +
                        DateTime.fromObject(
                            {
                                hour: data[0][estTime.toFormat("cccc")].out,
                                day,
                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                            .setZone(currentTimezone)
                            .toLocaleString(DateTime.TIME_SIMPLE)}
                </li>
            </ul>
        )
    ) : (
        <ul className="text-center text-sm py-2">
            <li className="bg-slate-100 text-slate-100">0</li>
            <li className="border-b-[1px] font-semibold">
                {DateTime.fromObject(
                    {
                        hour: data[0][estTime.toFormat("cccc")].in,
                        day,
                        month,
                        year,
                    },
                    { zone: "America/New_York" }
                )
                    .setZone(currentTimezone)
                    .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
            </li>
            <li className=" text-slate-400 italic">No data</li>
            <li className="bg-slate-100 text-slate-100">0</li>
        </ul>
    );
};

export default Daily;

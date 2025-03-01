import React from "react";
import { DateTime, Settings, Duration } from "luxon";
import { getCorrectSchedule } from "@/helpers/getCorrectSchedule";

const Daily = ({ data, day, month, year, currentTimezone }) => {
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

    let schedule = getCorrectSchedule(data, day, month, year, currentTimezone);
    const duration = Duration.fromObject({
        minutes: schedule ? schedule.breakDuration : 0,
    });
    let isDSTFrozen = schedule
        ? DateTime.fromObject(
              {
                  hour: schedule.offTime,
                  day,
                  month,
                  year,
              },
              { zone: "America/New_York" }
          ).isInDST && schedule.isDSTFrozen
        : false;
    let dstValue = isDSTFrozen
        ? Duration.fromObject({ hours: 1 })
        : Duration.fromObject({ hours: 0 });

    return schedule ? (
        schedule.dayOff.includes(
            DateTime.fromObject(
                {
                    hour: schedule.offTime,
                    day,
                    month,
                    year,
                },
                { zone: "America/New_York" }
            ).toFormat("cccc")
        ) ? (
            <ul className="text-center text-sm py-2">
                <li className="bg-slate-100 text-slate-100">0</li>
                <li className="border-b-[1px] font-semibold">
                    {DateTime.fromISO(
                        DateTime.fromObject(
                            {
                                hour: schedule.offTime,
                                day,
                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                    )
                        .setZone(currentTimezone)
                        .toFormat("ccc") +
                        ", " +
                        DateTime.fromISO(
                            DateTime.fromObject(
                                {
                                    hour: schedule.offTime,
                                    day,
                                    month,
                                    year,
                                },
                                { zone: "America/New_York" }
                            )
                        )
                            .setZone(currentTimezone)
                            .toFormat("DD")}
                </li>
                <li className="bg-slate-900 text-slate-100 font-bold rounded-sm">
                    OFF
                </li>
                <li className="bg-slate-100 text-slate-100">0</li>
            </ul>
        ) : (
            <ul className="text-center text-sm py-2">
                <li className="border-b-[1px] font-semibold">
                    {DateTime.fromISO(
                        DateTime.fromObject(
                            {
                                hour: schedule.offTime,
                                day,
                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                    )
                        .setZone(currentTimezone)
                        .toFormat("ccc") +
                        ", " +
                        DateTime.fromISO(
                            DateTime.fromObject(
                                {
                                    hour: schedule.offTime,
                                    day,
                                    month,
                                    year,
                                },
                                { zone: "America/New_York" }
                            )
                        )
                            .setZone(currentTimezone)
                            .toFormat("DD")}
                </li>
                <li className="bg-lime-200 rounded-sm">
                    {DateTime.fromObject(
                        {
                            hour: schedule[
                                DateTime.fromObject(
                                    {
                                        hour: schedule.offTime,
                                        day,
                                        month,
                                        year,
                                    },
                                    { zone: "America/New_York" }
                                ).toFormat("cccc")
                            ]?.in,
                            day,
                            month,
                            year,
                        },
                        { zone: "America/New_York" }
                    )
                        .setZone(currentTimezone)
                        .plus(dstValue)
                        .toLocaleString(DateTime.TIME_SIMPLE) +
                        " - " +
                        DateTime.fromObject(
                            {
                                minute:
                                    schedule[
                                        DateTime.fromObject(
                                            {
                                                hour: schedule.offTime,
                                                day,
                                                month,
                                                year,
                                            },
                                            { zone: "America/New_York" }
                                        ).toFormat("cccc")
                                    ].break +
                                    ": " +
                                    schedule[
                                        DateTime.fromObject(
                                            {
                                                hour: schedule.offTime,
                                                day,
                                                month,
                                                year,
                                            },
                                            { zone: "America/New_York" }
                                        ).toFormat("cccc")
                                    ].break
                                        .toString()
                                        .includes(":")
                                        ? schedule[
                                              DateTime.fromObject(
                                                  {
                                                      hour: schedule.offTime,
                                                      day,
                                                      month,
                                                      year,
                                                  },
                                                  { zone: "America/New_York" }
                                              ).toFormat("cccc")
                                          ].break.split(":")[1]
                                        : schedule[
                                              DateTime.fromObject(
                                                  {
                                                      hour: schedule.offTime,
                                                      day,
                                                      month,
                                                      year,
                                                  },
                                                  { zone: "America/New_York" }
                                              ).toFormat("cccc")
                                          ].break,
                                hour:
                                    schedule[
                                        DateTime.fromObject(
                                            {
                                                hour: schedule.offTime,
                                                day,
                                                month,
                                                year,
                                            },
                                            { zone: "America/New_York" }
                                        ).toFormat("cccc")
                                    ].break +
                                    ": " +
                                    schedule[
                                        DateTime.fromObject(
                                            {
                                                hour: schedule.offTime,
                                                day,
                                                month,
                                                year,
                                            },
                                            { zone: "America/New_York" }
                                        ).toFormat("cccc")
                                    ].break
                                        .toString()
                                        .includes(":")
                                        ? schedule[
                                              DateTime.fromObject(
                                                  {
                                                      hour: schedule.offTime,
                                                      day,
                                                      month,
                                                      year,
                                                  },
                                                  { zone: "America/New_York" }
                                              ).toFormat("cccc")
                                          ].break.split(":")[0]
                                        : schedule[
                                              DateTime.fromObject(
                                                  {
                                                      hour: schedule.offTime,
                                                      day,
                                                      month,
                                                      year,
                                                  },
                                                  { zone: "America/New_York" }
                                              ).toFormat("cccc")
                                          ].break,
                                day,

                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                            .setZone(currentTimezone)
                            .plus(dstValue)
                            .toLocaleString(DateTime.TIME_SIMPLE)}
                </li>
                <li className="bg-green-500 text-slate-100 rounded-sm font-semibold">
                    BREAK ({schedule.breakDuration} minutes)
                </li>
                <li className="bg-lime-200 rounded-sm">
                    {DateTime.fromObject(
                        {
                            hour: schedule[
                                DateTime.fromObject(
                                    {
                                        hour: schedule.offTime,
                                        day,
                                        month,
                                        year,
                                    },
                                    { zone: "America/New_York" }
                                ).toFormat("cccc")
                            ].break.includes(":")
                                ? schedule[
                                      DateTime.fromObject(
                                          {
                                              hour: schedule.offTime,
                                              day,
                                              month,
                                              year,
                                          },
                                          { zone: "America/New_York" }
                                      ).toFormat("cccc")
                                  ].break.split(":")[0]
                                : schedule[
                                      DateTime.fromObject(
                                          {
                                              hour: schedule.offTime,
                                              day,
                                              month,
                                              year,
                                          },
                                          { zone: "America/New_York" }
                                      ).toFormat("cccc")
                                  ].break,
                            minute: schedule[
                                DateTime.fromObject(
                                    {
                                        hour: schedule.offTime,
                                        day,
                                        month,
                                        year,
                                    },
                                    { zone: "America/New_York" }
                                ).toFormat("cccc")
                            ].break.includes(":")
                                ? schedule[
                                      DateTime.fromObject(
                                          {
                                              hour: schedule.offTime,
                                              day,
                                              month,
                                              year,
                                          },
                                          { zone: "America/New_York" }
                                      ).toFormat("cccc")
                                  ].break.split(":")[1]
                                : "00",
                            day,
                            month,
                            year,
                        },
                        { zone: "America/New_York" }
                    )
                        .setZone(currentTimezone)
                        .plus(duration + dstValue)
                        .toLocaleString(DateTime.TIME_SIMPLE) +
                        " - " +
                        DateTime.fromObject(
                            {
                                hour: schedule[
                                    DateTime.fromObject(
                                        {
                                            hour: schedule.offTime,
                                            day,
                                            month,
                                            year,
                                        },
                                        { zone: "America/New_York" }
                                    ).toFormat("cccc")
                                ].out,
                                day,
                                month,
                                year,
                            },
                            { zone: "America/New_York" }
                        )
                            .setZone(currentTimezone)
                            .plus(dstValue)
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
                        hour: "00",
                        day,
                        month,
                        year,
                    },
                    { zone: "America/New_York" }
                )
                    .setZone(currentTimezone)
                    .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
            </li>
            <li className=" text-slate-400 rounded-sm italic">No data</li>
            <li className="bg-slate-100 text-slate-100">0</li>
        </ul>
    );
};

export default Daily;

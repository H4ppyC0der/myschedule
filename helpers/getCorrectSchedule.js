import { DateTime } from "luxon";

export function getCorrectSchedule(
    schedules,
    day,
    month,
    year,
    currentTimezone
) {
    let index = 0;
    let startDate = DateTime.fromObject(
        {
            hour: schedules[index].offTime,
            day: schedules[index].startDate.split("/")[2],
            month: schedules[index].startDate.split("/")[1],
            year: schedules[index].startDate.split("/")[0],
        },
        { zone: "America/New_York" }
    );
    let endDate = DateTime.fromObject(
        {
            hour: schedules[index].offTime,
            day: schedules[index].endDate.split("/")[2],
            month: schedules[index].endDate.split("/")[1],
            year: schedules[index].endDate.split("/")[0],
        },
        { zone: "America/New_York" }
    );
    const currentTime = DateTime.fromObject(
        {
            hour: schedules[index].offTime,
            day,
            month,
            year,
        },
        { zone: "America/New_York" }
    );
    while (index < schedules.length) {
        if (currentTime >= startDate && currentTime <= endDate) {
            break;
        } else {
            index++;
            if (
                (index >= schedules.length && currentTime > endDate) ||
                (index >= schedules.length && currentTime < startDate)
            ) {
                return;
            } else {
                startDate = DateTime.fromObject(
                    {
                        hour: schedules[index].offTime,
                        day: schedules[index].startDate.split("/")[2],
                        month: schedules[index].startDate.split("/")[1],
                        year: schedules[index].startDate.split("/")[0],
                    },
                    { zone: "America/New_York" }
                );
                endDate = DateTime.fromObject(
                    {
                        hour: schedules[index].offTime,
                        day: schedules[index].endDate.split("/")[2],
                        month: schedules[index].endDate.split("/")[1],
                        year: schedules[index].endDate.split("/")[0],
                    },
                    { zone: "America/New_York" }
                );
            }
        }
    }

    return schedules[index];
}

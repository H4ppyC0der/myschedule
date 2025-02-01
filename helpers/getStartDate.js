import { DateTime } from "luxon";
export function getStartDate(givenData) {
    return DateTime.fromObject(
        {
            hour: givenData[0].offTime,
            day: givenData[0].startDate.split("/")[2],
            month: givenData[0].startDate.split("/")[1],
            year: givenData[0].startDate.split("/")[0],
        },
        { zone: "America/New_York" }
    );
}

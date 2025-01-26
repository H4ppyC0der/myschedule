"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCalendarStore } from "@/store/calendar-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function Timezone() {
    const { currentTimezone, setCurrentTimezone } = useCalendarStore();
    const [open, setOpen] = React.useState(false);
    // const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen} className="text-xs">
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {currentTimezone.split("/")[0] +
                        ": " +
                        currentTimezone.split("/")[1].replaceAll("_", " ")}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search timezone..." />
                    <CommandList>
                        <CommandEmpty>No Timezone found.</CommandEmpty>
                        <CommandGroup>
                            {Intl.supportedValuesOf("timeZone").map(
                                (timezone) => (
                                    <CommandItem
                                        key={timezone}
                                        value={timezone.replaceAll("_", " ")}
                                        onSelect={(currentValue) => {
                                            // setValue("");
                                            setCurrentTimezone(
                                                currentValue.replaceAll(
                                                    " ",
                                                    "_"
                                                )
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                currentTimezone === timezone
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {timezone.split("/")[0] +
                                            ": " +
                                            timezone
                                                .split("/")[1]
                                                .replaceAll("_", " ")}
                                    </CommandItem>
                                )
                            )}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

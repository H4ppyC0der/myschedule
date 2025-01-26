"use client";
import React from "react";
import { useAgentStore } from "@/store/agent-store";
import { usersData } from "@/data/data";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RadioFilter = () => {
    const {
        column,
        setFilter,
        clearFilter,
        currentFilter,
        setAgents,
        cleaPage,
    } = useAgentStore();
    return (
        // <div className="flex gap-5 text-sm">
        //     <div className="flex flex-row align-middle gap-1">
        //         <input
        //             type="radio"
        // id="all"
        // name="lob"
        // value="all"
        // checked={!currentFilter}
        // onClick={(e) => {
        //     clearFilter();
        //     setAgents(usersData.schedule.slice(0, column));
        // }}
        //         />
        //         <label htmlFor="all">All</label>
        //     </div>
        //     <div className="flex flex-row align-middle gap-1">
        //         <input
        //             type="radio"
        //
        //         />
        //         <label htmlFor="leads">Leads</label>
        //     </div>
        //     <div className="flex flex-row align-middle gap-1">
        //         <input
        //             type="radio"
        //
        //         />
        //         <label htmlFor="shared">Shared</label>
        //     </div>
        //     <div className="flex flex-row align-middle gap-1">
        //         <input
        //             type="radio"
        //
        //         />
        //         <label htmlFor="demant">Demant</label>
        //     </div>
        // </div>
        <RadioGroup defaultValue="option-one" className="text-xs">
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    id="all"
                    value="all"
                    checked={!currentFilter}
                    onClick={(e) => {
                        clearFilter();
                        setAgents(usersData.schedule.slice(0, column));
                    }}
                />
                <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    id="leads"
                    value="leads"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        cleaPage();
                    }}
                />
                <Label htmlFor="leads">Leads</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    id="shared"
                    value="shared"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        cleaPage();
                    }}
                />
                <Label htmlFor="shared">Shared</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    id="demant"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        cleaPage();
                    }}
                    value="demant"
                />
                <Label htmlFor="demant">Demant</Label>
            </div>
        </RadioGroup>
    );
};

export default RadioFilter;

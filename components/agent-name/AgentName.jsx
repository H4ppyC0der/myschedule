import React from "react";

const AgentName = ({ data }) => {
    return (
        <div className="text-center shadow-md p-2 shadow-slate-300">
            <p className="text-sm font-semibold">
                {data.lastName + ", " + data.firstName}
            </p>
            <p className="text-xs">
                ({data.client.charAt(0).toUpperCase() + data.client.slice(1)})
            </p>
        </div>
    );
};

export default AgentName;

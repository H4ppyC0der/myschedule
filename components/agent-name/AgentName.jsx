import React from "react";

const AgentName = ({ data }) => {
    return (
        <div className="text-center shadow-lg p-2 shadow-slate-300">
            {data.lastName + ", " + data.firstName}
        </div>
    );
};

export default AgentName;

import React from "react";

const UserTable = () => {
    return (
        <table className="w-full h-fit text-center border-collapse">
            <thead>
                <tr className="border">
                    <th>SEQUENCE</th>
                    <th>PICTURE</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>LOB</th>
                    <th>CLIENT</th>
                    <th>IN</th>
                    <th>BREAK</th>
                    <th>OUT</th>
                </tr>
            </thead>

            <tbody>
                <tr className="border hover:bg-slate-100">
                    <td>1</td>
                    <td>image</td>
                    <td>Chris</td>
                    <td>Rodriguez</td>
                    <td>BPO</td>
                    <td>Demant</td>
                    <td>4:00 pm / 12:00pm</td>
                    <td>8:00 pm</td>
                    <td>12:00 am / 8:00 pm</td>
                </tr>
                <tr className="border hover:bg-slate-100">
                    <td>1</td>
                    <td>image</td>
                    <td>Chris</td>
                    <td>Rodriguez</td>
                    <td>BPO</td>
                    <td>Demant</td>
                    <td>4:00 pm / 12:00pm</td>
                    <td>8:00 pm</td>
                    <td>12:00 am / 8:00 pm</td>
                </tr>
                <tr className="border hover:bg-slate-100">
                    <td>1</td>
                    <td>image</td>
                    <td>Chris</td>
                    <td>Rodriguez</td>
                    <td>BPO</td>
                    <td>Demant</td>
                    <td>4:00 pm / 12:00pm</td>
                    <td>8:00 pm</td>
                    <td>12:00 am / 8:00 pm</td>
                </tr>
                <tr className="border hover:bg-slate-100">
                    <td>1</td>
                    <td>image</td>
                    <td>Chris</td>
                    <td>Rodriguez</td>
                    <td>BPO</td>
                    <td>Demant</td>
                    <td>4:00 pm / 12:00pm</td>
                    <td>8:00 pm</td>
                    <td>12:00 am / 8:00 pm</td>
                </tr>
                <tr className="border hover:bg-slate-100">
                    <td>1</td>
                    <td>image</td>
                    <td>Chris</td>
                    <td>Rodriguez</td>
                    <td>BPO</td>
                    <td>Demant</td>
                    <td>4:00 pm / 12:00pm</td>
                    <td>8:00 pm</td>
                    <td>12:00 am / 8:00 pm</td>
                </tr>
            </tbody>
        </table>
    );
};

export default UserTable;

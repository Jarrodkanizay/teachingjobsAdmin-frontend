import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    useGetJobQtyAgentQuery,
} from "../store/apiSlice";
import { useSelector, useDispatch } from "react-redux";
const JobLoadingActivity = () => {
    const { data, isLoading, isSuccess } = useGetJobQtyAgentQuery();
    return (
        <div className="max-w-4xl  mx-auto table-auto  flex flex-col gap-4 justify-center items-center">
            <p className="text-2xl underline font-extrabold">Jobs Loading Activity</p>
            <table className="border border-collapse border-gray-400">
                <thead>
                    <tr>
                        <th className="border p-2">Agent</th>
                        <th className="border p-2">Today</th>
                    </tr>
                </thead>
                {data?.list &&
                    <tbody>
                        <tr key={-1} className="border">
                            <td className="border p-2">{`TOTAL`}</td>
                            <td className="border p-2">{data.total}</td>
                        </tr>
                        {data.list.map(({ postedBy, firstName, lastName, JobsCreated }, i) => (
                            <tr key={i} className="border">
                                <td className="border p-2">{`${firstName} ${lastName}`}</td>
                                <td className="border p-2">{JobsCreated}</td>
                            </tr>
                        ))}
                    </tbody>}
            </table>
        </div>
    )
};
export default JobLoadingActivity;

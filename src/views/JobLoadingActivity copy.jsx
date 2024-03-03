import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    useGetJobQtyAgentQuery,
} from "../store/apiSlice";
import { useSelector, useDispatch } from "react-redux";
const UsersTask = () => {
    const { data, isLoading, isSuccess } = useGetJobQtyAgentQuery();
    return (
        <table className="flex flex-col  gap-2  w-full">
          
                {
                    data &&
                    data.map(({ postedBy, JobsCreated }, i) => (
                        <div
                            className="flex justify-start gap-2   "
                            key={i}
                        >
                            < div className="w-[150px]   " >{postedBy}</div>
                            < div className="w-[50px]   " >{JobsCreated}</div>
                        </div>
                    ))
                }
            </table>
     )
};
export default UsersTask;

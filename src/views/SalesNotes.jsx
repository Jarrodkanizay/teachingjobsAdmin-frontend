import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    useGetSalesNotesQuery,
    useAddSalesNotesMutation,
} from "../store/apiSlice"
import AddSalesNotes from './AddSalesNotes'
const MostRecentQA = ({ id }) => {
    console.log('MostRecentQA')
    
    useEffect(() => {
        console.log('MostRecentQA is running times')
    }, [])
    
    const dispatch = useDispatch()
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetSalesNotesQuery({ id })
    let content
    if (isLoading) {
        content = <p>Loading...</p>
    }
    if (isError) {
        content = <p>No sales notes found...</p>
    }
    if (isSuccess && data?.length > 0) {
        console.log("data", data)
        content = data.map(({ date, note, actionBy, actionDate, writtenBy }, key) => (
            <div
                className=' border rounded'
                key={key}
            >
                <div className="w-full flex justify-between  text-left text-xs font-bold">
                    <div>Date: &nbsp;
                        {new Date(date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        })}</div>
                    <div>
                        Follow-up By: &nbsp; {actionBy}
                    </div>
                    <div>
                        Follow-up Date: &nbsp; {actionDate && new Date(actionDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </div>
                    <div>Written By:  &nbsp; {writtenBy}</div>
                </div>
                <div className="w-full text-left">{note}</div>
            </div>
        ))
    }
    return <div className='flex flex-col gap-3 w-full overflow-y-auto  h-full'>
        <AddSalesNotes id={id } />
        {content}
    </div>
}
export default MostRecentQA

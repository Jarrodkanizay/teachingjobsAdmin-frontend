import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    useGetSalesNotesQuery,
    useAddSalesNotesMutation,
} from "../store/apiSlice"
const MostRecentQA = ({ id }) => {
    console.log('MostRecentQA')
    const newSalesNotes = useRef()
    useEffect(() => {
        console.log('MostRecentQA is running times')
    }, [])
    const [AddSalesNotes] = useAddSalesNotesMutation()
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
    if (isSuccess && data?.length>0) {
        console.log("data",data)
        content = data.map(({ date, note }, key) => (
            <div
                className=' border rounded'
                key={key}
            >
                <div className="w-full text-left font-bold">
                    Date: &nbsp;
                    {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}
                </div>
                <div className="w-full text-left">{note}</div>
            </div>
        ))
    }
    return <div className='w-full overflow-y-auto  h-full'>
        <button
            className='btn btn-primary'
            onClick={() => {
                if (newSalesNotes.current.value) {
                    AddSalesNotes({ employer_id: id, note: newSalesNotes.current.value })
                }
                
        }}
        >Add New Sales Notes</button>
        <textarea
            ref={newSalesNotes}
            id="description-input"
            name="07_Nominee_Description"
            className="w-full px-4 py-3 0 border border-black  rounded-lg text-black focus:outline-none focus:border-orange-500"
            placeholder="Please write sales notes here"
           
        />
        {content}
    </div>
}
export default MostRecentQA

import React, { useState, useEffect, useRef } from "react"
import {
    useAddSalesNotesMutation,
} from "../store/apiSlice"
import { useForm, useWatch } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
const AddSalesNotes = ({ id }) => {
    console.log("=====AddSalesNotes==========")
    const userInfo = useSelector((state) => state.auth.userInfo);
    const [logo, setLogo] = useState('')
    useEffect(() => {
        return () => {
        }
    }, [])
    let content
    const [AddSalesNotes1] = useAddSalesNotesMutation()
    const {
        control,
        register,
        reset,
        handleSubmit,
        setValue,
        watch,
        getValues,
        formState: { errors },
        setError,
    } = useForm({
    });
    const onSubmit = async (data) => {
        console.log("data", { ...data, employer_id: id });
        if (data) AddSalesNotes1({ ...data, employer_id: id, writtenBy: `${userInfo.firstName} ${userInfo.lastName}` })
    };
    return (
        <div className="overflow-y w-full">
            < form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
            >
                <button
                    className='w-full btn btn-primary'
                >Add New Sales Notes</button>
                <textarea
                    id="description-input"
                    name="07_Nominee_Description"
                    className="w-full px-4 py-3 0 border border-black  rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Please write sales notes here"
                    {...register("note")}
                />
                <div className="w-full flex gap-2 justify-between text-left font-bold">
         
                    <div className="flex flex-start gap-1">
                        <label className="label-text text-xs">Action By:</label>
                 
                        <select 
                            className="text-xs"
                            {...register("actionBy")}
                        >
                            <option value="">Select an Agent</option>
                            {[{ name: 'Jarrod', id: '4' }, { name: 'John', id: '90' }].map(({name, id},i) => (
                                <option key={i} value={id}>
                                    {name}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="flex flex-start gap-1">
                        <label className="label-text text-xs">Action Date:</label>
                        <input
                            type="date"
                            className="text-center  md:text-left border border-[#00aeef] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            {...register("actionDate")}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddSalesNotes
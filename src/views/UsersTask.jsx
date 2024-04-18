import React, { useState, useEffect, useRef, useMemo } from "react";
import { setEmployer } from "../store/postsSlice";
import UserEdit from "./UserEdit";
import { useSelector, useDispatch } from "react-redux";
const users = [
    {
        "id": 76,
        "firstName": "Mary Rose Joana",
        "portrait": "mary_rose_joana_pecson.jpg"
    },
    {
        "id": 77,
        "firstName": "Joan",
        "portrait": "joan_santos.jpg"
    },
    {
        "id": 78,
        "firstName": "Norren",
        "portrait": "norren_saligan.jpg"
    },
    {
        "id": 79,
        "firstName": "Marcus",
        "portrait": "marcus_ de_leon.jpg"
    },
    {
        "id": 81,
        "firstName": "Jhon Michael",
        "portrait": "jhon_michael_cruz.jpg"
    },
    {
        "id": 82,
        "firstName": "Lexphil",
        "portrait": "lexphil_de_vera.jpg"
    },
    {
        "id": 83,
        "firstName": "Laira Andrea",
        "portrait": "laira_andrea_austria.jpg"
    },
    {
        "id": 84,
        "firstName": "Luigi Yñaki",
        "portrait": "luigi_ynaki_jardin.jpg"
    },
    {
        "id": 86,
        "firstName": "Don",
        "portrait": "don_fernandez.jpg"
    }

]
const UsersTask = () => {
    const [userId, setUserId] = useState(83)
    return (
        <div>
            <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4 mt-4 mb-6">Task Allocation</p>

            <div className="flex flex-col  gap-2  w-full">
                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {
                        users.map(({ id, firstName, portrait }) => (
                            < div className="card w-[100px] h-[100px] bg-base-100 shadow-xl "
                                onClick={() => {
                                    setUserId(id)
                                }}
                            >
                                <img
                                    src={`https://academicjobs.s3.amazonaws.com/img/users/${portrait}` || '/favicon.png'}
                                    alt={firstName}
                                    className=" w-[100px] h-[100px] object-contain rounded-md bg-white"
                                />
                            </div>
                        ))
                    }
                </div>
                <UserEdit id={userId} />
            </div></div>)
};
export default UsersTask;

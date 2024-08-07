import React, { useState } from "react";
import {
    useGetEmployerQuery,
} from "../store/apiSlice";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmployerAddEdit from "./EmployerAddEdit";
import CreateInvoice from "../components/CreateInvoice";

const EditEmployerProfile1 = ({ id = 7 }) => {
    const [activeTab, setActiveTab] = useState('edit'); // State to manage the active tab
    const dispatch = useDispatch();
    const employer = useSelector((state) => state.posts.employer);

    const {
        data,
        isLoading,
        isSuccess,
    } = useGetEmployerQuery(id);

    let content;
    if (isLoading) { 
        content = "Loading"; 
    }
    if (data) {
        content = (
            <div className="overflow-y w-full">
                {employer?.company_name && (
                    <div className="flex flex-col gap-2 p-4 mb-5">
                        <div>
                            <Link
                                to={`https://www.teachingjobs.com.au/employers/${employer?.company_name.replace(/\W+/g, "-").toLowerCase()}/${employer?.employer_id}/`}
                                className="btn w-[49%]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Employer Profile
                            </Link>
                            <Link
                                to={data?.employerPageURL}
                                className="btn w-[49%] ml-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Employer Job Page URL
                            </Link>
                        </div>
                        <Link to={`/post-a-job/`}
                            className="btn btn-success w-[99%]"
                        >Post A Job</Link>
                    </div>
                )}

                <div className="tabs">
                    <button className={`tab ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>Edit Employer Profile</button>
                    <button className={`tab ${activeTab === 'invoice' ? 'active' : ''}`} onClick={() => setActiveTab('invoice')}>Create Invoice</button>
                </div>

                <div className="tab-content">
                    {activeTab === 'edit' && <EmployerAddEdit employer={data} />}
                    {activeTab === 'invoice' && <CreateInvoice employer={data} />}
                </div>
            </div>
        );
    }

    return content;
};

export default EditEmployerProfile1;

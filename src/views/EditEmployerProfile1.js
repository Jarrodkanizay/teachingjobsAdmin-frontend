import {
    useGetEmployerQuery,
} from "../store/apiSlice";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { setEmployer } from "../store/postsSlice";
import EmployerAddEdit from "./EmployerAddEdit";
import { useSelector, useDispatch } from "react-redux";
const EditEmployerProfile1 = ({ id = 7 }) => {
    const dispatch = useDispatch()
    const employer = useSelector((state) => state.posts.employer);
    console.log("EditEmployerProfile", id);
    const {
        data,
        isLoading,
        isSuccess,
    } = useGetEmployerQuery(id)
    let content
    if (isLoading) { content = "Loading" }
    if (data) {
        console.log("data=========",data)
        //dispatch(setEmployer(data))
        content = (
            <div className="overflow-y w-full">
                {employer?.company_name && (
                    <div className="flex flex-col gap-2 p-4 mb-5">
                        <div className=" flex justify-start gap-1 items-center align-middle">
                            <ul className=" flex justify-start items-end gap-4   px-1  ">
                                <div className="card w-[100px] h-[100px] bg-base-100 shadow-xl ">
                                    <div className="w-[100px] h-[100px] grid place-items-center">
                                        <img
                                            src={employer?.logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${employer?.logo}` : '/favicon.png'}
                                            alt={`${employer?.company_name}`}
                                            className="object-contain rounded-md bg-white"
                                        />
                                    </div>
                                </div>
                            </ul>
                            <div className="text-4xl text-black font-bold text-center ">{employer?.company_name}</div>
                        </div>
                        <div>
                            <Link
                                to={`/employers/${employer?.company_name
                                    ?.replace(/\W+/g, "-")
                                    .toLowerCase()}/${employer?.employer_id}/`}
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
                            className="btn"
                        >Post A Job</Link>
                    </div>
                )}
                <div className="text-2xl text-black font-bold text-left pl-4">Edit Employer Profile</div>

                <EmployerAddEdit employer={data} />
            </div>
            )
    }

    // { !isLoading ? <EmployerAddEdit employer={data} /> :  }
    return content;
};
export default EditEmployerProfile1;

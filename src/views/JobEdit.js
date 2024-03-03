import {
  useGetJobByIdQuery,
} from "../store/apiSlice";
import JobAddEdit from "./JobAddEdit";
import { useParams } from "react-router-dom";
const JobEdit = () => {
  const { id } = useParams();
  console.log("JobEdit", id);
  const { data, isLoading, isSuccess } = useGetJobByIdQuery(id);
  return <div className="overflow-y w-full p-4">
    {!isLoading ? <JobAddEdit job={data} /> : "Loading"}
  </div>;
};
export default JobEdit;

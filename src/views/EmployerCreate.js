import EmployerAddEdit from "./EmployerAddEdit";
const EmployerCreate = () => {
  return <div>
    <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4 mt-4 mb-6">Create Employer</p>
    <div className="overflow-y w-full columns-2 p-4">
      <EmployerAddEdit />
    </div>
  </div>;
};
export default EmployerCreate;

import { useNavigate, useLocation } from "react-router-dom";
export default function Invoice() {
    const { state } = useLocation();
    const { id, date, name, productQty, totalPrice } = state;
    return (
        <div className="bg-white p-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <img
                    // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
                    src="/academicJobsLogo.png"
                    alt="AcademicJobs Logo"
                    className="pl-4 w-[20rem] mb-[1rem] "
                />
                <div className="text-right">
                    <p className="text-lg font-semibold">Invoice #: {id}</p>
                    <p className="text-sm">{date}</p>
                </div>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pb-6 mb-6">
                <div>
                    <h2 className="font-semibold mb-1">Bill To</h2>
                    <p>University of North Carolina Asheville</p>
                    <p>Asheville, NC, USA</p>
                </div>
                <div className="text-right">
                    <h2 className="font-semibold mb-1">Send Payment To</h2>
                    <p>Post My Job Pty Ltd</p>
                    <p>ABN: 66977584208</p>
                    <p>29 Drake Street,</p>
                    <p>Brighton, Victoria, 3186</p>
                    <p>Australia</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="font-semibold mb-1">Description</h2>
                <div className="border-2 border-gray-200 p-4">
                    <p>{name}</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="font-semibold mb-1">Job Postings</h2>
                <div className="border-2 border-gray-200 p-4">
                    <p>Provost (21 Dec, 2023 - 18 Feb, 2024)</p>
                </div>
            </div>
            <div className="flex justify-end">
                <table className="w-1/2">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Amount</td>
                            <td className="text-right">${totalPrice}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Subtotal</td>
                            <td className="text-right">${totalPrice}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Total</td>
                            <td className="text-right">${totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

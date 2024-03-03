import { useSelector, useDispatch } from "react-redux";
import SearchResults1 from "./SearchResults1";
import { useGetOrderedProductsQuery } from "../store/apiSlice";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice";
function EmployerCenter(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);


  const { data, isLoading, isSuccess } = useGetOrderedProductsQuery({ id: userInfo.id });
  //alert()
  const handleDownloadInvoice = async (id) => {
    // fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     currency: "AUD",
    //     amount: Math.round(hasGST ? price * 1.1 * 100 : price * 100),
    //     userid, productid
    //   }),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    // });
    try {
      // fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
      const response = await fetch(
        "https://api2.sciencejobs.com.au/api/downloadInvoice",
        {
          //http://localhost:3500/api/downloadInvoice
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }), // Adjust the id value as needed
        }
      );
      if (!response.ok) {
        throw new Error(`Error downloading PDF: ${response.status}`);
      }
      const dataPDF = await response.blob();
      //const dataUrl = window.URL.createObjectURL(dataPDF);
      //window.open(dataUrl, '_blank');
      const link = document.createElement("a");
      link.href = URL.createObjectURL(dataPDF);
      link.download = "invoice.txt";
      // Trigger the download directly
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
    }
  };
  let content, content1;
  if (userInfo.jobCredits) {
    //dispatch(setJobCredits(data?.jobCredits));
    content1 = <div></div>;
  } else {
    content1 = (
      <div className="flex flex-col gap-4">
        <div>You do not have any credits, pls purchase the products:</div>
        <div className="">
          <NavLink
            to={`/post-job/${region}`}
            className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
            activeClassName="post-a-job"
          >
            Purchase Products
          </NavLink>
        </div>
      </div>
    );
  }
  if (isLoading) {
    content = (
      <div className="flex  w-full h-screen  justify-between ">
        <div
          role="status"
          className="h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    console.log(data);
    if (data?.orderedProducts?.length > 0) {
      content = (
        <div className="flex gap-8">
          <div className="">
            <NavLink
              to={`/post-a-job/`}
              className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
              activeClassName="post-a-job"
            >
              Post a Job
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to={`/post-a-job/`}
              className="hidden text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
              activeClassName="post-a-job"
            >
              Post a Job
            </NavLink>
          </div>
          <div className="w-full  font-bold underline hidden">
            Your Purchased Products
          </div>
          <table>
            <tbody>
              <tr className="font-bold hidden">
                <td>Date</td>
                <td>Product</td>
                <td>Credits</td>
                <td className="pr-4">Priority</td>
                <td>Social</td>
              </tr>
              {data?.orderedProducts?.map(({ date, name, credits }, i) => {
                console.log(date, name, credits);
                return (
                  <tr className=" border-b border-black-1 hidden" key={i}>
                    <td className="w-[200px]">
                      {new Date(date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="w-[200px]">{name}</td>
                    <td className="w-[100px]">{credits}</td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    // else {//
    //   content = <p className=' text-center text-2xl font-bold py-10'>You have not ordered any products</p>
    // }
  }
  return (
    <div className=" md:flex  px-6  gap-8 ">
  
      <div className="md:flex md:justify-between gap-8  pt-3">
        <div className="flex flex-col ">
          <h2 className="text-3xl font-black py-4 text-[#f4a10c]">
            Welcome {userInfo.firstName}
          </h2>
          <div className="">
            {content1}
            <div className="my-8"> </div>
            {content}
          </div>
          <div className="mt-8 mb-4">
            <SearchResults1 q={{ employer_id: userInfo.employer_id, expired: "0" }} />
          </div>
        </div>
        <div className="bg-white flex flex-col  ">
          <ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-2 gap-4   px-1  w-full ">
            <div className="flex flex-col gap-2">
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body bg-gradient-to-t from-gray-200 to-white  rounded-xl py-4">
                  <h2 className="card-title text-base ">{userInfo.company_name}</h2>
                </div>
              </div>
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body bg-gradient-to-t from-gray-200 to-white  rounded-xl py-4">
                  <h2 className="card-title text-base ">Job Credits </h2>
                  <span className=" text-gray-400">
                    {userInfo.jobCredits}
                  </span>
                </div>
              </div>
            </div>
            <div className="card w-[208px] h-[208px] bg-base-100 shadow-xl grid place-items-center">
              <div className="w-[208px] h-[208px] mr-4 grid place-items-center">
                <img src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${userInfo.logo}`}   
                  alt={userInfo.company_name}
                  className="  object-contain rounded-md bg-white "
                />
              </div>
            </div>
          </ul>
          <h2 className="font-bold pt-1  px-4 rounded py-2">Last 30 Days ◥</h2>
          <ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-2 gap-4  px-1  w-full ">
            <Link>
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body">
                  <a href="#" className=" text-gray-400">
                    ▮{" "}
                  </a>
                  <h2 className="card-title text-base font-normal">
                    Jobs Posted{" "}
                  </h2>
                  <a href="#" className=" text-gray-400">
                    0
                  </a>
                </div>
              </div>
            </Link>
            <Link>
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body">
                  <a href="#" className=" text-gray-400">
                    ⬤{" "}
                  </a>
                  <h2 className="card-title text-base  font-normal">
                    Job Views{" "}
                  </h2>
                  <a href="#" className=" text-gray-400">
                    0
                  </a>
                </div>
              </div>
            </Link>
            <Link>
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body ">
                  <a href="#" className=" text-gray-400">
                    ⛊{" "}
                  </a>
                  <h2 className="card-title text-base  font-normal">
                    Apply Clicks{" "}
                  </h2>
                  <a href="#" className=" text-gray-400">
                    0
                  </a>
                </div>
              </div>
            </Link>
            <Link>
              <div className="card w-50 bg-base-100 shadow-xl">
                <div className="card-body">
                  <a href="#" className=" text-gray-400">
                    ▰
                  </a>
                  <h2 className="card-title text-base  font-normal">
                    Apply Rate
                  </h2>
                  <a href="#" className=" text-gray-400">
                    0 %
                  </a>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default EmployerCenter;

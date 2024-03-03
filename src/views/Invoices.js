import { useSelector, useDispatch } from "react-redux";
import SearchResults1 from './SearchResults1'
import {
  useGetOrderedProductsQuery,
} from "../store/apiSlice";
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice"
import { BsCreditCard2Back } from "react-icons/bs";
function Invoices(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetOrderedProductsQuery({ id: userInfo.id })
  //console.log(userid)
  //alert()
  const handleShowInvoice = async ({ id, date, name, productQty, totalPrice }) => {
    console.log(data?.orderedProducts)
    navigate("/invoice/", { state: { id, date, name, productQty, totalPrice } });
  }
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
      const response = await fetch("https://api2.sciencejobs.com.au/api/downloadInvoice", { //http://localhost:3500/api/downloadInvoice
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Adjust the id value as needed
      });
      if (!response.ok) {
        throw new Error(`Error downloading PDF: ${response.status}`);
      }
      const dataPDF = await response.blob();
      //const dataUrl = window.URL.createObjectURL(dataPDF);
      //window.open(dataUrl, '_blank');
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataPDF);
      link.download = 'invoice.txt';
      // Trigger the download directly
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
    }
  };
  let content, content1
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between '>
        <div role="status" className="h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
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
        <div role="status" className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
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
    )
  } else if (isSuccess) {
    console.log(data)
    if (data?.jobCredits) {
      dispatch(setJobCredits(data?.jobCredits))
      content1 = (<div className="p-4 border rounded-xl font-bold text-gray-400" >Credits: {data?.jobCredits}</div>)
    } else {
      content1 = (<div className="flex flex-col gap-4">
        <div>You do not have any credits, pls purchase the products:</div>
        <div className="" ><NavLink
          to={`/post-job/${region}`}
          className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
          activeClassName="post-a-job"
        >
          Purchase Products
        </NavLink></div>
      </div>)
    }
    if (data?.orderedProducts?.length > 0) {
      content = (
        <div className="flex flex-col gap-8">
          <div className="" ><NavLink
            to={`/post-job/${region}`}
            className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
            activeClassName="post-a-job"
          >
            Purchase Products
          </NavLink></div>
          <div className="w-full text-xl font-bold">Your Purchased Products</div>
          <div className="w-full  font-bold underline">Unpaied List</div>
          <table>
            <tbody>
              <tr className="font-bold">
                <td>id</td>
                <td>Date</td>
                <td>Product</td>
                <td>Qty</td>
                <td>Total Price</td>
                <td>Invoice</td>
                <td>Pay Now</td>
              </tr>
              {data?.orderedProducts?.map(({ id, date, name, productQty, totalPrice }, i) => {
                console.log(id, date, name, productQty, totalPrice)
                return (<tr className=" border-b border-black-1"
                  key={i}>
                  <td className="w-[100px]">{id}</td>
                  <td className="w-[200px]">{new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}</td>
                  <td className="w-[200px]">{name}</td>
                  <td className="w-[100px]">{productQty}</td>
                  <td className="w-[100px]">{totalPrice}</td>
                  <td className="w-[100px]">
                    <LiaFileInvoiceDollarSolid onClick={() => { handleShowInvoice({ id, date, name, productQty, totalPrice }) }} />
                  </td>
                  <td className="w-[100px]">
                    <BsCreditCard2Back
                      onClick={() => { 
                        navigate("/payment/", {
                          state: { id, date, name, productQty, totalPrice },
                        });
                       }}
 
                    />
                  </td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      )
    }
    // else {//
    //   content = <p className=' text-center text-2xl font-bold py-10'>You have not ordered any products</p>
    // }
  }
  return <div className=" md:flex  px-6  gap-8 ">

    <div className="md:flex md:justify-between gap-8  pt-3">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-black py-4 text-[#f4a10c]">Welcome {userInfo.firstName}!</h2>
        <div className="">
          {content1}
          <div className="my-8">    </div>
          {content}
        </div>

      </div>

    </div>
  </div>
}
export default Invoices;

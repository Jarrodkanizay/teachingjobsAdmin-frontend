import React from "react";
import { Link } from "react-router-dom";

const PricingTable = () => {
  const pricing = {
    cta: "Buy",
    currencySymbol: "$",
    basic: "Single Job Post",
    basicPrice: 315,
    business: "5 Job Pack",
    businessPrice: 1418,
    enterprise: "10 Job Pack",
    enterprisePrice: 2520,
  };
  function formatNumberWithCommas(number) {
    return number.toLocaleString();
  }
  return (
    <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl text-slate-600 font-semibold mb-6 lg:text-5xl">
          Find Your <span className="text-aj">Best</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Attract top-tier academics and all Higher Ed staff with the Worlds
          #1&nbsp;job&nbsp;board.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
        {/* Pricing Card 1 */}
        <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.basic}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {formatNumberWithCommas(pricing.basicPrice)}
                </span>{" "}
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                30 day single<span className="text-black"> job listing</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Ad<span className="text-black"> performance metrics</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li>
          </ul>
          <Link
            to="/paymentPublic/1"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            {pricing.cta} {pricing.basic}
          </Link>
        </div>

        {/* Pricing Card 2 */}
        <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-white">
                {pricing.business}
              </span>
              <span>
                <span className="font-medium text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-white">
                  {formatNumberWithCommas(pricing.businessPrice)}
                </span>
              </span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                30 day<span className="text-white"> job listings</span>
              </span>
            </li>
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-white"> anytime</span>
              </span>
            </li>
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                Job credits<span className="text-white"> do not expire</span>
              </span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
              <span className="ml-3">
                Save<span className="text-white"> 10%</span>
              </span>
            </li>
          </ul>
          <Link
            to="/payment/1"
            className="flex justify-center items-center bg-aj rounded-xl py-6 px-4 text-center text-white text-2xl"
          >
            {pricing.cta} {pricing.business}
          </Link>
        </div>

        {/* Pricing Card 3 */}
        <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <img
              src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
              alt=""
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.enterprise}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {" "}
                  {formatNumberWithCommas(pricing.enterprisePrice)}
                </span>
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                30 day single<span className="text-black"> job listings</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Job credits<span className="text-black"> do not expire</span>
              </span>
            </li>
            <li className="flex text-lg">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Save <span className="text-black"> 20%</span>
              </span>
            </li>
          </ul>
          <Link
            to="/payment/1"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            {pricing.cta} {pricing.enterprise}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;

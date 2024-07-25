import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useCreateInvoiceMutation } from "../store/apiSlice";
import InputBlock from '../components/InputBlock';
import { productData } from '../data/ProductData';

const CreateInvoice = ({ employer }) => {
  let productid;
  const [loading, setLoading] = useState(false);
  const [createInvoice] = useCreateInvoiceMutation();
  const [selectedProductId, setSelectedProductId] = useState(productid || '');
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const products = productData;

  const selectedProduct = products.find(product => product.xeroId === selectedProductId);

  useEffect(() => {
    if (employer?.location) {
      fetchGeocodeData(`${employer.location}, ${employer.suburb}, ${employer.city}, ${employer.state}, ${employer.country}`);
    }
  }, [employer]);

  const fetchGeocodeData = async (address) => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA`);
      const data = await response.json();
      if (data.status === "OK" && data.results.length > 0) {
        const components = data.results[0].address_components;
        setAddressComponents(components);
      } else {
        console.error('Geocode was not successful for the following reason:', data.status);
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
    }
  };

  const setAddressComponents = (components) => {
    const getComponent = (type) => components.find(comp => comp.types.includes(type)) || {};
    setValue('company_name', employer.company_name || '');
    setValue('address_line1', `${getComponent('street_number').long_name || ''} ${getComponent('route').long_name || ''}`);
    setValue('city', getComponent('locality').long_name || '');
    setValue('region', getComponent('administrative_area_level_1').short_name || '');
    setValue('postalCode', getComponent('postal_code').long_name || '');
    setValue('country', getComponent('country').long_name || '');
  };

  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value);
  };

  const onSubmit = async (data) => {
    if (!selectedProduct) {
      return;
    }

    setLoading(true);
    try {
      const dueDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split('T')[0];
      const response = await createInvoice({
        product: {
          id: selectedProduct.xeroId,
          description: `${selectedProduct.description} - ${selectedProduct.currency}`,
          price: selectedProduct.price,
        },
        customerDetails: {
          name: data['01_First_Name'] + ' ' + data['01_Last_Name'],
          email: data['02_Email'],
          address: data['company_name'],
        },
        invoiceDetails: {
          address: {
            line1: data['address_line1'],
            line2: data['address_line2'],
            city: data['city'],
            region: data['region'],
            postalCode: data['postalCode'],
            country: data['country'],
          },
          reference: data['08_Invoice_Reference'],
          dueDate: dueDate,
        },
      }).unwrap();

      if (response.status === 200) {
        alert('Invoice created successfully!');
      }
    } catch (error) {
      setLoading(false);
      alert('Invoice creation failed. Try again.');
      console.error('Error during invoice creation:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto w-full gap-16 justify-center">
        <div className="flex gap-2">
          <h2 className='font-bold underline pt-2 mb-3'>Create Invoice</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="productSelect" className="form-control">
                <span className="label-text text-xs pb-1">Select Product</span>
                <select
                  id="productSelect"
                  value={selectedProductId}
                  onChange={handleProductChange}
                  className="form-select input input-md input-bordered focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select product...</option>
                  {products.map((product) => (
                    <option key={product.xeroId} value={product.xeroId}>
                      {product.name} - ${product.price} ({product.currency})
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mt-4 mb-4">
              <div className="grid w-full items-center">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="First Name"
                  type="text"
                  field="01_First_Name"
                  forceClass="text-black"
                  placeholder="First Name"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Last Name"
                  type="text"
                  field="01_Last_Name"
                  forceClass="text-black"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <InputBlock
                  register={register}
                  errors={errors}
                  label="Email"
                  type="email"
                  field="02_Email"
                  forceClass="text-black"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputBlock
                register={register}
                errors={errors}
                label="Company Name"
                type="text"
                field="company_name"
                forceClass="text-black"
                placeholder="Company Name"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Address Line 1"
                type="text"
                field="address_line1"
                forceClass="text-black"
                placeholder="Address Line 1"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Address Line 2"
                type="text"
                field="address_line2"
                forceClass="text-black"
                placeholder="Address Line 2"
                required={false}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="City"
                type="text"
                field="city"
                forceClass="text-black"
                placeholder="City"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Region"
                type="text"
                field="region"
                forceClass="text-black"
                placeholder="Region"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Postal Code"
                type="text"
                field="postalCode"
                forceClass="text-black"
                placeholder="Postal Code"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Country"
                type="text"
                field="country"
                forceClass="text-black"
                placeholder="Country"
                required={true}
              />
              <InputBlock
                register={register}
                errors={errors}
                label="Invoice Reference"
                type="text"
                field="08_Invoice_Reference"
                forceClass="text-black"
                placeholder="Invoice Reference"
                required={true}
              />
            </div>

            <div className="flex flex-col gap-4 justify-start">
              <button className="btn bg-green-300 mt-4 max-w-[300px] mx-auto" disabled={loading}>
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Send Invoice'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;

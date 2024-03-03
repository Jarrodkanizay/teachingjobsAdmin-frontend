import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_ENV === 'development'
      ? 'http://localhost:3500/api'
      //  ? 'https://api2.sciencejobs.com.au/api'
      : 'https://api2.sciencejobs.com.au/api',
    //'https://api1.sciencejobs.com.au/api',
    //'http://localhost:7997/api',
    //'https://api.academicjobs.com/api',
    credentials: 'same-origin',
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['employers', 'employer', 'job', 'jobs'],
  endpoints: (builder) => ({
    shareJob: builder.mutation({
      query: (data) => ({
        url: `/sharejob`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      invalidatesTags: [],
    }),
    sendEmail: builder.mutation({
      query: (data) => ({
        url: `/sendemail`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      invalidatesTags: [],
    }),
    talentPoolEmail: builder.mutation({
      query: (data) => ({
        url: `/talentPoolEmail`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      invalidatesTags: [],
    }),
    sendEmail1: builder.mutation({
      query: (data) => ({
        url: `/sendemail1`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      invalidatesTags: [],
    }),
    getJobs: builder.query({
      query: (data) => ({
        url: `/jobs`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
        return queryArgs
        //const { q, l } = queryArgs
        //return { q, l }
        //return { uniqueKey: `${q}-${l}` }
      },
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      merge: (currentCache, newItems) => {
        console.log(newItems)
        if (newItems) currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ['jobs'],
      invalidatesTags: ['jobs'],
    }),
    getQty: builder.query({
      query: (data) => ({
        url: `/jobQty`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['jobsQty'],
      invalidatesTags: ['jobsQty'],
    }),
    getEmployers: builder.query({
      query: () =>
        `employer`,
      mode: "cors",
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.employers
      },
      providesTags: ['employers'],
    }),
    getFilters: builder.query({
      query: (data) => ({
        url: `/filters`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['filters'],
      invalidatesTags: ['filters'],
    }),
    getOrderedProducts: builder.query({
      query: (data) => ({
        url: `/getOrderedProducts`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['orderedProducts'],
      invalidatesTags: ['orderedProducts'],
    }),
    addOrderedProducts: builder.mutation({
      query: (data) => ({
        url: `/addOrderedProducts`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['orderedProducts'],
      invalidatesTags: ['orderedProducts'],
    }),
    postAJob: builder.mutation({
      query: (data) => ({
        url: `/postAJob`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['orderedProducts'],
      invalidatesTags: ['orderedProducts','jobs'],
    }),
    downloadInvoice: builder.mutation({
      query: (data) => ({
        url: `/downloadInvoice`,
        method: 'POST',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
    }),
    updateEmployer: builder.mutation({
      query: (data) => ({
        url: `/updateEmployer`,
        method: 'PATCH',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData
      },
      invalidatesTags: ['employer', 'jobs'],
    }),
    updateJob: builder.mutation({
      query: (data) => ({
        url: `/updateJob`,
        method: 'PATCH',
        body: data,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData
      },
      invalidatesTags: ['employer', 'jobs'],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `job/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['job'],
    }),
    getEmployer: builder.query({
      query: (id) => ({
        url: `employer/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
    getSingleQA: builder.query({
      query: () => ({
        url: `employer/3739`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data
      },
      providesTags: ['employer'],
    }),
    getJobsByEmployer: builder.query({
      query: (id) => ({
        url: `job/${id}`,
        mode: 'cors',
      }),
      transformResponse: (responseData) => {
        console.log(responseData)
        return responseData.data.jobs
      },
      providesTags: ['job'],
    }),
  }),
})
export const {
  useDownloadInvoiceMutation,
  useUpdateEmployerMutation,
  useUpdateJobMutation,
  useEditEmployerProfileMutation,
  usePostAJobMutation,
  useAddOrderedProductsMutation,
  useGetOrderedProductsQuery,
  useTalentPoolEmailMutation,
  useSendEmail1Mutation,
  useSendEmailMutation,
  useShareJobMutation,
  useGetFiltersQuery,
  useGetJobByIdQuery,
  useGetSingleQAQuery,
  useGetEmployersQuery,
  useGetJobsByEmployerQuery,
  useGetJobsQuery,
  useGetEmployerQuery,
  useGetQtyQuery,
} = apiSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, setUserInfo } from '../views/auth/authSlice'
// import {  setJobCredits } from "./postSlice"
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_ENV === 'development'
        ? 'http://localhost:3500/api'
        //  ? 'https://api2.sciencejobs.com.au/api'
        : 'https://api.sciencejobs.com.au/api',
    //'https://api1.sciencejobs.com.au/api',
    //'http://localhost:7997/api',
    //'https://api.academicjobs.com/api',
    //credentials: 'same-origin',
    mode: "cors",
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        headers.set('Access-Control-Allow-Origin', '*')
        headers.set('Content-Type', 'application/json');
        return headers
    }
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
    // console.log(args) // request url, method, body
    // console.log(api) // signal, dispatch, getState()
    // console.log(extraOptions) //custom like {shout: true}
    let result = await baseQuery(args, api, extraOptions)
    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data }))
            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired."
            }
            return refreshResult
        }
    }
    return result
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['employers', 'employer', 'job', 'jobs', 'orderedProducts'],
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
        sendEmail3: builder.mutation({
            query: (data) => ({
                url: `/sendemail3`,
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
                return responseData.data.jobs
            },
            // merge: (currentCache, newItems) => {
            //     console.log(newItems)
            //     if (newItems) currentCache.push(...newItems);
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg;
            // },
            providesTags: ['jobs'],
            //invalidatesTags: ['jobs'],
        }),
        getJobs2: builder.query({
            query: (data) => ({
                url: `/jobs2`,
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
                return responseData.data.jobs
            },
            // merge: (currentCache, newItems) => {
            //     console.log(newItems)
            //     if (newItems) currentCache.push(...newItems);
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg;
            // },
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
        getQty1: builder.query({
            query: (data) => ({
                url: `/jobQty1`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['jobsQty1'],
            invalidatesTags: ['jobsQty1'],
        }),
        getJobCredits: builder.query({
            query: (data) => ({
                url: `/getJobCredits`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['jobCredits'],
            invalidatesTags: ['jobCredits'],
        }),
        getEmployers: builder.query({
            query: (data) => ({
                url: `/employers`,
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
            // merge: (currentCache, newItems) => {
            //     console.log(newItems)
            //     if (newItems) currentCache.push(...newItems);
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg;
            // },
            providesTags: ['employers'],
            //invalidatesTags: ['jobs'],
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
                //alert("qqq")
                console.log(responseData)
                //api.dispatch(setJobCredits ())
                return responseData.data
            },
            providesTags: ['orderedProducts'],
            invalidatesTags: ['orderedProducts'],
        }),
        emailInvoice: builder.mutation({
            query: invoiceId => ({
                url: '/emailInvoice',
                method: 'POST',
                body: { invoiceId }
            }),
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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log("==========data=================", data)
                    //dispatch(setUserInfo(data))
                    //dispatch(setUserid(userid))
                    //dispatch(setEmail1(email))
                } catch (err) {
                    console.log(err)
                }
            },
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            //providesTags: ['orderedProducts'],
            invalidatesTags: ['job', 'jobs', 'orderedProducts'],
        }),
        createEmployer: builder.mutation({
            query: (data) => ({
                url: `/createEmployer`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log("==========data=================", data)
                    //dispatch(setUserInfo(data))
                    //dispatch(setUserid(userid))
                    //dispatch(setEmail1(email))
                } catch (err) {
                    console.log(err)
                }
            },
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            //providesTags: ['orderedProducts'],
            invalidatesTags: ['employer', 'employers',],
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
            providesTags: ['invoices'],
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
            invalidatesTags: ['employer', "employers", 'job', 'jobs'],
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `/auth/updateUser`,
                method: 'PATCH',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData
            },
            invalidatesTags: ['user', "users"],
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
            invalidatesTags: ['job', 'jobs'],
        }),
        getJobById: builder.query({
            query: (id) => ({
                url: `job/${id}`,
                method: 'get',
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['job'],
        }),
        getUserById: builder.query({
            query: (data) => ({
                url: `/auth/getUserById`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['user'],
        }),
        getOrderById: builder.query({
            query: (data) => ({
                url: `/getOrderById`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['order'],
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
            providesTags: ['employer', 'employers'],
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
        getJobQtyAgent: builder.query({
            query: () => ({
                url: `getJobQtyAgent`,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['JobQtyAgent'],
        }),
        getJobsByEmployer: builder.query({
            query: (id) => ({
                url: `job/${id}`,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data.jobss
            },
            providesTags: ['jobs'],
        }),
        getSalesNotes: builder.query({
            query: (data) => ({
                url: `/getSalesNotes`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['salesNotes'],
            invalidatesTags: ['salesNotes'],
        }),
        getSalesNotesByUser: builder.query({
            query: (data) => ({
                url: `/getSalesNotesByUser`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['salesNotesByUser'],
            invalidatesTags: ['salesNotesByUser'],
        }),
        addSalesNotes: builder.mutation({
            query: (data) => ({
                url: `/addSalesNotes`,
                method: 'POST',
                body: data,
                mode: 'cors',
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData
            },
            invalidatesTags: ['salesNotes', 'salesNotesByUser'],
        }),
        getEmployerSuggestions: builder.query({
            query: ({ query, country }) => ({
                url: 'getEmployerSuggestions',
                method: 'POST',
                body: { query, country },
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['employerSuggestions'],
            invalidatesTags: ['employerSuggestions'],
        }),
        getCampuses: builder.mutation({
            query: ({ id }) => ({
                url: 'getCampuses',
                method: 'POST',
                body: { id },
            }),
            transformResponse: (responseData) => {
                console.log(responseData)
                return responseData.data
            },
            providesTags: ['campuses'],
        }),
        createInvoice: builder.mutation({
            query: (data) => ({
              url: `/invoices/create`,
              method: 'POST',
              body: data,
              mode: 'cors',
            }),
            transformResponse: (response, meta, arg) => {
                return { data: response, status: meta.response.status };
            },
        }),
        getJobKeywordSuggestions: builder.query({
            query: ({ query }) => ({
                url: 'getJobKeywordSuggestions',
                method: 'POST',
                body: { query },
            }),
            transformResponse: (responseData) => {
                return responseData.data
            },
            providesTags: ['employerSuggestions'],
            invalidatesTags: ['employerSuggestions'],
        }),
    }),
})
export const {
    useGetJobKeywordSuggestionsQuery,
    useGetSalesNotesByUserQuery,
    useGetSalesNotesQuery,
    useAddSalesNotesMutation,
    useGetJobQtyAgentQuery,
    useEmailInvoiceMutation,
    useGetUserByIdQuery,
    useGetCampusesMutation,
    useGetEmployerSuggestionsQuery,
    useGetJobCreditsQuery,
    useDownloadInvoiceMutation,
    useUpdateEmployerMutation,
    useCreateEmployerMutation,
    useUpdateJobMutation,
    useUpdateUserMutation,
    useEditEmployerProfileMutation,
    usePostAJobMutation,
    useAddOrderedProductsMutation,
    useGetOrderedProductsQuery,
    useTalentPoolEmailMutation,
    useSendEmail1Mutation,
    useSendEmail3Mutation,
    useSendEmailMutation,
    useShareJobMutation,
    useGetFiltersQuery,
    useGetJobByIdQuery,
    useGetOrderByIdQuery,
    useGetSingleQAQuery,
    useGetEmployersQuery,
    useGetJobsByEmployerQuery,
    useGetJobsQuery,
    useGetJobs2Query,
    useGetEmployerQuery,
    useGetQtyQuery,
    useGetQty1Query,
    useCreateInvoiceMutation
} = apiSlice
import { apiSlice } from "../../store/apiSlice"
import { logOut, setCredentials, setUserInfo, setUserid, setEmail1, setCompany_name, setCountry, setOrderId } from "./authSlice"
import { setEmployer } from "../../store/postsSlice"
import { jwtDecode } from 'jwt-decode'
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                    const decoded = jwtDecode(accessToken)
                    dispatch(setUserInfo(decoded.UserInfo))
                    //const { userid, email, } = decoded.UserInfo
                    //dispatch(setUserid(userid))
                    //dispatch(setEmail1(email))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        registerUser: builder.mutation({
            query: credentials => ({
                url: '/auth/registerUser',
                method: 'POST',
                body: { ...credentials }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                    const decoded = jwtDecode(accessToken)
                    console.log("decoded", decoded)
                    dispatch(setUserInfo(decoded.UserInfo))
                    //const { userid, email, } = decoded.UserInfo
                    //dispatch(setUserid(userid))
                    //dispatch(setEmail1(email))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        signUpBuy: builder.mutation({
            query: credentials => ({
                url: '/auth/signUpBuy',
                method: 'POST',
                body: { ...credentials }
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                    const decoded = jwtDecode(accessToken)
                    console.log("decoded", decoded)
                    //dispatch(setUserInfo(decoded.UserInfo.user))
                    //dispatch(setOrderId(decoded.UserInfo.insertedId))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                //alert()
                console.log("=====refresh API开始try====")
                try {
                    const { data } = await queryFulfilled
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                    const { UserInfo } = jwtDecode(accessToken)
                    console.log(UserInfo)
                    dispatch(setUserInfo(UserInfo))
                    if (UserInfo.employer_id) {
                        dispatch(setEmployer({ employer_id: UserInfo.employer_id, company_name: UserInfo.company_name, logo: UserInfo.logo}))
                    }
                    console.log("=====refresh完成11111====", data)
                    //const { userid, email, country, company_name } = decoded.UserInfo
                    // dispatch(setUserid(userid))
                    // dispatch(setEmail1(email))
                    // dispatch(setCountry(country))
                    // dispatch(setCompany_name(company_name))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    })
})
export const {
    useEmailInvoiceMutation,
    useSignUpBuyMutation,
    useRegisterUserMutation,
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice 
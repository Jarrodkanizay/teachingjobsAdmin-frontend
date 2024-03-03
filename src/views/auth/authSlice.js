import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, userid: null, email: null, company_name:null, country:null, logo: null,
        userInfo: null,
        orderId: null, 
    },
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        setUserInfo: (state, action) => {
            state.userInfo = { ...state.userInfo, ...action.payload };
        },
        setCompany_name: (state, action) => {
            state.company_name = action.payload        
        },
        setOrderId: (state, action) => {
            state.orderId = action.payload        
        },
     
        setCountry: (state, action) => {
            state.country = action.payload        
        },
     
        setEmail1(state, action) {
            state.email = action.payload
        },
        logOut: (state, action) => {
            state.token = null
            state.userid = null
            state.email = null
        },
    }
})

        
export const { setOrderId,setCredentials, logOut, setUserid, setEmail1, setCompany_name, setCountry, setUserInfo } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
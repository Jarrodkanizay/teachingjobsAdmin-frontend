import { useLocation, Navigate, Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'
import { useRefreshMutation } from "./authApiSlice"
import usePersist from "../../hooks/usePersist"
import { setUserInfo, selectCurrentToken, setCredentials, setUserid, setEmail1, setCompany_name, setCountry } from "./authSlice"
import PulseLoader from 'react-spinners/PulseLoader'
import { jwtDecode } from 'jwt-decode'
import { useSelector, useDispatch } from "react-redux";
const PersistLogin = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)
    const [trueSuccess, setTrueSuccess] = useState(false)
    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()
    useEffect(() => {
        const verifyRefreshToken = async () => {
            console.log('verifying refresh token')
            try {
                //const response = 
                await refresh()
                //const { accessToken } = response.data
                setTrueSuccess(true)
            }
            catch (err) {
                console.error(err)
            }
        }
        if (!token) { verifyRefreshToken() } else {
            const decoded = jwtDecode(token)
            dispatch(setUserInfo(decoded.UserInfo))
            // const { userid, email, country, company_name } = decoded.UserInfo
            // dispatch(setUserid(userid))
            // dispatch(setEmail1(email))
            // dispatch(setCountry(country))
            // dispatch(setCompany_name(company_name))
        }
        // eslint-disable-next-line
    }, [])
    let content
    // if (!persist) { // persist: no
    //     console.log('no persist')
    //     //content = <Outlet />
    //     content = < Navigate to="/login" state={{ from: location }} replace />
    // } else 
    if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <PulseLoader color={"#FFF"} />
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        // content = (
        //     <p className='errmsg'>
        //         {`${error?.data?.message} - `}
        //         <Link to="/login">Please login again</Link>.
        //     </p>
        // )
        content = < Navigate to="/login" state={{ from: location }} replace />
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }
    return content
}
export default PersistLogin

const PersistLogin = () => {
    const location = useLocation()
    const [persist] = usePersist()
    const token = useSelector(selectCurrentToken)
    const effectRan = useRef(false)
    const [trueSuccess, setTrueSuccess] = useState(false)

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
        if (!token) verifyRefreshToken()
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
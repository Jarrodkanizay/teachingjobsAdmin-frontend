import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link, NavLink } from "react-router-dom";
import AdminHome from './AdminHome';
import AdminHome_Customer from './AdminHome_Customer';
const AdminHome1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  let content
  if (userInfo.employer_id > 0) {
    content = <AdminHome_Customer/>
  } else {
    content = <AdminHome />
  }
  return content
}
export default AdminHome1

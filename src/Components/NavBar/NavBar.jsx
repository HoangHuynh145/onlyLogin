import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../Redux/apiRequest'
import createAxios from '../../createInstance'
import { logoutSuccess } from '../../Redux/authSlice'
import { deleteUserSuccess } from '../../Redux/usersSlice'

const NavBar = () => {
  const user = useSelector(state =>  state.auth.login?.currentUser)
  const userId = user?._id
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const axiosJwt = createAxios(user, dispatch, logoutSuccess)

  const hanldeLogout = () => {
    logoutUser(dispatch, userId, navigate, user?.accessToken, axiosJwt)
    dispatch(deleteUserSuccess(''))
  }

  return (
    <nav className="navbar-container">
      {user? (
        <>
        <Link to="/home" className="navbar-home"> Home </Link>
        <p className="navbar-user">Hi, <span> {user.username}  </span> </p>
        <Link to="/logout" className="navbar-logout" onClick={hanldeLogout}> Log out</Link>
        </>
      ) : (    
        <>
      <Link to="/login" className="navbar-login"> Login </Link>
      <Link to="/register" className="navbar-register"> Register</Link>
      </>
)}
    </nav>
  );
};

export default NavBar;

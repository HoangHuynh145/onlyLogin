import "./home.css";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllUser, deleteUser } from '../../Redux/apiRequest'
import createAxios from "../../createInstance";
import { loginSuccess } from '../../Redux/authSlice'

const HomePage = () => {
  const user = useSelector(state => state.auth.login.currentUser)
  const userList = useSelector(state => state.users.users.allUser)
  const errorMessage = useSelector(state => state.users?.messages)
  const accessToken = user?.accessToken
  const userId = user?._id
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const axiosJwt = createAxios(user, dispatch, loginSuccess)

  const handleDelete = (id) => {
    deleteUser(dispatch, accessToken, id, axiosJwt)
  }

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
    if (user?.accessToken) {
      getAllUser(dispatch, accessToken, userId, axiosJwt)
    }
  }, [])


  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container" key={user._id}>
              <div className="home-user">{user.username} {userId === user._id ? '(Bạn)' : ''}</div>
              <div className="delete-user" onClick={() => handleDelete(user._id)}> Delete </div>
            </div>
          );
        })}
      </div>
      {errorMessage}
    </main>
  );
};

export default HomePage;

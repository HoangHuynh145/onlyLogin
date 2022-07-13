import dotenv from 'dotenv'
dotenv.config()

const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'anotherApi'

//https://only-login.herokuapp.com
//http://localhost:8000
export default apiUrl

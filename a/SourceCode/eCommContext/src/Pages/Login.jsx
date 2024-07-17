import {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {

    let data = useContext(AuthContext)
    console.log(data);
  return (
    <div>
        <button onClick={data.toggleLogin}>Login</button>
        <h1>{data.isLogin? "True" : "False"}</h1>
    </div>
  )
}

export default Login
import { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';
import { verifyToken } from '../backend-calls/authentication';
import userContext from '../context/user';

const PrivateRoute = ({ children }) => {

  const navigate = useNavigate ()
  const {setUserData} = useContext(userContext);
  
  useEffect(() => {
    async function verifyTokenCall(){
      const response = await verifyToken();
      console.log("resp",response)
      if(response.error){
        localStorage.removeItem("token")
        navigate("/login")
      }else{
        setUserData(response.data)
      }
    }
    verifyTokenCall()
}, [])

    return localStorage.getItem("token") ?
    <div>
      <MenuBar />
      {children}
    </div> : 
    <Navigate to="/login" />
  }

export default PrivateRoute
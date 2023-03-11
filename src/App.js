import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import BlogArticle from './pages/BlogArticle';
import CodeDebug from './pages/CodeDebug';
import CodeGen from './pages/CodeGen';
import ColdEmail from './pages/ColdEmail';
import EmailGen from './pages/EmailGen';
import GenTweets from './pages/GenTweets';
import Profile from './pages/Profile';
import SocialMedia from './pages/SocialMedia';
import Home from './pages/HomePage';
import Payments from './pages/Payments';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Otp from './pages/Otp';
import PaymentSuccessRedirect from './pages/PaymentSuccessRedirect';
import AskMeAnything from './pages/AskMeAnything';
import userContext from './context/user';

function App() {
  const [mode, setMode] = useState ("")
  const [userData,setUserData] = useState({});
  
  useEffect(() => {
    setMode(localStorage.getItem("mode"));
  },[])
  
  return (
    <userContext.Provider value={{userData,setUserData}}>
      <div className={mode}>
        <Routes>
          <Route exact path="/email-gen" element={<PrivateRoute><EmailGen /></PrivateRoute>} />
          <Route exact path="/blog-article" element={<PrivateRoute><BlogArticle /></PrivateRoute>} />
          <Route exact path="/twitter-assist" element={<PrivateRoute><GenTweets /></PrivateRoute>} />
          <Route exact path="/cold-email" element={<PrivateRoute><ColdEmail /></PrivateRoute>} />
          <Route exact path="/social-ads" element={<PrivateRoute><SocialMedia /></PrivateRoute>} />
          <Route exact path="/code-gen" element={<PrivateRoute><CodeGen /></PrivateRoute>} />
          <Route exact path="/code-debug" element={<PrivateRoute><CodeDebug /></PrivateRoute>} />
          <Route exact path="/manage-account" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route exact path="/ask-me-anything" element={<PrivateRoute><AskMeAnything /></PrivateRoute>} />
          <Route exact path="/paymentSuccessRedirect" element={<PrivateRoute><PaymentSuccessRedirect /></PrivateRoute>} />
          <Route exact path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
          <Route exact path="/otp" element={<PrivateRoute><Otp /></PrivateRoute>} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;

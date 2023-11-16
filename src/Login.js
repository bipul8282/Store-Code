import React,{useState} from "react";
import style from './Login.module.css';
import NavBar from  "./NavBar"
import Footer from "./Footer.js";

export default function Login() {
    
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleLogin = () => {
        // Add your authentication logic here
        console.log('Email:', email);
        console.log('Password:', password);
      };
    
      const handleForgotPassword = () => {
        // Add your "Forgot Password" logic here
        console.log('Forgot Password clicked');
      };
    
      return (
        <>
        <div className={style.Btn1}><NavBar/></div>
        <div className={style.Btn}>
          <h2>Login</h2>
          <form>
            <div >
              <label>Email:</label>
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </div>
            <div className={style.Btn2}>
              <label>Password:</label>
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              <p>
                <span onClick={handleForgotPassword} className={style.forgot-password}>
                  Forgot Password?
                </span>
              </p>
            </div>
            <div>
              <button className={style.Login} type="button" onClick={handleLogin}>
                Login
              </button>
            </div>
           <div className={style.Login1}>
            
           <span>or Sign Up Using</span> <br></br>
           <span>Sign Up</span>
           </div>
          </form>
        </div>
        <Footer/>
        </>
      );
    };
    
   
    
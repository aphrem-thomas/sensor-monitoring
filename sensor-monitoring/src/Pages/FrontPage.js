import React from 'react';
import './FrontPage.css';

const FrontPage = ()=>{
    return(
        <div className="frontPage">
        <div className="login">
         <div className="logo"></div>
         <div className="bar"></div>
         <div className="signIn">
           Sign in to your account
           <div className="unameAndPwd">
             <input type="text" className="uname"/>
             <input type="password" className="pwd"/>
             <input type="submit" className="submit"/>
           </div>
           <div className="applink">
             <input type="checkbox" name="staysignedin"/>
             Stay Signed In
             <a href="/">Forgot your password?</a>
             <a href="/layman">dashboard</a>
           </div>
         </div>
        </div>
       </div>
    )
}

export default FrontPage;
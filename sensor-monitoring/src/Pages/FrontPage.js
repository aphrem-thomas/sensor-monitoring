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
             <a href="/dashboard">dashboard</a>
           </div>
           <div className="initialNavigation">
           <div className="navbuttons"><a href="/dashboard">dashboard</a></div>
           <div className="navbuttons"><a href="/dashboard/datascientist/">datascientist</a></div>
           <div className="navbuttons"><a href="/dashboard/policymakers">policymakers</a></div>
           </div>
         </div>
        </div>
       </div>
    )
}

export default FrontPage;
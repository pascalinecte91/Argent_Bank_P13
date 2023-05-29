import React from 'react'

const Login = () => {
  return (
    <>
        <NavLink className="navBar_in" to="/profilePage/Profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </NavLink>
   
        <NavLink className="navBar" to="/loginPage/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
  
    </>
  )
}

export default Login

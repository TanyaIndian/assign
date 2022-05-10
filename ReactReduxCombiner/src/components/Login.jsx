import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleauth } from '../Redx/Auth/action'
import { store } from '../Redx/store'

export const Login = () => {
    const auth = useSelector(store=>store.auth.auth)
    let stat = auth
    localStorage.setItem('Name', stat)
    const dispatch = useDispatch()
    const data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };
    const handleAuth = (e)=>
    {
        e.preventDefault()

        fetch("https://reqres.in/api/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then(data => {
           
            // console.log(data.token);
        });
        
        dispatch(toggleauth(auth))
    }


  return (
    <div><form className="loginform">
    <input
      name="username"
      type="text"
      placeholder="Enter username"
      className="login_username"
    />
    <input
      name="password"
      type="text"
      placeholder="Enter password"
      className="login_password"
    />
    <input type="submit" value="SIGN IN" className="login_submit" onClick={handleAuth}  />
  </form></div>
  )
}

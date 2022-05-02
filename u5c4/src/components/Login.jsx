import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [user,setUser] = useState([])
  const getUser =()=>
  {
    axios.get(`http://localhost:8080/users`)
              .then(res => {
                const result = res.data;
                setUser(result)
               
              })

              user.map((e) => {
                if(form.username == "admin" && e.pass == form.password){
                  navigate("/orders")
                } else{
                  if(e.username == form.username && e.pass == form.password){
                    localStorage.setItem("user",e.username)
                    navigate("/neworder")
                  }
                }
               
              });
          
  }
  useEffect(()=>{
    getUser()
  },[])


  const handleinput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

    return (
      <div>
        <input
        onChange={handleinput}
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
         onChange={handleinput}
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={getUser}>Login</button>
      </div>
    );
  };
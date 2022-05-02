import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {
  const auth = useSelector(store => store.isLoggedIn)
   
  return (
    <div className="App">
      <div style={{width:"90%",
    height:"70px",
    backgroundColor:"yellow",
    margin: "auto"}}>
        <Link className="nav-home" to="/"
         style={{margin:"20px"}}>
          Home
        </Link>
        {/* Show either login or logout below */}
        {
          auth? <Link className="nav-logout" to="/logout">
          Logout
        </Link> : 
        <Link className="nav-login" to="/login">
          Login
        </Link>
        }
        
      </div>

      <Routes>
      
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}

<Route path="/" element={<Home/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/Logout" element={<Logout/>}></Route>
<Route path="/Orders" element={<Orders/>}></Route>
<Route path="/neworder" element={<NewOrder/>}></Route>
</Routes>

    </div>
  );
}

export default App;
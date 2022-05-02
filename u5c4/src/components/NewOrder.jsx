import axios from "axios";
import { useEffect, useState } from "react";


export const NewOrder = () => {



  
  const [owner, setOwner] = useState([])
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    let NAME = localStorage.getItem("user")
    useEffect(()=>
    {
      getdata()
    },[])

    const getdata=()=>
    {
      axios.get(`http://localhost:8080/orders?q=${NAME}`)
              .then(res => {
                const result = res.data;
                
                setOwner(result)
               
              })
    }
    const [form,setForm] = useState({
      "owner-name" : NAME,
      "problem":"",
      "brand":"",
      "status":"Not Accepted"

    })
    const PostReq=()=>
    {
      axios.post(`http://localhost:8080/orders`,  form )
      .then(res => {
        
     

      }).then(getdata)
  }
    const InputFun = (e)=>
    {
      const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    }
    
    
    return (
      <div>
        <div className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
            onChange={InputFun}
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            value={NAME}
            readOnly
          
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
            onChange={InputFun}
          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit" onClick={PostReq}>submit</button>
        </div>
  
        <div className="pastOrders" style={{
          border:"blue",
          margin:"auto",
          width:"500px",
          backgroundColor:"red",
          color:"blue"
        }}>
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
            showFinished
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
          {owner.map((e)=>
          (
            <div className="past-orders">
            <span className="id">{e.id}</span>. <span className="problem">{e.problem}</span>{" "}
            <span className="cost" style={{color:"black"}}>
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
              {e.status=="Not Accepted" ? null : `$ ${e.cost}`}
            </span>
            <p className="status" style={{color:"yellow"}}>Status:{e.status} </p>
            <hr />
          </div>
          ))}
          
        </div>
      </div>
    );
  };
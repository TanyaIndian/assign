import { useState } from "react";

export const Inventory = () => {
  const [inkpen, setinkpen]  = useState(5)

  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.
    if(inkpen<0)
    {
      setinkpen(0)
    }
    
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>setInv({...inv, books: inv.books+1})}>+</button>
        <button className="circlularButton " onClick={()=>setInv({...inv, books: inv.books-1})}>-</button>
        <span>{inv.books  < 0 ? inv.books = 0 : inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>setInv({...inv, notebooks :inv.notebooks+1})}>+</button>
        <button className="circlularButton"onClick={()=>setInv({...inv, notebooks :inv.notebooks-1})}>-</button>
        <span>{inv.notebooks  < 0 ? inv.notebooks = 0 : inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"onClick={()=>setInv({...inv, pens :inv.pens+1})}>+</button>
        <button className="circlularButton"onClick={()=>setInv({...inv, pens :inv.pens-1})}>-</button>
        <span>{inv.pens  < 0 ? inv.pens = 0 : inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton"onClick={()=>setinkpen(inkpen+1)}>+</button>
        <button className="circlularButton"onClick={()=>setinkpen(inkpen-1)}>-</button>
        <span>{inkpen }</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens+inkpen}
    </div>
  );
}


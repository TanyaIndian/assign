import logo from './logo.svg';
import './App.css';
import Category from './component/Category';
import Logo from './component/Logo';
import Button from './component/Button';


function App() {
  const logo = "data:image/png;base64,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"
  const navbar = [
    {
      url : "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      topic : "Service",
    },
    {
      url : "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      topic : "Project",
    },
    {
      url : "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      topic : "About",
    }
  ]
  return (

    <div className="threediv">
      <div className='logo'><Logo im ={logo}/></div>
    <div className='nav' >
      {navbar.map((e)=> (
    <Category image={e.url} label={e.topic} />
    
      ))} 
    </div>
    
   <div className='buttondiv'> <Button name ="contact" /> </div> 
    </div>

    
    
  );
}

export default App;

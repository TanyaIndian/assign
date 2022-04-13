
import './App.css';
const head = ["Mobile os","Manufacturing os"]
const data1 = ["blackberry","samsung","windows","andriod"]
const data2 = [
  {
    
    style:"square",
    name: "Andriod"

  },
  {
   
    style:"square",
    name: "blackberry"
  },
  {
    style:"circle",
    name: "htc"
  },
  {
    style:"disc",
    name: "iphone"
  }
]

function App() {
  return (
    
    <div className="App">
      <h1>{head[0]}</h1>
    <ul>
    {data1.map((e)=>
     {
      return <Aa data5 = {e}/>

})}</ul> 
     
      <h1>{head[1]}</h1>
    <ul>
    {data2.map((e)=>
     {
      return <Ab data5 = {e}/>
      
})}</ul> 
     
    </div>
   
  );
}
function Aa({data5})
{
  return <li>{data5}</li>
}

function Ab({data5})
{
  return <li className={data5.style}>{data5.name}</li>
}

export default App;


import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { PrivateComponent } from './components/PrivateComponent';
import { ShowTodo } from './components/ShowTodo';
import { Todo } from './components/Todo';
import { addCount } from './Redx/action';
import { store } from './Redx/store';


function App() {

  return (
    <div className="App">
     

     <Routes>
       <Route path="/" element={<Todo/>}>  </Route>
       <Route path="/todo/:id" element={<PrivateComponent><ShowTodo></ShowTodo></PrivateComponent>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;

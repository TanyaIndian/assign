
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { ShowTodo } from './components/ShowTodo';
import { Todo } from './components/Todo';
import { addCount } from './Redx/action';
import { store } from './Redx/store';


function App() {

  return (
    <div className="App">
     

     <Routes>
       <Route path="/" element={<Todo/>}>  </Route>
       <Route path="/todo/:id" element={<ShowTodo></ShowTodo>}></Route>
     </Routes>
    </div>
  );
}

export default App;

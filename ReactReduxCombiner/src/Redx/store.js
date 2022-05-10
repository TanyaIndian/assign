import { combineReducers, legacy_createStore as createStore } from "redux";
import { Authtoggle } from "./Auth/reducer";
import { counterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

 const rootReducer = combineReducers({
     counter : counterReducer,
     todos : todoReducer,
     auth:Authtoggle
 })
// store.subscribe(()=>{
//     console.log("subscribe",store.getState())

// })
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
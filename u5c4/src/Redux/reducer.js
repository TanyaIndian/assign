import { isLoggedIn } from "./actions";

const init = {auth: false}
;

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case isLoggedIn :
          return {...store,auth:store.auth = !payload}
    default:
      return store;
  }
};
// import { TOGGLE_AUTH } from "./action"

// const init = {auth: false}

// export const Authtoggle = (store=init,{type,payload})=>
// {
//   switch(type)
//   {
//       case TOGGLE_AUTH :
//           return {...store,auth:store.auth = !payload}

//     default:
//       return store
//   }
  

// }
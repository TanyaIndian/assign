export const isLoggedIn = "isLoggedIn"

export const toggle = (data)=>
{
      return  {
      type: isLoggedIn,
      payload :data
      
  }
}


import React, { useEffect } from 'react'

const Show = ({res}) => {
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Maratial status</th>
                </tr>
            </thead>
            {
                res.map((el)=>
                (
                  <tbody>
                      <tr>
                          <td>{el.name}</td>
                          <td>{el.age}</td>
                          <td>{el.Address}</td>
                          <td>{el.department}</td>
                          <td>{el.salary}</td>
                          <td>{el.martial_status}</td>
                      </tr>
                  </tbody>  
                )

                )
            }
        </table>
    </div>
  )
}

export default Show
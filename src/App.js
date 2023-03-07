// import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import { useState } from 'react';


function App() {
  const [userLogged,setUserLogged] = useState(false)
  const [customersList,setCustomersList] = useState([
    {name:"John",phone:"564328776",address:"Pt. Saint Road, Sodenburgh", dob:"1995-10-04"},
    {name:"Doe",phone:"654532199",address:"Pt. Saint Road, Peterseberg", dob:"1996-05-15"},
  ])

  // onsubmit=(values,{resetForm}) =>
  // {
  //   resetForm=({values:''})
  // }

  const [newCustomer,setNewCustomer] = useState({})
  return (
    <div className='page'>
      {!userLogged && <LoginForm setUserLogged={setUserLogged} />}
      <div className='container'>
      {userLogged ? <>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
        {customersList.map((e)=>(
          
            <tr>
              <td>{e.name}</td>
              <td>{e.phone}</td>
              <td>{e.address}</td>
              <td>{e.dob}</td>
            </tr>
          
        ))}
        </tbody>
      </table>
      </> : null}
      {userLogged? 
      <div className='details'>
          <div className='input-style'>
            <input type="text" name="" id="" placeholder="Customer Name" onChange={(e)=>setNewCustomer({...newCustomer, name: e.target.value })}/>
          </div>
          <div className='input-style'>
            <input type="text" name="" id="" placeholder="Phone number" onChange={(e)=>setNewCustomer({...newCustomer, phone: e.target.value })}/>
          </div>
          <div className='input-style'>
            <input type="text" name="" id="" placeholder="Address" onChange={(e)=>setNewCustomer({...newCustomer, address: e.target.value })}/>
          </div>

          <div className='input-style'>
            <input type="date" name="" id="" onChange={(e)=>setNewCustomer({...newCustomer, dob: e.target.value })} />
          </div>  
            
          <button className='input-style' onClick={()=>setCustomersList([...customersList,newCustomer])}>Add</button>

        
   </div>  : null}
   </div>
    </div>  
  );
}

export default App;

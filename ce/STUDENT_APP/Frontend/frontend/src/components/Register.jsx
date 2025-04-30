import React from 'react'
import axios from 'axios'
function Register() {
    const handleregister=async(e)=>{
        e.preventDefault();
        const user={
            name:e.target.name.value,
            age:e.target.age.value,
        }
        await axios.post(`http://localhost:5173/users`)
        alert('ho gya !! aap ho gye hain register haamari suwidhao ka laabh uthaayein')
    }
  return (
    <div>
      <h1>Register yourself up!!</h1>
      <form onSubmit={()=>handleregister} action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Enter your name' />
      <br />
      <label htmlFor="age">Age</label>
      
        <input type="number" name="age" placeholder='Enter your age' id="" />
      <br />  <button  type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register

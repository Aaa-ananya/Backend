import React from 'react'

function Update() {
 const  handleupdate=async(e)=>{
    e.preventDefault();
    const id=e.target.id.value;
    const name=e.target.name.value;
    const age=e.target.age.value;
    const data={name,age};
    await axios.put(/${id},data)
    alert("updated");

 }
    return (
    <div>
    <form onSubmit={()=>handleupdate} action="">
        <label htmlFor="id">ID:</label>
            <input type="text" name="id" />
    
    <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Enter your name' />
      <br />
      <label htmlFor="age">Age</label>
        <input type="number" name="age" placeholder='Enter your age' id="" />
      <br />  <button type='submit'>Submit</button> 
    </form>
    </div>
  )
}

export default Update

import React from 'react'

function Delete() {
    const handledelete=async(e)=>{
        e.preventDefault();
        const id=e.target.id.value;
        await axios.delete(/${id})
        alert{'ho gya delete'}
    }
      return (
    <div>
     <h1>Delete user</h1>
        <form action="" onSubmit={handledelete}>
            <input type="text" placeholder='enter product id' name='id'/>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Delete

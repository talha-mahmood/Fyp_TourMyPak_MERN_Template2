import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null
  })
  useEffect(() => {
    localStorage.getItem("user") && navigate("/")
  }, [])
  function register() {
    fetch("http://localhost:4000/signup", {
      method: "post",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(state)
    }).then((resp) => {
      resp.json().then((result) => {
        if(result.name=="admin"){
          alert("signup success")
          navigate('/admin')
        }else{
          alert(result.result)
        }
        
        
      })
    })
  }
  return (
    <div>
      <div className='blockmargin'>
        <h1 className='h1 text-center'>Register</h1>
        <div className='m-auto text-center '>
          <input className='m-auto flex mt-[5px] p-[10px] w-[300px] border-[1px] border-solid border-[skyblue]' type='text' placeholder='Enter Name'
            onChange={(event) => setState((prevState:any) => ({ ...prevState, name: event.target.value }))}></input>
          <input className='m-auto flex mt-[5px] p-[10px] w-[300px] border-[1px] border-solid border-[skyblue]' type='text' placeholder='Enter Email' onChange={(event) => setState((prevState:any) => ({ ...prevState, email: event.target.value }))}></input>
          <input className='m-auto flex mt-[5px] p-[10px] w-[300px] border-[1px] border-solid border-[skyblue]' type='text' placeholder='Enter Password' onChange={(event) => setState((prevState:any) => ({ ...prevState, password: event.target.value }))}></input>
          <button className='button mt-[10px]' onClick={() => register()}>Sign up</button>
        </div>

      </div>
    </div>
  )
}
export default Signup;
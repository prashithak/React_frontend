import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Employee = () => {
  let imageStyle = {
    height: "100%",
   //  width: "500px",
     backgroundImage:
     'url("https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg")',
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     color: "white", 
    
  };

  const [form,setForm]=useState({
    fname:'',
    dep:'',
    age:'',
    pos:'',
    salary:'',
    ph:0,
    uname:'',
    pwd:'',
  })

  function cap()
  {
    console.log(form);
  }
  return (
    <div style = {imageStyle}><br/>
      <Typography variant="h4" fontStyle={' italic'}> Employee Registration</Typography>
      <br/><br />
      <TextField id="outlined-basic" label="FIRST NAME" variant="outlined" color='warning' style={{width:'30%'}} value={form.fname}
      onChange={(e)=>{
        setForm({...form,fname:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-basic" label="DEPARTMENT" variant="outlined" color='warning'style={{width:'30%'}} value={form.dep}
      onChange={(e)=>{
        setForm({...form,dep:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-basic" label="AGE" variant="outlined" color='warning'style={{width:'30%'}}value={form.age}
      onChange={(e)=>{
        setForm({...form,age:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-basic" label="POSITION" variant="outlined" color='warning'style={{width:'30%'}}value={form.pos}
      onChange={(e)=>{
        setForm({...form,pos:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-basic" label="SALARY" variant="outlined" color='warning' style={{width:'30%'}}value={form.salary}
      onChange={(e)=>{
        setForm({...form,salary:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-basic" label="PHONE NUMBER" variant="outlined"color='warning'style={{width:'30%'}}value={form.ph}
      onChange={(e)=>{
        setForm({...form,ph:e.target.value})
      }}  />
      <br/><br/>
      <TextField id="outlined-basic" label="USERNAME" variant="outlined"color='warning'style={{width:'30%'}} value={form.uname}
      onChange={(e)=>{
        setForm({...form,uname:e.target.value})
      }} />
      <br/><br/>
      <TextField id="outlined-password-input"label="PASSWORD" type="password"color='warning' style={{width:'30%'}}value={form.pwd}
      onChange={(e)=>{
        setForm({...form,pwd:e.target.value})
      }} />
      <br/><br/>
         
        
      <Button variant="outlined" color="warning" onClick={cap()}>Register</Button>
      </div>
  )
}

export default Employee
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  let imageStyle = {
    height: "100%",
   //  width: "500px",
     backgroundImage:
     'url("https://img.freepik.com/free-vector/gradient-abstract-background-with-different-shapes_23-2149110297.jpg?w=1060&t=st=1710961269~exp=1710961869~hmac=13aa36bfef1e472684db408a3b70beaa67fe4392a26da3a92ca95a0cc6ace702")',
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     color: "white", 
  };

  const [dataset,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      setData(res.data);
  })
  },[])
  
  return (
    <div align='center' style = {imageStyle}>
      <br/>
      <br/>
      <br/>
      <br/>
      <TableContainer component={Paper }style={{width:'550px'}}  >
    <Table  size="medium" aria-label="a dense table" style={{backgroundColor:'lightblue'}} >
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">NAME</TableCell>
          <TableCell align="right">EMAIL</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody >
        {dataset.map((row) => (
          <TableRow  key={row.id} sx={{ border: 2 }}>

            <TableCell component="th" scope="row">{row.id}</TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            {/* <TableCell align="right"></TableCell> */}
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></div>
  )
}

export default Home
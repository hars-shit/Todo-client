import styled from '@emotion/styled'
import { ButtonBase, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo'


const Table=styled(TableContainer)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
})
const Delete=styled(ButtonBase)({
    borderRadius:3,
    // border:'0.1px solid gray',
    background:'#ad3a3a',
    color:'white',
    width:'4rem',
    height:'2rem'
})
const ListTodo=() =>{
    const [data,setData]=useState();
    const getTodos=async()=>{
        try{
            const response=await axios.get("http://localhost:5000/todos");
            setData(response.data);
            // console.log(data)
            // console.log(response.data)
    
        }
        catch(err){
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getTodos();
    },[])
    console.log(data)

    const deleteTodo=async(id)=>{
        try{
            const deleteTodo=await axios.delete(`http://localhost:5000/todos/${id}`)
            // console.log(deleteTodo)
            setData(data.filter(todo=>todo.todo_id !== id))

        }
        catch(err){
            console.error(err.message)
        }
    }
  return (
    <Table aria-label='simple table' >
        <TableHead>
            <TableRow >
                <TableCell sx={{fontSize:'1.3rem',fontWeight:700}}>Description</TableCell>
                <TableCell sx={{fontSize:'1.3rem',fontWeight:700}}>Edit</TableCell>
                <TableCell sx={{fontSize:'1.3rem',fontWeight:700}}>Delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {
           data && data.map((todo)=>(
                
                    <TableRow key={todo.todo_id} sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}>
                <TableCell align='right' >{todo.description}</TableCell>
                <TableCell align='right'><EditTodo todo={todo}/></TableCell>
                <TableCell align='right'><Delete onClick={()=>deleteTodo(todo.todo_id)}>Delete</Delete></TableCell>
                </TableRow>
                    
           ))
          }
        </TableBody>
    
    </Table>
  )
}

export default ListTodo
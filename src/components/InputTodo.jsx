import styled from '@emotion/styled'
import { ButtonBase, Container, InputBase, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const Input=styled(Container)({
    maxWidth:'100vh',
    padding:'20px 20px',
    height:'auto',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignContent:'center',
    alignItems:'center',
    marginTop:'5rem',
    '& > p':{
        fontSize:36,
        fontWeight:700,
        textAlign:'center'
    },
    '& > form':{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        marginTop:'4rem',
        '& > button':{
            borderRadius:1,
            border:'0.1px solid gray',
            background:'#ad3a3a',
            color:'white',
            width:'10%'

        }
    }
})
const InputBox=styled(InputBase)({
    width:'50%',
    border:'1px solid gray',
    borderRadius:2,
    paddingLeft:10,
    // display:'none'
})
const InputTodo=()=> {
    const [descp,setDescp]=useState('')
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!descp){
            alert("Description cannot be empty");
            return;
        }

        const body = {description: descp };
    const apiUrl='http://localhost:5000/todos';
    const headers={
            'Content-Type':'application/json'
        }
        // console.log("first")
        try{
            const response=await axios.post(apiUrl,JSON.stringify(body),{headers});
            // console.log(response.data)
            window.location="/";
        }
        catch(err){
            console.error(err.message);
        }
       
       
    }
  return (
    <Input>
    <Typography>Pern Todo List</Typography>
    <form onSubmit={handleSubmit}>
        <InputBox type='text' value={descp} onChange={e=>setDescp(e.target.value)}/>
        <button  type='submit'>Add</button>
    </form>
    </Input>
  )
}
export default InputTodo
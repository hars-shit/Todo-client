import { Box, ButtonBase, InputBase, Modal, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:'8rem',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const EditTodo=({todo})=> {
    // console.log("yy",todo)
    const [des,setDes]=useState(todo.description)
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateDes=async(e)=>{
    
        e.preventDefault();
        const body = {description: des };
        const apiUrl=`http://localhost:5000/todos/${todo.todo_id}`;
        const headers={
                'Content-Type':'application/json'
            }
            
            try{
                const response=await axios.put(apiUrl,JSON.stringify(body),{headers});
            
            window.location="/";

            }
            catch(err){
                console.error(err.message);
            }
            
            
           
           
        }

  
    return (
        <div>
          <ButtonBase onClick={handleOpen} sx={{background:'blue',borderRadius:1,color:'white' , width:'4rem',height:'2rem'}}>Edit</ButtonBase>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit Todo
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <InputBase sx={{border:'1px solid',borderRadius:1,paddingLeft:1,width:'100%',marginBottom:'2rem'}} value={des}  type='text' onChange={e=>setDes(e.target.value)}></InputBase>
              </Typography>
              <Box sx={{display:'flex',justifyContent:'space-around',width:'100%',alignItems:'center'}}>
                <ButtonBase sx={{background:'blue',borderRadius:1,color:'white' , width:'4rem',height:'2rem'}} onClick={e=>updateDes(e)}>Edit</ButtonBase>
                <ButtonBase sx={{background:'#ad3a3a',borderRadius:1,color:'white' , width:'4rem',height:'2rem'}} onClick={()=>setOpen(false)}>Close</ButtonBase>
              </Box>
            </Box>
          </Modal>
        </div>
      );
} 

export default EditTodo
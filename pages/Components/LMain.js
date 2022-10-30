import React,{useState} from 'react'
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';



function LMain() {
const [button, setButton] = useState(false);

function 
handleMouseEnter(e) {
  setButton(true);
}

function
handleMouseLeave() {
  setButton(false);
}

  return (
    <Box className='main' style={{border:'1px solid white',height:'507px',padding:'31px 31px'}}>
    <b className='Headers'>Spotify Playlists  <Typography style={{justifyContent:'flex-end',margin:'-22px 0 0 990px',fontSize:'11px'}} className='font'>SEE ALL</Typography></b>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
      <Box style={{display:'flex'}}>
   <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
    <Box   className='playbutton' style={{height:'50px',width:'50px',margin:'100px 0 0 100px'}}>
      {
        button? <div style={{padding:'10px',color:'#1fdf64',margin:'-4px 0 0 -2px'}} className='btn_action pp' ><BsFillPlayCircleFill/></div> :null
      }
     </Box>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
      </Box>
    
    <br/>
    <br/>
    <b className='Headers'>Focus <Typography style={{justifyContent:'flex-end',margin:'-22px 0 0 990px',fontSize:'11px'}} className='font'>SEE ALL</Typography></b>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
      <Box style={{display:'flex'}}>
   <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
      </Box>
    <br/>
    <br/>
    <b className='Headers'>Focus <Typography style={{justifyContent:'flex-end',margin:'-22px 0 0 990px',fontSize:'11px'}} className='font'>SEE ALL</Typography></b>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
      <Box style={{display:'flex'}}>
   <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
      </Box>
    <br/>
    <br/>
    <b className='Headers'>Focus <Typography style={{justifyContent:'flex-end',margin:'-22px 0 0 990px',fontSize:'11px'}} className='font'>SEE ALL</Typography></b>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
      <Box style={{display:'flex'}}>
   <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>  
    <Box style={{display:'flex',justifyContent:'space-between'}}>
    <Box style={{border:'1px solid white',width:'195px',display:'flex',height:'267px',borderRadius:'10px',margin:'20px 0 0 0',padding:'0 16px'}}>
   <Box style={{border:'1px solid white',width:'100%',display:'flex',height:'160px',borderRadius:'10px',margin:'20px 0 0 0'}}>
   </Box>
   </Box>
    </Box>
      </Box>
    <br/>
    <br/>

    </Box>
  )
}

export default LMain
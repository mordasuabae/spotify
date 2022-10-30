import React from 'react'
import { Box } from "@mui/system";

function LNavbar() {
  // "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  // 
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <Box style={{padding:'17px 31px',height:'64px',display:'flex'}}>
<button style={{borderRadius:'10px',background:"black",color:"white",border:'none'}} data-testid="top-bar-back-button" aria-label="Go back" disabled="" class="ql0zZd7giPXSnPg75NR0"><svg role="img" height="24" width="24" fill='white' class="Svg-ytk21e-0 dUrrjJ IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg></button>
<button style={{borderRadius:'10px',background:"black",color:"white",border:'none'}} data-testid="top-bar-forward-button" aria-label="Go forward" disabled="" class="ql0zZd7giPXSnPg75NR0 pfMoD1MbelMuF1m8QeMc"><svg role="img" height="24" width="24" fill='white' class="Svg-ytk21e-0 dUrrjJ IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg></button>
<Box style={{flexDirection:'flex-end',justifyContent:'space-evenly',margin:'-10px 0 0 740px'}}>
  <button style={{color:'white',background:'black'}} className='button'>Sign up</button>
<button style={{margin:'0 0 0 25px'}} className='button'><a href={AUTH_URL}>Log in</a></button>
</Box>

    </Box>
  )
}

export default LNavbar
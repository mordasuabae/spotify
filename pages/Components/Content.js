import React, {useState} from 'react'
import { Box } from "@mui/system";
import Main from './Main';
import Navbar from './Navbar';
import Player from './Player/Player';
import { songsdata } from './Player/audio';
import { useRef, useEffect } from 'react';


function Content() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);


  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration }); 

  }
  return (
    <Box style={{backgroundColor:'black',width:'100%',height:'900px',border:'1px solid white'}}>

<Box style={{display:'flex',height:'550px'}}>
<Box style={{color:'white',width:'18%',padding:'25px 20px'}}>
  <Box>
  <svg viewBox="0 0 1800 340" class="spotify-logo--text"><title>Spotify</title><path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
  </Box>
  <Box>
  <Box style={{display:'flex',margin:'20px 0 0 0'}}>
  < Box className='icons' style={{margin:'10px 0 0 0',}}> 
  <svg role="img"  height="24" width="24" class="Svg-ytk21e-0 eqtHWV home-active-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg>
     </Box>
     <Box style={{margin:'17px 0 0 10px'}}>
      Home
     </Box>
     </Box>
     <Box>

     </Box>
     <Box style={{display:'flex'}}>
  <Box className='icons' style={{margin:'10px 0 0 0'}}> 
  <svg role="img" height="24" width="24" class="Svg-ytk21e-0 eqtHWV search-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
  </Box>
  <Box style={{margin:'17px 0 0 10px'}}>
    Search
  </Box>
  </Box>
     <Box style={{display:'flex'}}>
      
   <Box className='icons' style={{margin:'10px 0 0 0'}}> 
   <svg role="img" height="24" width="24" class="Svg-ytk21e-0 eqtHWV collection-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
   </Box>

   <Box style={{margin:'17px 0 0 10px'}}>
      Your Library
     </Box>
     </Box>
  </Box>
  <br/>
  <Box >
  <Box   style={{display:'flex'}}>
  < Box className='icons' style={{margin:'20px 0 0 0',}}> 
  <div style={{border:'1px solid white',width:'24px',height:'24px',textAlign:'center',padding:'5px 0'}} class="q3ABXYJT9JZIzXOOtVuO"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 eqtHWV"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg></div>
     </Box>
     <Box style={{margin:'27px 0 0 10px'}}>
      Create Playlist
     </Box>
     </Box>
     <Box>

     </Box>
     <Box style={{display:'flex'}}>
  <Box className='icons' style={{margin:'10px 0 0 0'}}> 
  <div style={{border:'1px solid white',width:'24px',height:'24px',textAlign:'center',padding:'5px 0'}} class="Nd_DeCpszONzyaLe5Wd1"><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 eqtHWV"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg></div>
  </Box>
  <Box style={{margin:'17px 0 0 10px'}}>
    Liked Songs
  </Box>
  </Box>
     <Box className='line-break' style={{display:'flex'}}>
      
   <Box className='icons' style={{margin:'10px 0 0 0'}}> 
   <div style={{border:'1px solid white',width:'24px',height:'24px',textAlign:'center',padding:'5px 0'}} class="vCaNVEuqazhZFQNcVHZj"><div><svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 eqtHWV"><path d="M3.75 0A1.75 1.75 0 002 1.75v12.952c0 1.051 1.22 1.633 2.037.972l3.962-3.208 3.943 3.204c.817.663 2.038.082 2.038-.97V1.75A1.75 1.75 0 0012.23 0H3.75z"></path></svg></div></div>
   </Box>

   <Box  style={{margin:'25px 0 0 10px',padding:'15px 0'}}>
      <p style={{margin:'-25px 0 0 0'}}>Your Episodes</p>
     </Box>
   
     </Box>
   
   <Box className='bar'
    style={{margin:'10px 0 0 0',height:'130px'}}>
<Box>
  Rnb
</Box>
<br/>
<Box>
  Heat
</Box>
<br/>
<Box>
  Daily Duppy
</Box>
<br/>
<Box>
  Daily Mix
</Box>
<br/>
<Box>
  New and hot South Africa
</Box>
<br/>
<Box>
  My Playlist #2
</Box>
<br/>
<Box>
  My Playlist #1
</Box>
<br/>
<Box>
  Kizomba Top Hits
</Box>
   </Box>
<Box style={{display:'flex',margin:'10px 0 0 0'}}>
<Box className='icons' style={{color:'white', }}>
<svg style={{margin:'10px 0 0 0'}} role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" class="Svg-ytk21e-0 eqtHWV"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path><path d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"></path></svg> 
</Box>
<Box style={{margin:'16px 0 0 10px'}}>Install App</Box>
</Box>
  </Box>
</Box>
  
<Box style={{color:'white',width:'82%',}}>
  {/* Main Content */}
  <Navbar/>
  <Main/>
</Box>
</Box>
<Box className='mediaplayer' style={{width:'100%',margin:'0 0 0 0'}}>
<audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying}/>
<Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
  </Box>
</Box>
  )
}

export default Content
import { Box } from '@mui/material'


import Content from './Components/Content'

import Login from './Components/Login'
import Search from './Components/Search'


export default function Home() {
  return (
    <Box style={{height:'900px'}}>
      <Login/>
    {/* <Content/> */}
      {/* <Search/> */}
    </Box>
    
  )
}

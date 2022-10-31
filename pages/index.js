import { Box } from '@mui/material'

import styles from '../styles/Home.module.css'
import Content from './Components/Content'

import Login from './Components/Login'
import Search from './Components/Search'


export default function Home() {
  return (
    <Box style={{height:'900px'}}>
      <Login/>
      <Search/>
    {/* <Content/> */}
    </Box>
    
  )
}

import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from './Components/Content'

import Login from './Components/Login'


export default function Home() {
  return (
    <Box style={{height:'900px'}}>
      {/* <Login/> */}
    <Content/>
    </Box>
    
  )
}

import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import UserMenu from '../components/UserMenu'

export default function Home() {
  return (
    <>
      <Typography variant='h3' sx={{ mb: '20px' }}>Note App</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '20px' }}>
        <UserMenu />
      </Box>

      <Grid container sx={{ height: '50vh', boxShadow: '0 0 15px 0 rgb(193 193 193 / 60%)' }}>
        <Grid item xs={3} sx={{ height: '100%' }}>
          <p>Folder list</p>
        </Grid>
        <Grid item xs={9} sx={{ height: '100%' }}>
          <p>Note list</p>
        </Grid>
      </Grid>
    </>
  )
}

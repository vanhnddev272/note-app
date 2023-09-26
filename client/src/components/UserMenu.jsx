import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material'

export default function UserMenu() {
  const { user: { displayName, photoUrl, auth } } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleLogOut = () => {
    auth.signOut();
  }

  const handleDisplayLogout = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }} onClick={handleDisplayLogout}>
        <Typography>{displayName}</Typography>
        <Avatar alt='avatar' src={photoUrl} sx={{ width: 28, height: 28, marginLeft: '5px' }}></Avatar>
      </Box>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </>
  )
}

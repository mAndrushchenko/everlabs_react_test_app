import React from "react"
import { Navigate, useLocation } from "react-router"
import { Link, Outlet, Route, Routes } from "react-router-dom"

import { PersonalInfo } from "./PersonalInfo"
import { ProfileSettings } from "./ProfileSettings/ProfileSettings"
import { SecuritySettings } from "./SecuritySettings/SecuritySettings"
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material"

// Todo: get current relative path
const tabRoutes = [
  '/profile',
  '/profile/profile-settings',
  '/profile/security-settings'
]

export const Profile = () => {
  const { pathname } = useLocation()
  const activeTab = tabRoutes.includes(pathname) ? tabRoutes.indexOf(pathname) : 0

  return (
    <Container maxWidth="xl">
      <Box my={4} textAlign="center">
        <Typography variant="h3" as="h1">Profile</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Tabs value={activeTab} orientation={"vertical"}>
            <Tab label="Personal info" to={""} component={Link}/>
            <Tab label="Profile settings" to={"profile-settings"} component={Link}/>
            <Tab label="Security settings" to={"security-settings"} component={Link}/>
          </Tabs>
        </Grid>

        {/*<Grid item xs={10}>*/}
        {/*  <Outlet/>*/}
        {/*</Grid>*/}

        <Grid item xs={10}>
          <Routes>
            <Route index element={<PersonalInfo/>}/>
            <Route path="profile-settings" element={<ProfileSettings/>}/>
            <Route path="security-settings" element={<SecuritySettings/>}/>
            <Route path="*" element={<Navigate to=""/>}/>
          </Routes>
        </Grid>
      </Grid>
    </Container>
  )
}

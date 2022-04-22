import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { RoutesList } from "./RoutesList"

import { Home } from "../components/Home"
import { Words } from "../components/Words"
import { Photos } from "../components/Photos"
import { Header } from "../components/Header"
import { SignUp } from "../components/SignUp"
import { Todos, TodoList, TodoWrapper } from "../components/Todos"
import { PersonalInfo, Profile, ProfileSettings, SecuritySettings } from "../components/Profile"
import { NotFound } from "../components/NotFound"
import { Typography } from "@mui/material"


export const AppRoutes = () => (
  <BrowserRouter>
    <Header/>
    {/* Multiple sets of routes 2 */}
    <>
      {/*<Routes>*/}
      {/*  <Route path="/" exect element={<Typography>Another home</Typography>}/>*/}
      {/*  <Route path="todos/*" exect element={<Typography>Another Todos</Typography>}/>*/}
      {/*</Routes>*/}
    </>

    {/* Multiple sets of routes 1 */}
    <Routes>
      <Route path="/" exect element={<Home/>}/>
      <Route path="words" element={<Words/>}/>
      <Route path="photos" element={<Photos/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>

      {/* Nested Routes*/}

      <Route path="todos/*" element={<Todos/>}>
        {/* index */}
        <Route index element={<TodoList/>}/>
        <Route path=":todoId" element={<TodoWrapper/>}/>
        <Route path="info" element={<Typography variant={"h4"}>Info</Typography>}/>
      </Route>

      <Route path="profile/*" element={<Profile/>}>
        <Route index element={<PersonalInfo/>}/>
        <Route path="personal-info" element={<PersonalInfo/>}/>
        <Route path="profile-settings" element={<ProfileSettings/>}/>
        <Route path="security-settings" element={<SecuritySettings/>}/>
      </Route>

      {/*<Route path="profile/*" element={<Profile/>}/>*/}

    </Routes>

    {/* useRoutes */}
    {/*<RoutesList/>*/}
  </BrowserRouter>
)

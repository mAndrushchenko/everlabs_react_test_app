import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../components/Home"
import { Words } from "../components/Words"
import { Photos } from "../components/Photos"
import { Header } from "../components/Header"
import { SignIn } from "../components/SignUp"
import { Todos, TodoList, TodoWrapper } from "../components/Todos"
import { PersonalInfo, Profile, ProfileSettings, SecuritySettings } from "../components/Profile"
import { NotFound } from "../components/NotFound"


export const AppRoutes = () => (
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="words" element={<Words/>}/>
      <Route path="todos/*" element={<Todos/>}>
        <Route index element={<TodoList/>}/>
        <Route path=":todoId" element={<TodoWrapper/>}/>
      </Route>
      <Route path="photos" element={<Photos/>}/>
      <Route path="sign-up" element={<SignIn/>}/>



      {/*<Route path="profile" element={<Profile/>}>*/}
      {/*  <Route index element={<PersonalInfo/>}/>*/}
      {/*  <Route path="profile-settings" element={<ProfileSettings/>}/>*/}
      {/*  <Route path="security-settings" element={<SecuritySettings/>}/>*/}
      {/*</Route>*/}

      <Route path="profile/*" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
)

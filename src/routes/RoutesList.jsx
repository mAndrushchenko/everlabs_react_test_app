import React from "react"
import { useRoutes } from "react-router"

import { Typography } from "@mui/material"
import { Home } from "../components/Home"
import { Words } from "../components/Words"
import { Photos } from "../components/Photos"
import { SignUp } from "../components/SignUp"
import { NotFound } from "../components/NotFound"
import { TodoList, Todos, TodoWrapper } from "../components/Todos"
import { PersonalInfo, Profile, ProfileSettings, SecuritySettings } from "../components/Profile"


export const RoutesList = () => (
  // useRoutes
  useRoutes([
    { path: "/", element: <Home/> },
    { path: "words", element: <Words/> },
    { path: "photos", element: <Photos/> },
    { path: "sign-up", element: <SignUp/> },
    { path: "/*", element: <NotFound/> },
    {
      path: "todos", element: <Todos/>,
      children: [
        { index: true, element: <TodoList/> },
        { path: ":todoId", element: <TodoWrapper/> },
        { path: "info", element: <Typography variant={"h4"}>Info</Typography> }
      ]
    },
    {
      path: "profile", element: <Profile/>,
      children: [
        { index: true, element: <PersonalInfo/> },
        { path: "profile-settings", element: <ProfileSettings/> },
        { path: "security-settings", element: <SecuritySettings/> }
      ]
    }
  ])
)

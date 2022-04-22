import React, { useState } from "react"

import { SingUpForm } from "../SingUpForm"
import { Box, Container } from "@mui/material"
import { onChangeFormHelper } from "../../utils"

const initialFormState = {
  gender: "",
  firstName: "",
  lastName: "",
  successRange: 0,
  isMarried: false,
  hasChildren: false
}

export const SignUp = () => {
  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState(initialFormState)

  const handleSignUpForm = (event) => {
    console.log(event.target.required)
    setForm(prev => ({ ...prev, ...onChangeFormHelper(event) }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    setForm(initialFormState)
  }

  return (
    <Container maxWidth={"xs"}>
      <Box mx={"auto"} my={4}>
        <SingUpForm form={form} errors={errors} onSubmit={onSubmit} handleSignUpForm={handleSignUpForm} />
      </Box>
    </Container>
  )
}

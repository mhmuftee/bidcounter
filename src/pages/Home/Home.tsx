import React from "react"

import { styled } from "@mui/material/styles"

const Details = styled("div")(() => ({
  top: 0,
  left: 0,
  flexGrow: 1,
  width: "100%",
  height: "100%",
  margin: "auto",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "center",
}))

const Home = () => {
  return <Details>Test</Details>
}

export default Home

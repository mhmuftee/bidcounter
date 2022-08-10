import React from "react"

import { Home as HomeIcon } from "@mui/icons-material"
import { IPage } from "types"

const Home = React.lazy(() => import("./Home"))
//const Skills = React.lazy(() => import("./Skills"))

const HomePage: IPage = {
  id: "Home",
  path: "/",
  header: "Home",
  title: "BidCounter",
  Icon: HomeIcon,
  Component: Home,
}

const routes = [HomePage]

export { routes }

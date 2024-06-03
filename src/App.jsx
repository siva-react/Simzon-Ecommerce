import React, { Fragment, useLayoutEffect } from "react"
import GlobalStyle from "@theme/GlobalStyle"
import { Route, Routes, useLocation } from "react-router-dom"
import { linkList } from "@router/config/routes"
import WebLayout from "@layout/WebLayout/WebLayout"

function App() {

  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Fragment>
      <GlobalStyle />
      <WebLayout>
        <Routes>
          {linkList.map(({ routePath, Component }) => {
            return (
              <Route
                key={routePath}
                path={routePath}
                element={<Component />}
              ></Route>
            )
          })}
        </Routes>
      </WebLayout>
    </Fragment>
  )
}

export default App

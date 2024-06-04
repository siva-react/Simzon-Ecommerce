import React from 'react'
import Header from '@layout/WebLayout/Partials/Header'
import Footer from '@layout/WebLayout/Partials/Footer'

const WebLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default WebLayout
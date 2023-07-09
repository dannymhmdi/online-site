import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from 'react-helmet-async'
const BasePage = ({children , fluid ,style , title}) => {
  return (
    <div className={fluid ? 'container-fluid' : 'container'}  style={style}>

      {children}
    </div>
  )
}

export default BasePage
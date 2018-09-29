import React, { Fragment } from 'react'
import enhancer from './enhancer'
import Visitor from '../Visitor'
import LoggedIn from '../LoggedIn'

let CheckAuth = ({ loggedIn }) => (
  <Fragment>{loggedIn ? <LoggedIn /> : <Visitor />}</Fragment>
)

export default enhancer(CheckAuth)

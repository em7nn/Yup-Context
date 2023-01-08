import React from 'react'
import {LoginForm} from './LoginForm'
import LoginLogo from './Logo'
import "./index.scss"
function LoginMain() {
  return (
    <div className='mainn'>
    <LoginLogo/>
    <LoginForm/>
    </div>
  )
}

export default LoginMain
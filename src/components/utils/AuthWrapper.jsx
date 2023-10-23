import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavbar from './AuthNavbar'

const AuthWrapper = () => {
  return (
    <div>
        <div>
            <AuthNavbar />
        </div>

        <Outlet />
    </div>
  )
}

export default AuthWrapper
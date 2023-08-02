import React from 'react'
import {LogOut} from 'react-feather'
import { userAuth } from '../utils/AuthContext'

const Header = () => {
const {user, handleUserLogOut} = userAuth()

    return (
        <div id="header--wrapper">
            {user?(
            <>
                Welcome {user.name}
                <LogOut onClick={handleUserLogOut} className = 'header--link'/>
                
            </>
            ):(
                <button>Login</button>
            )}
        </div>
    )
}

export default Header
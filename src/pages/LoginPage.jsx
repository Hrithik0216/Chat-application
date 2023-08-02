import React, { useEffect, useState } from 'react'
import { userAuth } from '../utils/AuthContext'
import { useNavigate, Link } from 'react-router-dom'


const LoginPage = () => {
    const { user, handleUserLogin } = userAuth()
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (user) {
            navigate('/')
        }

    }, [])

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setCredentials({ ...credentials, [name]: value })
        //console.log(credentials)
    }

    return (
        <div className='"auth--container'>
            <div className="heading">
                <h2 className=''>Hrithik' Chat application</h2>
                <h4>Enter your login details</h4>
            </div>

            <div className="form--wrapper">
                <form onSubmit={(e) => { handleUserLogin(e, credentials) }}>
                    <div className="field--wrapper">
                        <label>Email:</label>
                        <input type="email" required
                            name="email"
                            placeholder='Enter your mail'
                            value={credentials.email}
                            onChange={handleInputChange} />
                    </div>
                    <div className="field--wrapper">
                        <label>Password:</label>
                        <input type="password" required
                            name="password"
                            placeholder='Enter your password'
                            value={credentials.password}
                            onChange={handleInputChange} />
                    </div>
                    <div className="field--wrapper">
                        <input className='btn btn--lg btn--main' type="submit"></input>
                    </div>
                </form>
                <p>Don't have an account yet? Register <Link to="/register">Here</Link></p>
            </div>

        </div>
    )
}

export default LoginPage
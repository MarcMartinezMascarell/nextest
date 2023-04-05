import { useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

import loginStyles from '@/styles/Login.module.css'
import ErrorMessage from '@/components/errorMessage.js'

export default function LoginForm({setToken}) {
    const [error, setError] = useState('')
    const { setValue } = useLocalStorage('user', {})

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const username = document.getElementById('login_username').value
        const password = document.getElementById('login_password').value
        if(!username || !password) setError('Please enter username and password')
        else fetchLogin(username, password)
    }

    const fetchLogin = async (username, password) => {
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(async (response) => {
            const error = response.status != 200
            const data = await response.json()

            if(error) setError(data.message)
            else {
                setToken(data.token)
                setValue(JSON.stringify(data.user))
            }
        })
        .catch((error) => {
            console.log('Error')
            setError(error)
        })
    }
    
    return (
        <div className={loginStyles.form}>
            <form className={loginStyles.form}>
                <input className={loginStyles.input} id="login_username" name="username" type="text" placeholder="Username" />
                <input className={loginStyles.input} id="login_password" name="password" type="password" placeholder="Password" />
                <button className={loginStyles.button} type="submit" onClick={handleOnSubmit}>Login</button>
            </form>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}
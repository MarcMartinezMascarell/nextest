import { useState } from 'react'
import LoginForm from '@/components/loginForm.js';
import TwoFactor from '@/components/twoFactor';

export default function LoginWrapper() {
    const [twoFAToken, settwoFAToken] = useState(null)
    return (twoFAToken) ? <TwoFactor token={twoFAToken} /> : <LoginForm setToken={settwoFAToken} />
}
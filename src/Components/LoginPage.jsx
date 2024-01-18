import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchFlyers } from "../services/fetchFlyers"
// import { logIn, signUp } from "../services/fetchUser"

import "../stylesheets/LoginPage.css"
import RedButton from "./RedButton"

export default function LoginPage() {
    const { isPending, data } = useQuery({
        queryKey: ['flyer'],
        queryFn: fetchFlyers('login'),
        refetchOnWindowFocus: false,
    })

    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const user = useQuery({
    //     queryKey: ['user'],
    //     queryFn: fetchUser(),
    //     refetchOnWindowFocus: false,
    // })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isLogin) {
            console.log('create account')
        } else {
            console.log('log in')
        }
    }

    if (isPending) {
        return
    }

    return (
        <div className="login-page">
            <div className="flyer">
                <img src={data[0].image} />
            </div>
            <div className="form center-child">
                <form className="login">
                    <h1>{isLogin ? "Create an account" : "Log in to Exclusive"}</h1>
                    <h2>Enter your details below</h2>
                    {isLogin && <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />}
                    <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" required value={password} pattern='^.{5,}$' onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                        <RedButton text={isLogin ? "Create account" : "Log In"} clickFn={handleSubmit} />
                        {isLogin ?
                            <p>Already have an account? <span onClick={() => setIsLogin(false)}>Log in</span></p>
                            :
                            <p>Don't have an account? <span onClick={() => setIsLogin(true)}>Create an account</span></p>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
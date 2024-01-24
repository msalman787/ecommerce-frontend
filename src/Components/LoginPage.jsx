import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { fetchFlyers } from "../services/fetchFlyers"
import { logIn, signUp } from "../services/fetchUser"

import "../stylesheets/LoginPage.css"
import RedButton from "./RedButton"
import { useDispatch } from "react-redux"
import { userSet } from "../state/userSlice"

export default function LoginPage() {
    const dispatch = useDispatch()

    const { isPending, data } = useQuery({
        queryKey: ['flyer'],
        queryFn: fetchFlyers('login'),
        refetchOnWindowFocus: false,
    })

    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const clearInputs = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        const timeId = setTimeout(() => { setErrorMessage('') }, 20000)
        return () => clearTimeout(timeId)
    }, [errorMessage])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isLogin) {
            console.log('create account')
            const { status, data } = await signUp(name, email, password)

            if (status === 201) {
                dispatch(userSet(data))
                console.log('user succesfully created', data)
                setErrorMessage('Account created succesfully and loggined in')
                clearInputs()
            } else if (status === 400) {
                console.log('Bad request')
                console.log('error is ', data)
                setErrorMessage([Object.keys(data).map(key => `${key}: ${data[key][0]}`)].join('\n'))
            } else if (status >= 500) {
                console.log('server error')
            } else {
                console.log('error occured')
            }
        } else {
            console.log('log in')
            const { status, data } = await logIn(email, password)
            if (status === 200) {
                dispatch(userSet(data))
                console.log('user succesfully logged in', data)
                setErrorMessage('Logged in succesfully')
                clearInputs()
            } else if (status == 'failed') {
                console.log('error occured')
                setErrorMessage([Object.keys(data).map(key => `${key}: ${data[key]}`)].join('\n'))
            }
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
                    {errorMessage.length > 0 &&
                        <h2 className="error-message">{errorMessage}</h2>
                    }
                    <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                        <RedButton text={isLogin ? "Create account" : "Log In"} clickFn={handleSubmit} type='submit' />
                        {isLogin ?
                            <p>Already have an account? <span onClick={() => {
                                setIsLogin(false)
                                setErrorMessage('')
                            }}>Log in</span></p>
                            :
                            <p>Don't have an account? <span onClick={() => {
                                setIsLogin(true)
                                setErrorMessage('')
                            }}>Create an account</span></p>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
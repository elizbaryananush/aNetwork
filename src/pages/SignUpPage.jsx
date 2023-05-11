import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myAccountactions } from '../redux/myAccountSlice.js'
import { Link } from 'react-router-dom'

function SignUpPage() {
    let [userName1, setUserName] = useState('')
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    const [stylee, setStyle] = useState('none')
    const [wrong, setWrong] = useState('none')
    const dispatch = useDispatch()

    const state = {
        name: name,
        userName: userName1,
        password: password
    }


    const user = useSelector(state => state.my)

    useEffect(() => {
        if (userName1 === user.userName || name.length < 1 || userName1.length < 1 || password.length < 1) {
            document.getElementById('btn').disabled = true;
        } else if (userName1 === user.userName) {
            setWrong('flex');

        } else {
            document.getElementById('btn').disabled = false;
            setWrong('none');
        }
    }, [password , userName1 , name])

    const signup2 = () => {
        dispatch(myAccountactions.signup(state))
        setUserName("")
        setName("")
        setPassword("")
    }
    const a = userName1

    return (
        <div className='sign'>
            <form action="">
                <label>Name</label>
                <input id='input' required type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            <form action="" className='userName'>
                <label>username</label>
                <div>
                <input id='input' required onBlur={() => setStyle('none')} value={userName1} onFocus={() => setStyle('flex')} type="text" onChange={e => setUserName(e.target.value)} pattern="[a-z]{4,8}" />
                    <p className={stylee}>username cannot contain spase</p>
                    <p className={wrong}>username existed</p>
                </div>
            </form>
            <form action="">
                <label>Password</label>
                <input id='input' required type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            <Link to={'/'}>
                <button className='btn' onClick={signup2} id='btn'>sign up</button>
            </Link>
        </div>
    )
}

export default SignUpPage

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

function OtherAccount() {
    const namep = useParams()
    const name = namep.name.replace(':', '')
    const [account, setAccount] = useState()
    const [icon, setIcon] = useState(true)
    console.log(name);

    const users = useSelector(state => state.accounts.accList)

    useEffect(() => {
        users.map(item => {
            if (item.userName === name) {
                console.log(item);
                setAccount(item)
            }
        })
    }, [])


    if (account) {
        console.log(account.pfp);
    }
    return (
        <div>
            {account ? <div className='My'>
                <div className='Header'>
                    <img src={account.pfp} alt="" />
                    <h1>{account.userName}</h1>
                </div>
                <div className='Posts'>
                    {
                        account.posts.map(item => {
                            return <div className='post'>
                                <p>{account.userName}</p>
                                <img src={item.image} />
                                <div className="like">
                                    <svg onClick={() => setIcon(!icon)} style={icon ? { display: 'none' } : { display: 'flex' }} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" /></svg>
                                    <svg onClick={() => setIcon(!icon)} style={icon ? { display: 'flex' } : { display: 'none' }} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" /></svg>
                                </div>
                                <div className='text'>
                                    <p>{account.userName} </p>
                                    <h6>{item.text}</h6>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div> : null
            }
        </div>
    )
}

export default OtherAccount

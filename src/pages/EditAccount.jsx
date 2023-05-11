import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myAccountactions } from '../redux/myAccountSlice';

function EditAccount() {
    const user = useSelector(state => state.my.account)
    const dispatch = useDispatch()
    let loadFile = function (e) {
        let image = document.getElementById('output');
        dispatch(myAccountactions.changepfp({
            pfp: URL.createObjectURL(document.getElementById('file').files[0]),
        }))
    };

    console.log(user);
    return (
        <div className='editAcc'>
            <div className='pfp'>
                <h1>Profile Picture</h1>
                <img id='output' width="500" src={user.pfp} />
                <p><input type="file" accept="image/*" name="image" id="file" onChange={(event) => loadFile(event)} style={{ display: "none" }} /></p>
                <label className='change btn' content='' htmlFor="file" type="button" style={{ cursor: "pointer" }}>change profile picture</label>
            </div>
            <div className='info'>
                <h1>Username: {user.userName}</h1>
                <h1>Name: {user.name}</h1>
            </div>
        </div>
    )
}

export default EditAccount

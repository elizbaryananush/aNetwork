import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { myAccountactions } from '../redux/myAccountSlice';

function NewPostPage() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  let loadFile = function (e) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(document.getElementById('file').files[0])
  };

  const my = useSelector(state => state.my.account)

  const addNewPost = () => {

    let image = document.getElementById('output')
    let url = `'` + image.src

    dispatch(myAccountactions.addNewPost({
      image: url,
      text: text
    }))
    image.src = ''
    setText('')
  }
  console.log(my)
  return (
    <div className='new'>
      {/* <input type="file" id='file' onChange={(e)=>loadFile(e)}/> */}
      <input type="file" accept="image/*" name="image" id="file" onChange={(event) => loadFile(event)} style={{ display: "none" }} />
      <label id='image' content='' htmlFor="file" style={{ cursor: "pointer" }}><img id="output" width="500" /></label>
      <p> click to upload image</p>
      <textarea style={{ resize: 'none' }} placeholder='context' value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button className='btn' onClick={addNewPost}>Post</button>
    </div>
  )
}

export default NewPostPage

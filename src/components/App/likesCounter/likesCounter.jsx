import { useState } from 'react'

function likesCounter(props){
  const [myLikes, setMyLikes]=useState(0)

  const addLike=()=>{
    setMyLikes(myLikes+1)}

return (<>
    <h2>{props.likes}</h2>
    <button onClick={addLike}>Increase</button>
</>);
}


export default likesCounter;
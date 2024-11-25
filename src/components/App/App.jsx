import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';
// import likesCounter from './likesCounter/likesCounter';

function App() {
  //need a useState function to retrieve the images and there current status
  const [getImageList, setImageList] = useState([]);

  //need useEffect to render the list when the page loads
  useEffect(()=>{
    fetchImages();
  },[])

  //need a get request that will retrieve the data 
  const fetchImages = () => {
    console.log('fetchImages')
 
    axios({
      method: "GET",
      url: "/api/gallery"
    })
    .then((response)=>{
      console.log("response from get app.jsx", response.data);
      setImageList(response.data)
    })
    .catch((error)=>{
      console.log("error on get in app.jsx", error);
    });
  };//!End of GET

//function to add likes
// function likeCounter(){
  const [myLikes, setMyLikes]=useState(0)

  const addLike=()=>{
    setMyLikes(myLikes+1)
  }

  

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        
        <p>The gallery goes here!</p>
        <div>
          {/* use the figure element to help group items 
          might need to make adjustments to figcaption to get the 
          correct functionality*/}
        {getImageList.map((image)=>(
          <figure key={image.id}>
            <img src={image.url}/>
            <figcaption>
              <h2>{image.title}</h2>
              <p><button onClick={addLike}>Add Likes</button>{image.likes} Likes</p>
              {/* <button onClick={addLike}>Add Likes</button> */}
              
            </figcaption>
          </figure>
        ))}
       </div>

        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
  }

export default App;

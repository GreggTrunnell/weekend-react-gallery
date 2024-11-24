import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';

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
  }

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        
        <p>The gallery goes here!</p>

        <div>
          {/* use the figure element to help group items */}
        {getImageList.map((image)=>(
          <figure key={image.id}>
            <img src={image.url}/>
            <figcaption>
              <h2>{image.title}</h2>
              <p>{image.likes} Likes</p>
            </figcaption>
          </figure>
        ))}
       </div>
        {/* {getImageList.map((image)=>(
             <span key={image.id}> <br /><img src={image.url}/> <br /> {image.title} {image.likes} </span> 
          ))}
          <br/> */}
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;

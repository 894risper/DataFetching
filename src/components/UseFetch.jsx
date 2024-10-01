import React from 'react'
import { useState ,useEffect} from 'react'
const UseFetch = () => {
    const [photos,setPhotos]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setPhotos(data);
        })
        
    },[]);
    

  return (
    <div>UseFetch
        {photos.map((photo)=>(
           <img key={photo.id} src={photo.url} alt={photo.tittle} width={100}/>
        ))}
    </div>
  );
};

export default UseFetch;
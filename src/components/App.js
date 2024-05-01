// create your App component here
import React,{useEffect, useState} from "react";
function App (){
    const [loaded,setLoaded]=useState(false)
    const [image,setImage]=useState(null)
    const url = "https://dog.ceo/api/breeds/image/random"
    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(data=>{setImage(data.message)
         setLoaded(true)
        }).catch(err=>console.error(`error fetching random dog pic ${err}`))
    },[])
    return (
        <>
        <h1>Random Dog Image</h1>
        {loaded ? <img alt="A Random Dog" src={image}/>:<p>Loading...</p>}
        
        </>
    )
}
export default App
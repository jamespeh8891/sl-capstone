import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const Songs = () => {


    const [songs,setSongs] = useState([])

    useEffect(()=>{
        axios.get('localhost/:5000/getAllSongs').then((res)=>{
            console.log(res.data)
            setSongs(res.data)
        })




    })

  return (
    <div className='Songs'>

        {songs.length==0 ? <p>Loading...</p> : 
        songs.map((element)=>{
            return(
                <p>{element}</p>
            )
        })
        }
    </div>
  )
}
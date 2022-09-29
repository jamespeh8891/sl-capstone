import React, {useState} from 'react';
import Axios from 'axios';
import id from './postform.module.css'

function PostForm() {
    const url=''
    const [data, setData] = useState({
        favorite: ''
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            favorite: data.favorite
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id='favorite' value={data.favorite} placeholder='favorite' type='text'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostForm;
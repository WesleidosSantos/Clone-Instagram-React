import { Suggestion } from '../Suggestion'
import './style.css'
import { useEffect, useState } from 'react'

export function Story(){

    const[suggestions, setSuggestion] = useState([])

    const[limitUsers, setLimitUsers] = useState(6)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/wesleidossantos/followers`)
        .then((response) => {
             return response.json()
        })

        .then((result) => {
            setSuggestion(result)

        })
        .catch((err) =>{
            throw new Error(err)
        })

}, [])

    return(
       <div className="container" >
        

        {slice.map((suggestion, key)=>(
           <div className="user-elements" key={key}>
           <div>
               <img className="image-user-story" src={`https://github.com/${suggestion.login}.png`}/>

           </div>

           <span>{suggestion.login}</span>

        </div>


        ))}
 

</div>


       
    )
}
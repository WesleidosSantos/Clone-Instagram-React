import './style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { useEffect, useState } from 'react'
import { Suggestion } from '../Suggestion'

export function Post() {

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

         
         <>

         {slice.map((suggestion, key) => (
            <>
             <header className="header-post" key={key}>
 
             <div className="infos-post" >
                     <img className="image-header-post"src={`https://github.com/${suggestion.login}.png`}/>

                     <p>{suggestion.login}</p>
             </div>

                    <FiMoreHorizontal/>
        </header>
            <div className="img-post" key={key} >
            <img src={`https://github.com/${suggestion.login}.png`}/>
        </div>

        <div className="footer-post">
        <IconContext.Provider value = {{size: "30px"}} >
          <section className="engagement-post" >
         <div className="Icons-1">
             <div className="icon"><IoMdHeartEmpty/></div>
             <div className="icon"><BsChat/></div>
             <div className="icon"><FiSend/></div>
         </div>
 
         <div className="icon"><BsBookmark/></div>
      </section>
        </IconContext.Provider>
        </div>

        <section className="like" >
         <span> 70 curtidas </span>
      </section>
 
      <div className="legend">
         <p>
             <strong>{suggestion.login}</strong>
         </p>
      </div>
 
      <div className="time-post">
           <time>HÁ 1 HORA</time>
      </div>
 
      <div className="comment">
 
         <div className="fake-comment">
 
             <IconContext.Provider value={{size:"25px"}}>
             
             <div className="icon">
                <BsEmojiSmile/>
             </div>
 
             </IconContext.Provider>
              
 
              <input placeholder="Adicione um comentário..." />
 
              
 
         </div>
 
         <button>Publicar</button>
 
      </div>

        </>
         ))}
 
       </>

      
    ) 
}
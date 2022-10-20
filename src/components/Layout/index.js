import './style.css'

import { Story } from '../Story'

export function Layout () {
    return(
        <>

         <div className="MainGrid" >

         <div className="first-column" style={{gridArea:"firstColumn"}} >
         <div className="box">
             <Story/>
           </div>

           <div className="box">
             post
           </div>
           
         </div>

         <div className="suggestionbox" style={{gridArea:"secondColumn"}}>
             sugestão
         </div>
         </div>
      </>
    )
}
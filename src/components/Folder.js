import React, {useState} from "react";

 const Folder=({name,children})=>{
     const[isOpen,setIsOpen] = useState(true);
     const handleClick=() => setIsOpen(!isOpen);
     const direction =isOpen ? 'down':'right'
     return(
         <div>             
             <span onClick={handleClick}>
                 <i className="ui blue folder icon"> </i>  
                 <i className={`ui caret ${direction} icon`}></i>
             </span>{name}
             <div style={{marginLeft: '17px'}}>
                 {isOpen? children:null}
             </div>
         </div>
     )
 }
 export default Folder
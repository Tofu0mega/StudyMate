import React,{useState,useContext} from 'react'
import SubjectShow from '../SubjectShow/SubjectShow';

export default function Feed() {
    //StateVariables
    const [SeachTerm, setSeachTerm] = useState();
    const [SeachType, setSeachType] = useState();
    //HandleFunctions
    const handleSeacrh=()=>{

    }




    //RestfulFunctions
    


    //InitializationFunctions
    
  return (
    <div>
        <div className='searchbar'>
            <input type="text" onChange={(e)=>{setSeachTerm(e.target.value)}} />
            <button className="searchButton">Search</button>
        </div>
        <div className="Content">
          <SubjectShow/>
        </div>
      
    </div>
  )
}

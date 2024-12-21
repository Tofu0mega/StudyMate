import React,{useState,useContext} from 'react'
import SubjectShow from '../SubjectShow/SubjectShow';
import "./Feed.css"

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
            <select name="SearchBy" id="dropdown" onChange={()=>{setSeachType(e.target.value)}}>
              <option value="Institution">Insititution</option>
              <option value="Year">Year</option>
              <option value="Subject">Subject</option>
              
            </select>
            <button className="searchButton" onClick={handleSeacrh}>Search</button>

        </div>
        <div className="Content">
          <SubjectShow />
        </div>
      
    </div>
  )
}

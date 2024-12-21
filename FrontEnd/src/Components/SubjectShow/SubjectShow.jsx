import React from 'react'
import "./SubjectShow.css"
export default function SubjectShow({showtype}) {
  return (
    <div>
        <div className="SubjectCards">

        </div>
        <div className="AddformButton">
            <button className="AddForm" onClick={()=>{window.location.href="/AddSubjectForm"}}>AddSubject</button>
        </div>
      
    </div>
  )
}

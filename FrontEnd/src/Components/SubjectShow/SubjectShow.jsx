import React from 'react'

export default function SubjectShow() {
  return (
    <div>
        <div className="SubjectCards">

        </div>
        <div className="AddformButton">
            <button className="AddForm" onClick={()=>{window.location.href="/AddSubject"}}>AddSubject</button>
        </div>
      
    </div>
  )
}

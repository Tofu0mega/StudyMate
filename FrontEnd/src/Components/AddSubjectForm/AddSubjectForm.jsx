import React, { useState } from 'react';
import "./AddSubjectForm.css"
import { POSTDATA } from '../../utils/APICalls';
export default function AddSubjectForm() {
  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [Error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from refreshing
    const Id = localStorage.getItem("UserId");
    const subjectdata = {
      name: subjectName,
      code: subjectCode,
      userId: Id
    };
  
    const apisubmit = async () => {
      try {
        const response = await POSTDATA("subject/addSubject", subjectdata);
        if (!response.ok) {
          const message = await response.json();
          setError(message);
        } else {
          console.log('Subject added successfully');
          window.location.href = "/Home";  // Redirect to Home
        }
      } catch (error) {
        setError('Something went wrong, please try again.');
      }
    };
  
    apisubmit();
  };
  

  return (
    <form onSubmit={handleSubmit} className="add-subject-form">
      <div className="form-group">
        <label htmlFor="subjectName">Subject Name</label>
        <input
          type="text"
          id="subjectName"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subjectCode">Subject Code</label>
        <input
          type="text"
          id="subjectCode"
          value={subjectCode}
          onChange={(e) => setSubjectCode(e.target.value)}
          required
        />
      </div>
      {Error && (
        <>
          <div className="ErrorMessageContainer">
            <h1 className="ErrorText">{Error}</h1>
          </div>
        </>
      )}
      <button type="submit" className="submit-button">Add Subject</button>
    </form>
  );
}

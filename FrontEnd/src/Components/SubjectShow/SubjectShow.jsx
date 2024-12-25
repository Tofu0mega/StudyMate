import React, { useState, useEffect } from 'react';
import "./SubjectShow.css";
import { GETDATA, POSTDATA } from '../../utils/APICalls';
import DisplayCard from '../DisplayCards/DisplayCard';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';

export default function SubjectShow({ showtype }) {
  const [Subjects, setSubjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    const fetchSubjects = async () => {
      try {
        const response = await GETDATA(`users/getSubject/${userId}`);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setSubjects(data.subjects);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjects();
  }, []);

  const handleDelete = (subjectId) => {
    setSubjectToDelete(subjectId);
    setShowPopup(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await POSTDATA(`subject/deleteSubject/${subjectToDelete}`);
      if (!response.ok) {
        const message = await response.json();
        console.error('Error deleting subject:', message);
        // Optionally set error state here
      } else {
        console.log('Subject deleted successfully');
        setSubjects(Subjects.filter(subject => subject._id !== subjectToDelete));
      }
    } catch (error) {
      console.error('Something went wrong, please try again.');
      // Optionally set error state here
    }
    setShowPopup(false);
  };

  return (
    <div>
      <div className="subject-cards-container">
        {Subjects && Subjects.map((subject) => (
          <DisplayCard
            key={subject._id}
            subjectName={subject.name}
            subjectCode={subject.code}
            subjectId={subject._id}
            onDelete={handleDelete}
            displayType={"Subject"}
          />
        ))}
      </div>
      <div className="AddformButton">
        <button className="AddForm" onClick={() => { window.location.href = "/AddSubjectForm" }}>AddSubject</button>
      </div>
      {showPopup && (
        <ConfirmationPopup
          message="Are you sure you want to delete this subject?"
          onConfirm={confirmDelete}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
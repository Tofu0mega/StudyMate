import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DisplayCard.css';
import { POSTDATA } from '../../utils/APICalls';

const DisplayCard = ({ subjectName, subjectCode, subjectId, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${subjectId}`);
  };

  const handleDelete = (event) => {
    event.stopPropagation(); // Prevent navigation when the delete button is clicked
    onDelete(subjectId);
  };

  return (
    <div className="subject-card" onClick={handleClick}>
      <div className="subject-banner">{subjectName}</div>
      <p className="subject-code">Code: {subjectCode}</p>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DisplayCard;
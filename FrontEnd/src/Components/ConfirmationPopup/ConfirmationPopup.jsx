import React from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-popup">
      <div className="confirmation-popup-content">
        <p>{message}</p>
        <div className="confirmation-popup-buttons">
          <button className="confirm-button" onClick={onConfirm}>Yes</button>
          <button className="cancel-button" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
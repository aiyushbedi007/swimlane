import React, { useState } from 'react';
import './BlockTransitionModal.css';

const BlockTransitionModal = ({ onClose, onSubmit }) => {
  const [inputData, setInputData] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputData, reason);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Provide Data for Transition</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Data:
            <input 
              type="text" 
              value={inputData} 
              onChange={(e) => setInputData(e.target.value)} 
              required 
            />
          </label>
          <label>
            Reason:
            <input 
              type="text" 
              value={reason} 
              onChange={(e) => setReason(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlockTransitionModal;

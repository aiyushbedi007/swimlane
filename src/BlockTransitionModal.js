import React, { useState } from 'react';
import './BlockTransitionModal.css';

const BlockTransitionModal = ({ onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(reason);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Provide Reason for Transition</h2>
        <form onSubmit={handleSubmit}>
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

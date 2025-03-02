import React from 'react';
import './BlockPreviewModal.css';

const BlockPreviewModal = ({ block, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{block.title}</h2>
        <h3>Current State: {block.state}</h3>
        <h4>History:</h4>
        <ul>
          {block.history.map((entry, index) => (
            <li key={index}>{`State: ${entry.state}, Reason: ${entry.reason}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlockPreviewModal;

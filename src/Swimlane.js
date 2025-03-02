import React, { useState } from 'react';
import BlockPreviewModal from './BlockPreviewModal';

const Swimlane = ({ blocks, onBlockMove }) => {
  const lanes = ['To Do', 'In Progress', 'Done'];
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleDrop = (event, newState) => {
    event.preventDefault();
    const blockId = event.dataTransfer.getData('text/plain');
    onBlockMove(Number(blockId), newState);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
    setIsPreviewModalOpen(true);
  };

  return (
    <div className="Swimlane">
      {lanes.map(lane => (
        <div key={lane} className="Lane" onDrop={(e) => handleDrop(e, lane)} onDragOver={allowDrop}>
          <h2>{lane}</h2>
          {blocks.filter(block => block.state === lane).map(block => (
            <div
              key={block.id}
              className="Block"
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', block.id)}
              onClick={() => handleBlockClick(block)}
            >
              {block.title}
            </div>
          ))}
        </div>
      ))}
      {isPreviewModalOpen && (
        <BlockPreviewModal 
          block={selectedBlock} 
          onClose={() => setIsPreviewModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Swimlane;

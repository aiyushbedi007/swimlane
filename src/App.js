import React, { useState } from 'react';
import './App.css';
import Swimlane from './Swimlane';
import BlockTransitionModal from './BlockTransitionModal';

function App() {
  const [blocks, setBlocks] = useState([
    { id: 1, title: 'Block 1', state: 'To Do', history: [] },
    { id: 2, title: 'Block 2', state: 'In Progress', history: [] },
    { id: 3, title: 'Block 3', state: 'Done', history: [] },
  ]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('');

  const handleBlockMove = (id, newState) => {
    setSelectedBlock({ id, newState });
    setIsModalOpen(true);
  };

  const handleModalSubmit = (reason) => {
    const updatedBlocks = blocks.map(block => {
      if (block.id === selectedBlock.id) {
        const newBlock = { 
          ...block, 
          state: selectedBlock.newState, 
          history: [...block.history, { state: block.state, reason }] 
        };
        return newBlock;
      }
      return block;
    });
    setBlocks(updatedBlocks);
    setIsModalOpen(false);
    setSelectedBlock(null);
  };

  const filteredBlocks = blocks.filter(block => 
    block.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Swimlane UI</h1>
      <input 
        type="text" 
        placeholder="Filter blocks by title..." 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <Swimlane blocks={filteredBlocks} onBlockMove={handleBlockMove} />
      {isModalOpen && (
        <BlockTransitionModal 
          onClose={() => setIsModalOpen(false)} 
          onSubmit={handleModalSubmit} 
        />
      )}
    </div>
  );
}

export default App;

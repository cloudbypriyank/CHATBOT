import React, { useState } from 'react';


const AddGuidance = ({ onClose }) => {
  // State for the form inputs
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [startWithSuggestion, setStartWithSuggestion] = useState('');
  const [suggestionOptions, setSuggestionOptions] = useState(['Always refer to', 'if a customer', 'Make all your responses']);

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Implement logic for saving changes
    // You can use the form input values
    // Close the modal afterward
    onClose();
  };

  // Function to handle publishing
  const handlePublish = () => {
    // Implement logic for publishing
    // You can use the form input values
    // Close the modal afterward
    onClose();
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h2>Add Guidance</h2>
          <button onClick={onClose} style={styles.closeButton}>
            &times;
          </button>
        </div>
        <div style={styles.modalBody}>
          <div style={styles.guidanceManager} onClick={onClose}>
            <strong>Guidance Manager</strong>
          </div>
          <div style={styles.addGuidanceText}>
            <strong>Add Guidance</strong>
            <p>
              Customize your bot's behavior with your own instructions.
              <span style={styles.learnMore}> (Learn more)</span>
            </p>
          </div>
          <div style={styles.lightGrayBox}></div>
          <div style={styles.exampleBox}>
            
            <div><header><h3>Example</h3></header></div>
            
            <ul>
              <li>"after an attempt to resolve the customer's inquiry,ask if they need more help."</li>
              <li>"when customers ask about ada's pricing,direct them to https://wwww.ada.cx/pricing"</li>
            </ul>
            
          </div>
          <div style={styles.titleBox}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={styles.input} />
          </div>
          <div style={styles.referenceBox}>
            for reference only and dosen't affect your AI agent's behavior
          </div>
          <div style={styles.instructionBox}>
            <label>Instruction:</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              style={styles.textarea}
            />
          </div>
          <div style={styles.startWithSuggestionBox}>
            <label>Start with Suggestion:</label>
            <input
              type="text"
              value={startWithSuggestion}
              onChange={(e) => setStartWithSuggestion(e.target.value)}
              style={styles.input}
            />
          </div>
            <div style={styles.suggestionOptionsBox}>
              <label>Suggestion Options:</label>
              <ul>
                {suggestionOptions.map((option, index) => (
                  
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          <div style={styles.testButton}>
            <button style={styles.pauseButton}>Test</button>
            <h5>Testing Guidance automatically save the changes</h5>
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.lightButton} onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button style={styles.darkButton} onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '90px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#888',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: '1px',
  },
  guidanceManager: {
    cursor: 'pointer',
    color: '#8a2be2',
    marginBottom: '20px',
  },
  addGuidanceText: {
    marginBottom: '20px',
    color: '#333',
  },
  learnMore: {
    color: '#0000FF',
    textDecoration: 'underline',
    cursor: 'pointer',
  
  },
  exampleBox: {
    backgroundColor: '#f0f0f0',
    color: 'Black',
    padding: '50px 20px 20px 20px',
    width: '1000px',
    height: '90px',
    marginBottom: '20px',
    border: '1px solid #ccc',
  },
  titleBox: {
    marginBottom: '20px',
  },
  referenceBox: {
    marginBottom: '20px',
    color: '#808080',
  },
  instructionBox: {
    marginBottom: '20px',
  },
  startWithSuggestionBox: {
    marginBottom: '20px',
  },
  suggestionOptionsBox: {
    marginBottom: '20px',
  },
  testButton: {
    marginBottom: '20px',
  },
  pauseButton: {
    backgroundColor: '#FFD700',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  lightButton: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  darkButton: {
    backgroundColor: '#8a2be2',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    color: '#333',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    color: '#333',
  },
};

export default AddGuidance;

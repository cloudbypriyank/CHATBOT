import React, { useState } from 'react';

const CreateAction = ({ onClose }) => {
  // State for the form inputs
  const [name, setName] = useState('Email Address');
  const [description, setDescription] = useState('Get Order status based on email address');
  const [url, setUrl] = useState('https://apikeypriyank/emailid');
  const [Url1, setUrl1] = useState('https://apikeypriyank/emailid');

  const [method, setMethod] = useState('GET');
  const [apiUses, setApiUses] = useState('JSON');
  const [method1, setMethod1] = useState('GET');
  const [apiUses1, setApiUses1] = useState('JSON');
  const [outputName, setOutputName] = useState('Order Status');
  const [outputPath, setOutputPath] = useState('Email Address');
  const [types, setTypes] = useState(['Aa', ''] );
  const [headers, setHeaders] = useState('');

  // State for active selection
  const [activeSelection, setActiveSelection] = useState('endpoint'); // 'endpoint' or 'headers'

  // Function to handle conversion to draft
  const handleConvertToDraft = () => {
    // Implement logic for converting to draft
    // You can use the 'name' and 'description' values
    // Close the modal afterward
    onClose();
  };

  // Function to handle publishing
  const handlePublish = () => {
    // Implement logic for publishing
    // You can use the 'name' and 'description' values
    // Close the modal afterward
    onClose();
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div style={styles.modalHeader}>
            <h2>Create Action</h2>
            <button onClick={onClose} style={styles.closeButton}>
              &times;
            </button>
          </div>
          <div style={styles.modalBody}>
            <h3>Describe this Action</h3>
            <h5>Write a unique name and description to help your AI agent understand when to use this action.</h5>
            <label style={styles.label}>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />

            <label style={styles.label}>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={styles.textarea} />

            <label style={styles.label}>🔍List inputs:</label>
            <h5>List any info that needs to be collected from the conversation for this Action</h5>
            <h5>Name :</h5>
          
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
            <h5>Types :</h5>
            <select value={types} onChange={() => setTypes()} style={styles.select}>
            
              <option value="Aa">Aa</option>
              <option value="Bb">Bb</option>
              {/* Add more options as needed */}
              </select>
              
              <purpleButton1 style={styles.purpleButton1}><button>+ Add </button></purpleButton1>
            <label style={styles.label}>API Call:</label>

            <div style={styles.subLabel}>Structure the API call needed to complete the action:</div>

            <div style={styles.apiCallSection}>
              <div style={styles.apiCallInput}>
                <label style={styles.subLabel}>Endpoint:</label>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} style={styles.input} />
              </div>
              <div style={styles.apiCallInput}>
                <label style={styles.subLabel}>Method:</label>
                <select value={method} onChange={(e) => setMethod(e.target.value)} style={styles.select}>
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
              <div style={styles.apiCallInput}>
                <label style={styles.subLabel}>This API uses:</label>
                <select value={apiUses} onChange={(e) => setApiUses(e.target.value)} style={styles.select}>
                  <option value="JSON">JSON</option>
                  <option value="XML">XML</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div style={styles.subLabel}> ⚡Make API Call:</div>
            <h5>Make the API call needed for this Action, including any inputs,<span style={styles.Metavariables}> (Metavariables)</span>,or <span style={styles.Metavariables}> (Tokens)</span></h5>
            <div style={styles.apiCallSection}>
              <div style={styles.apiCallInput}>
                <button
                  style={activeSelection === 'endpoint' ? styles.activeButton : styles.inactiveButton}
                  onClick={() => setActiveSelection('endpoint')}
                  
                >
                  Endpoint
                </button>
                <button
                  style={activeSelection === 'headers' ? styles.activeButton : styles.inactiveButton}
                  onClick={() => setActiveSelection('headers')}
                >
                  Headers
                </button>
              </div>

              {activeSelection === 'endpoint' && (
                <div>
                  {/* Endpoint interface */}
                  <label style={styles.subLabel}> Endpoint: <p><label style={styles.subLabel}> </label></p>
                <div>
                  <label style={styles.subLabel}>URL:</label>
                  <input type="text" value={Url1} onChange={(e) => setUrl1(e.target.value)} style={styles.input}/>
                </div>

                <div>
                  <label style={styles.subLabel}>Method:</label>
                  <input type="text" value={method1} onChange={(e) => setMethod1(e.target.value)} style={styles.input} />
                </div>
                <div>
                  <label style={styles.subLabel}>This API uses:</label>
                  <input type="text" value={apiUses1} onChange={(e) => setApiUses1(e.target.value)} style={styles.input} />
                </div></label>
                  {/* ... (Render Endpoint interface components) */}
                </div>
              )}

              {activeSelection === 'headers' && (
                <div>
                  {/* Headers interface */}
                  <label style={styles.subLabel}> Headers:</label>
                  <input
                    type="text"
                    value={headers}
                    onChange={(e) => setHeaders(e.target.value)}
                    style={styles.input}
                  />
                  {/* ... (Render Headers interface components) */}
                </div>
              )}
            </div>
            <div style={styles.apiCallSection}>
              <div style={styles.apiCallInput}>
                 
                
              </div>
              </div>
             
            <label style={styles.label}>Pick Output:</label>
            <h5>Pick the parts of the API response body that should be used in message and other actions,using <span style={styles.Metavariables}> (JMESPath)</span></h5>
            <div style={styles.apiCallSection}>
              <div style={styles.apiCallInput}>
                <label style={styles.subLabel}>Name:</label>
                <input type="text" value={outputName} onChange={(e) => setOutputName(e.target.value)} style={styles.input} />
                <input type="text" value={outputName} onChange={(e) => setOutputName(e.target.value)} style={styles.input} />
              </div>
              <div style={styles.apiCallInput}>
                <label style={styles.subLabel}>Path:</label>
                <input type="text" value={outputPath} onChange={(e) => setOutputPath(e.target.value)} style={styles.input} />
                <input type="text" value={outputPath} onChange={(e) => setOutputPath(e.target.value)} style={styles.input} />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.purpleButton} onClick={handleConvertToDraft}>
            Convert to Draft
          </button>
          <button style={styles.purpleButton} onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
  },
  modal: {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '80vh',
    width: '1100px',
    overflow: 'hidden',
  },
  Tokens: {
    colour : '#0000FF',
    
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  Metavariables: {
    color: '#0000FF',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '50px',
    cursor: 'pointer',
    color: '#888',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  label: {
    display: 'block',
    margin: '10px 0',
    fontWeight: 'bold',
    color: '#333',
  },
  subLabel: {
    display: 'block',
    margin: '15px 0',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666',
  },
  apiCallSection: {
    marginBottom: '20px',
  },
  apiCallInput: {
    marginBottom: '10px',
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
    padding: '20px',

    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    color: '#333',
  },
  select: {
    width: '10%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    color: '#000',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '10px solid #ddd',
    paddingTop: '20px',
    
  },
  priyankButton: {
    backgroundColor: '#5f9ea0',
    borderColor: '#8a2be2',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    background: '#8a2be2',
    Textcolor: 'white',
  },
  purpleButton: {
    backgroundColor: '#8a2be2',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
    purpleButton1: {
    backgroundColor: '',
    borderColor: '#8a2be2',
    color: 'white',
    padding: '1px',
    width: '40px',
    border: 'none',
    borderRadius: '1px',
    cursor: 'pointer',
    marginLeft: '1px',
    
    
  },
};

export default CreateAction;

import React, { useState } from 'react';

const Setup = ({ onNameChange, onModelChange, onGreetingChange, onSaveSetup, onUpdateChatbotName }) => {
    const [name, setName] = useState('');
    const [selectedModel, setSelectedModel] = useState('gpt3.5');
    const [greetingType, setGreetingType] = useState('static');
    const [staticGreeting, setStaticGreeting] = useState('');
    const [generatedGreeting, setGeneratedGreeting] = useState('');
    const [greetingPrompt, setGreetingPrompt] = useState('Hello, how can I assist you today?');

    const handleNameChange = () => {
        onNameChange(name);
        onSaveSetup({ ...name, selectedModel, greetingType, greeting: greetingType === 'static' ? staticGreeting : generatedGreeting });
        onUpdateChatbotName(name); // Update chatbot name
    };

    const handleModelChange = (e) => {
        const selectedModel = e.target.value;
        setSelectedModel(selectedModel);
        onModelChange(selectedModel);
        onSaveSetup({ ...name, selectedModel, greetingType, greeting: greetingType === 'static' ? staticGreeting : generatedGreeting });
    };

    const handleGreetingTypeChange = (e) => {
        const selectedGreetingType = e.target.value;
        setGreetingType(selectedGreetingType);
        onGreetingChange(selectedGreetingType, selectedGreetingType === 'static' ? staticGreeting : generatedGreeting);
        onSaveSetup({ ...name, selectedModel, greetingType: selectedGreetingType, greeting: selectedGreetingType === 'static' ? staticGreeting : generatedGreeting });
    };

    const handleStaticGreetingChange = (e) => {
        setStaticGreeting(e.target.value);
        onSaveSetup({ ...name, selectedModel, greetingType, greeting: e.target.value });
    };

    const handleGeneratedGreetingChange = (e) => {
        setGeneratedGreeting(e.target.value);
        onSaveSetup({ ...name, selectedModel, greetingType, greeting: e.target.value });
    };

    const handleGreetingPromptChange = (e) => {
        setGreetingPrompt(e.target.value);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Setup</h2>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="model">
                    Model:
                </label>
                <select
                    id="model"
                    value={selectedModel}
                    onChange={handleModelChange}
                    style={styles.selectInput}
                >
                    <option value="gpt3.5">GPT-3.5</option>
                    <option value="gemini-bard">Gemini Bard</option>
                </select>
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="greeting-type">
                    Greeting Type:
                </label>
                <select
                    id="greeting-type"
                    value={greetingType}
                    onChange={handleGreetingTypeChange}
                    style={styles.selectInput}
                >
                    <option value="static">Static</option>
                    <option value="generated">Generated</option>
                </select>
            </div>

            {greetingType === 'static' && (
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="static-greeting">
                        Static Greeting:
                    </label>
                    <input
                        type="text"
                        id="static-greeting"
                        value={staticGreeting}
                        onChange={handleStaticGreetingChange}
                        style={styles.input}
                    />
                </div>
            )}

            {greetingType === 'generated' && (
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="generated-greeting">
                        Generated Greeting:
                    </label>
                    <input
                        type="text"
                        id="generated-greeting"
                        value={generatedGreeting}
                        onChange={handleGeneratedGreetingChange}
                        style={styles.input}
                    />
                </div>
            )}

            <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="greeting-prompt">
                    Greeting Prompt:
                </label>
                <input
                    type="text"
                    id="greeting-prompt"
                    value={greetingPrompt}
                    onChange={handleGreetingPromptChange}
                    style={styles.input}
                />
            </div>

            <button onClick={handleNameChange} style={styles.button}>
                Save Setup
            </button>
        </div>
    );
};

const styles = {
    container: {
        width: '90px',
        margin: '80px auto',
    },
    heading: {
        textAlign: 'center',
        color: '#3498db',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    label: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#235',
        marginBottom: '5px',
        display: 'block',
    },
    input: {
        width: '200%',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
    },
    selectInput: {
        width: '200%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
    },
};

export default Setup;

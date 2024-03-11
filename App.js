import React, { useState } from 'react';
import Setup from './setup';
import Data from './Data';
import Action from './Actions';
import Style from './Style';
import NewAction from './NewAction'; // Import the NewAction component
import Chatbot from './Chatbot';
import Instructions from './Instructions';
import SearchBar from './SearchBar';
import Share from './share'; // Import the Share component
import Directive from './Directive'; // Import the Directive component
import AddGuidance from './AddGuidance';



const App = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [userMessageColor, setUserMessageColor] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [explorerOpen, setExplorerOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [directive, setDirective] = useState('');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const handleUserMessageColorChange = (color) => {
        setUserMessageColor(color);
    };

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
        // Implement your search logic here
    };

    const handleUserNameChange = (name) => {
        setUserName(name);
    };

    const handleDirectiveChange = (directive) => {
        setDirective(directive);
        setActiveSection(null); // Clear active section to avoid conflicts with directive
    };

    const toggleExplorer = () => {
        setExplorerOpen((prevExplorerOpen) => !prevExplorerOpen);
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        transition: 'border-color 0.3s',
        backgroundColor: 'transparent',
        color: '#3498db',
        fontSize: '16px',
        fontWeight: 'bold',
        position: 'relative',
        marginBottom: '10px',
    };

    const activeButtonStyle = {
        ...buttonStyle,
        borderBottom: '2px solid #3498db',
    };

    const lineStyle = {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        backgroundColor: '#3498db',
        transform: 'scaleX(0)',
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s',
    };

    const activeLineStyle = {
        ...lineStyle,
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '10px',
    };

    const sectionContainerStyle = {
        flex: '0 0 10%',
        padding: '10px',
        display: explorerOpen ? 'block' : 'none',
    };

    const chatbotContainerStyle = {
        flex: '0 0 55%',
        padding: '50px',
    };

    const explorerIconStyle = {
        cursor: 'pointer',
        fontSize: '24px',
        marginRight: '10px',
    };

    return (
        <div>
            <h2 style={{ textAlign: 'left', color: '#3498db' }}>AI Assistant</h2>
            <div style={explorerIconStyle} onClick={toggleExplorer}>
                ☰
            </div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            <div style={containerStyle}>
                <div style={sectionContainerStyle}>
                    <button
                        onClick={() => handleSectionClick('Setup')}
                        style={activeSection === 'Setup' ? activeButtonStyle : buttonStyle}
                    >
                        Setup
                        <div style={activeSection === 'Setup' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('Data')}
                        style={activeSection === 'Data' ? activeButtonStyle : buttonStyle}
                    >
                        Data
                        <div style={activeSection === 'Data' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('Action')}
                        style={activeSection === 'Action' ? activeButtonStyle : buttonStyle}
                    >
                        Action
                        <div style={activeSection === 'Action' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('Style')}
                        style={activeSection === 'Style' ? activeButtonStyle : buttonStyle}
                    >
                        Style
                        <div style={activeSection === 'Style' ? activeLineStyle : lineStyle} />
                    </button>
                    <button 
                        onClick={() => handleSectionClick('Instructions')}
                        style={activeSection === 'Instructions' ? activeButtonStyle : buttonStyle}
                    >
                        Instructions
                        <div style={activeSection === 'Instructions' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('NewAction')}
                        style={activeSection === 'NewAction' ? activeButtonStyle : buttonStyle}
                    >
                        New Action
                        <div style={activeSection === 'NewAction' ? activeLineStyle : lineStyle} />
                     </button>
                    <button
                        onClick={() => handleSectionClick('Search')}
                        style={activeSection === 'Search' ? activeButtonStyle : buttonStyle}
                    >
                        Search
                        <div style={activeSection === 'Search' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('AddGuidance')}
                        style={activeSection === 'AddGuidance' ? activeButtonStyle : buttonStyle}
                    >
                        AddGuidance
                        <div style={activeSection === 'AddGuidance' ? activeLineStyle : lineStyle} />
                    </button>
                    <button
                        onClick={() => handleSectionClick('Directive')}
                        style={activeSection === 'Directive' ? activeButtonStyle : buttonStyle}
                    >
                        Directive
                        <div style={activeSection === 'Directive' ? activeLineStyle : lineStyle} />
                    </button>
                    <Share /> {/* Include the Share component */}
                </div>
                <div style={sectionContainerStyle}>
                    {activeSection && (
                        <>
                            {activeSection === 'Setup' && <Setup onNameChange={handleUserNameChange} />}
                            {activeSection === 'Data' && <Data />}
                            {activeSection === 'Action' && <Action />}
                            {activeSection === 'Style' && <Style onUserMessageColorChange={handleUserMessageColorChange} />}
                            {activeSection === 'Instructions' && <Instructions />}
                            {activeSection === 'Search' && <div>Search Results Here</div>}
                            {activeSection === 'AddGuidance' && <AddGuidance />}
                            {activeSection === 'Directive' && <Directive onDirectiveChange={handleDirectiveChange} />}
                            {activeSection === 'NewAction' && <NewAction />} {/* Include the NewAction component */}
                        </>
                    )}
                </div>
                <div style={chatbotContainerStyle}>
                    <Chatbot userMessageColor={userMessageColor} userName={userName} directive={directive} />
                </div>
            </div>
        </div>
    );
};

export default App;

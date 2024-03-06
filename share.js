// Header.js
import React from 'react';

const Header = () => {
    const handleShareClick = () => {
        // Logic for sharing the website URL
        const publicUrl = 'https://priyannk.zapier.app'; // Replace with your actual URL
        navigator.clipboard.writeText(publicUrl);
        alert('Public URL copied to clipboard!');
    };

    const handleEmbedClick = () => {
        // Logic for handling the embed functionality
        alert('Implement the embed functionality here');
    };

    return (
        <div style={styles.header}>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={handleShareClick}>
                    Share
                </button>
                <button style={styles.button} onClick={handleEmbedClick}>
                    Embed
                </button>
            </div>
        </div>
    );
};

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '10px',
        background: '#f1f1f1',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    buttonsContainer: {
        display: 'flex',
        gap: '10px',
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Header;

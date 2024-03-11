import React from 'react';

const ChatbotIcon = ({ onClick }) => {
    const styles = {
        icon: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#3498db',
            color: '#fff',
            borderRadius: '50%',
            padding: '15px',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        },
    };

    return (
        <div style={styles.icon} onClick={onClick}>
            Chat
        </div>
    );
};

export default ChatbotIcon;

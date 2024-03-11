import React, { useState } from 'react';
import ChatbotIcon from './ChatbotIcon';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [chatOpen, setChatOpen] = useState(false);

    const sendMessage = async () => {
        // Add user message to chat
        setChatMessages((prevMessages) => [
            ...prevMessages,
            { role: 'user', content: userInput },
        ]);

        // Clear the input field
        setUserInput('');

        // Fetch assistant's response from the OpenAI API
        const response = await fetchAssistantResponse(userInput);

        // Add assistant's response to chat
        setChatMessages((prevMessages) => [
            ...prevMessages,
            { role: 'assistant', content: response.choices[0].message.content },
        ]);
    };

    const fetchAssistantResponse = async (userMessage) => {
        const apiKey = 'YOUR-API-KEY';
        const endpoint = 'https://api.openai.com/v1/chat/completions';

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: userMessage },
                ],
            }),
        });

        return await response.json();
    };

    const handleRestart = () => {
        // Clear the chat messages to restart the conversation
        setChatMessages([]);
    };

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };

    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1em',
            borderBottom: '1px solid #ccc',
        },
        chatContainer: {
            backgroundColor: '#f9f9f9',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            maxHeight: '300px',
            padding: '1em',
            marginBottom: '1em',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column', // Display messages in a column
            display: chatOpen ? 'block' : 'none',
        },
        message: {
            marginBottom: '10px',
            overflow: 'hidden',
            padding: '10px',
            borderRadius: '10px',
            wordWrap: 'break-word',
        },
        userMessage: {
            backgroundColor: '#3498db',
            color: '#fff',
            maxWidth: '70%',
            alignSelf: 'flex-end', // Align user messages to the right
        },
        assistantMessage: {
            backgroundColor: '#2ecc71',
            color: '#fff',
            maxWidth: '70%',
        },
        messageInput: {
            display: 'flex',
            alignItems: 'center',
        },
        inputField: {
            flex: 1,
            margin: '10px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
        },
        sendButton: {
            margin: '10px',
            padding: '10px',
            border: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
        },
    };

    return (
        <div>
            {chatOpen && (
                <div style={styles.header}>
                    <h2>Priyank Bot</h2>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
            <div style={styles.chatContainer}>
                {chatMessages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            ...(message.role === 'user' ? styles.userMessage : styles.assistantMessage),
                        }}
                    >
                        {message.content}
                    </div>
                )).reverse()} {/* Reverse the mapping */}
            </div>
            {chatOpen && (
                <div style={styles.messageInput}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        style={styles.inputField}
                    />
                    <button onClick={sendMessage} style={styles.sendButton}>
                        Send
                    </button>
                </div>
            )}
            <ChatbotIcon onClick={toggleChat} />
        </div>
    );
};

export default Chatbot;

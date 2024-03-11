import React, { useState } from 'react';
import IntegrateAction from './IntegrateAction';
import CopyResponseAction from './CopyResponseAction';

const Action = () => {
    const [actionType, setActionType] = useState(null);
    const [buttonText, setButtonText] = useState('');
    const [notificationText, setNotificationText] = useState('');

    const handleAddAction = (type) => {
        setActionType(type);
    };

    const handleCancel = () => {
        setActionType(null);
        setButtonText('');
        setNotificationText('');
    };

    const handleButtonTextChange = (e) => {
        setButtonText(e.target.value);
    };

    const handleNotificationTextChange = (e) => {
        setNotificationText(e.target.value);
    };

    return (
        <div>
            <h2>Action</h2>
            <h5>Trigger actions from chatbot responses</h5>
            <h6>Setup automations that trigger available actions directly in chat.</h6>

            <input
                type="text"
                placeholder="Button Text"
                value={buttonText}
                onChange={handleButtonTextChange}
            />

            <input
                type="text"
                placeholder="Notification Text"
                value={notificationText}
                onChange={handleNotificationTextChange}
            />

            <button
                style={{ backgroundColor: 'Blue', color: 'white' }}
                onClick={() => handleAddAction('Integrate')}
            >
                {buttonText || '+ Add Integrate Action'}
            </button>

            <button
                style={{ backgroundColor: 'Blue', color: 'white' }}
                onClick={() => handleAddAction('Copy Response')}
            >
                {buttonText || '+ Add Copy Response Action'}
            </button>

            {actionType === 'Integrate' && (
                <IntegrateAction
                    onCancel={handleCancel}
                    buttonText={buttonText}
                    notificationText={notificationText}
                />
            )}

            {actionType === 'Copy Response' && (
                <CopyResponseAction
                    onCancel={handleCancel}
                    buttonText={buttonText}
                    notificationText={notificationText}
                />
            )}
        </div>
    );
};

export default Action;

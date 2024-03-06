// Instructions.js
import React, { useState } from 'react';
import Modal from './Modal'; // Make sure the path is correct

const Instructions = () => {
    const [showModal, setShowModal] = useState(false);
    const [directiveText, setDirectiveText] = useState(/* your initial directive text here */);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const handleEdit = () => {
        // Implement your edit functionality here
        console.log('Editing directive...');
        setShowModal(false); // Close the modal after editing
    };

    return (
        <div>
            <h2>Instructions</h2>
            <div>
                <strong>Directive (required)</strong>
                <p>[Add any additional directive information here]</p>
                <button onClick={handleToggleModal}>Open Directive</button>
            </div>
            {showModal && (
                <Modal onClose={handleToggleModal}>
                    <div>
                        <strong>Directive Code:</strong>
                        <textarea
                            rows="20"
                            cols="80"
                            value={directiveText}
                            onChange={(e) => setDirectiveText(e.target.value)}
                        />
                        <button onClick={handleEdit}>Save</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Instructions;

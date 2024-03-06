import React, { useState } from 'react';

const Directive = ({ onDirectiveChange }) => {
    const [directive, setDirective] = useState('');

    const handleDirectiveChange = () => {
        // Notify the parent component about the directive change
        onDirectiveChange(directive);
    };

    return (
        <div>
            <h3>Directive</h3>
            <input
                type="text"
                value={directive}
                onChange={(e) => setDirective(e.target.value)}
                placeholder="Type your directive..."
            />
            <button onClick={handleDirectiveChange}>Apply Directive</button>
        </div>
    );
};

export default Directive;

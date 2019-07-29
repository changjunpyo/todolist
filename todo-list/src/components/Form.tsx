import * as React from 'react';
import './Form.css';

const Form = ({ input, onInsert, onChange, onKeyInsert}) => {
    return (
        <div className ="form">
            <input value={input} onChange={onChange} onKeyPress={onKeyInsert}/>
            <div className="create-button" onClick={onInsert}>
                Add
            </div>
        </div>
    );
}

export default Form;

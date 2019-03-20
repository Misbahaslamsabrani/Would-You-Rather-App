import React from 'react';
const InputField = (props) => {
    const { v, oc, labelText, id, n } = props;
    return (
        <div className="input-field">
            <input
                type="text"
                value={v}
                onChange={oc}
                id={id}
                name={n}
            />
            <label htmlFor={id}>{labelText}</label>
        </div>
    );
}

export default InputField;
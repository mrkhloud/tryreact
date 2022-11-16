import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {/*стартовыйвый пустой*/}
            <option disabled value=''>
                {defaultValue}
            </option>
            {/*а этот будет заполняться*/}
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;
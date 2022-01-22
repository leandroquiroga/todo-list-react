import React from 'react';
import PropTypes from 'prop-types';


export const Buttons = (props) => {
    const { styles, value, type} = props;
    return (
        <button
            className={styles}
            type={type}
        >
            {value}
        </button>
    );
};

Buttons.prototype = {
    styles: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

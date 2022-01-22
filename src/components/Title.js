import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({title, mount}) => {
    return (
        <div className='bg-dark p-2 text-white'>
            <h1 className='App-title text-center w-100'>
                {title}
                {
                    (mount > 0) && <span className='badge rounded-pill bg-danger mx-2'> {mount} </span>
                }
            </h1>
            <hr />
        </div>
    );
};

Title.prototype = {
    title: PropTypes.string.isRequired,
    mount: PropTypes.number.isRequired,
}
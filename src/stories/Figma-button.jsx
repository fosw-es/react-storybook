import React from 'react';
import PropTypes from 'prop-types';
import './figma-button.css';

export const FigmaButton = ({ mode, size, label, ...props }) => {
    return (
        <button
            type="button"
            className={`figma-button figma-button-${mode} figma-button-${size}`}
            {...props}
        >
            {label}
        </button>
    );
};

FigmaButton.propTypes = {
    mode: PropTypes.oneOf(['default', 'hover', 'active']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

FigmaButton.defaultProps = {
    mode: 'default',
    size: 'medium',
    label: 'Avbryt',
    onClick: undefined,
};
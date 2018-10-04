import React from 'react';

import '../../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';

const button = (props) => (
    <button
        disabled={props.disabled}
        className="button login-box-form-submit"
        data-open="" 
        type="submit"
        onClick={props.clicked}>{props.children}</button>
);

export default button;
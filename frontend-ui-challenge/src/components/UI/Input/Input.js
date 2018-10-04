import React from 'react';

import classes from './Input.css';
import '../../../frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={props.scss}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                required/>;
            break;
        default:
           
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;
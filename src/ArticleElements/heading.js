import React from 'react';
import * as PropTypes from 'prop-types';

const Heading = ({text})=>{
    return(
        <h4>
            {text}
        </h4>
    )
};

Heading.propTypes = {
    text: PropTypes.string.isRequired
};
export default Heading;
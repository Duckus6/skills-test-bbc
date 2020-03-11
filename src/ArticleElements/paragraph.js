import React from 'react';
import * as PropTypes from 'prop-types';

const Paragraph = ({text})=>{
    return(
        <p>
            {text}
        </p>
    )
};

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
};
export default Paragraph;
import React from 'react';
import * as PropTypes from 'prop-types';

const Paragraph = ({text,className})=>{
    return(
        <p className={className}>
            {text}
        </p>
    )
};

Paragraph.propTypes = {
    text: PropTypes.string.isRequired
};
export default Paragraph;
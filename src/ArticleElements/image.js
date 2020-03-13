import React from 'react';
import * as PropTypes from 'prop-types';


const Image = ({url,altText,height,width})=>{
    return(
        <img src={url} alt={altText} height={height} width={width}/>
    )
};

Image.propTypes = {
    url: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,


};
export default Image;
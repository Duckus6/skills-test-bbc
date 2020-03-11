import React from 'react';
import * as PropTypes from 'prop-types';

const List = ({type,items})=>{
    const listItems = items.map(item=><li>{item}</li>);
    const orderedList = (children)=>{
        return <ol>{children}</ol>
    };
    const unorderedList = (children)=>{
        return <ul>{children}</ul>
    };


    //If  unordered, makes list ordered
    return type==="unordered"? unorderedList(listItems):orderedList(listItems);
};
/*
articleData.body.map(articleElement=>formatArticleElement(articleElement))
 */
List.propTypes = {
    type: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};
export default List;
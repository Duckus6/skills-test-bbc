import React from "react";

function ControlBar({updateIndex,index, total}) {

    const goBackwards = ()=>{
        updateIndex(Math.max(0,index-1))
    };
    const goForwards = ()=>{
        updateIndex(Math.min(total-1, index+1))
    };
    return(<div>
        <button className={"arrow-button previous"} onClick={goBackwards}>&#8592;</button>
        <span>{index+1} of {total}</span>
        <button className={"arrow-button next"} onClick={goForwards}>&#8594;</button>
    </div>)
}
export default ControlBar;

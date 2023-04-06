import React, { useCallback } from "react";

function CheckBox({id,checked,editchecked}){
    return(
        <>
        <input type="checkbox" checked={checked}  onChange={() => editchecked(id)}/>
        </>
    );
}

export default CheckBox;
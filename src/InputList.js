import React, { useState } from "react";
import { useCallback } from "react";

function InputList({addList}){

    const [text,settext] = useState('');

    const onChange = useCallback(e=>{
        settext(e.target.value);
    },[]);

    const onSubmit=useCallback(e=>{
        if(text===''){
            alert('내용입력하세요.');
            e.preventDefault();
            return;
        }else{
            settext('');
            addList(text);
            e.preventDefault();}//새로고침 하지마세요
    },[addList,text]);


    return(
        <form  onSubmit={onSubmit}>
            <input type="text" onChange={onChange} placeholder="insert todo" value={text}/>
            <button type="submit">DoIt</button>
        </form>
    );
}

export default InputList;
import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import './App.css';

export default function Edit_Detail({modal, text, detail, closeModal,edittext,id,timeString}){

        const [tmptext,settmptext] = useState(text);
        const [tmpdetailt,settmpdetail] = useState(detail);

        const [time,setTime] = useState(new Date());

        useEffect(() => {
          const intervalID = setInterval(() => {
            setTime(new Date());
          }, 1000);//1초마다 반복
          return () => clearInterval(intervalID);
          
        }, []);

        const onSubmit=useCallback(e=>{
            if(tmptext===''){
                alert(":"+tmptext+'내용입력하세요.');
                e.preventDefault();
                return;
            }else{
                //settmptext(text);
                //settmpdetail(detail);
                const timestr = time.toLocaleString();
                edittext(id,tmptext,tmpdetailt,timestr);
                e.preventDefault();}//새로고침 하지마세요
                closeModal();
        },[edittext,tmptext,tmpdetailt,time]);
        
        const handleInput1Change = (e) => settmptext(e.target.value);
        const handleInput2Change = (e) => settmpdetail(e.target.value);

        
        return(
            <>
            <ReactModal 
            style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색 설정
                },
                content: {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '200px',
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // 그림자 효과 추가
                },
              }}
            isOpen={modal} onRequestClose={closeModal} ariaHideApp={false}>


                <form onSubmit={onSubmit}>
                    {/*props로 전달받은 값을 바로 value로 사용하면 수정안됨 */}
                    <input type="text" defaultValue={text} onChange={handleInput1Change} />
                    <input type="text" defaultValue={detail} onChange={handleInput2Change} />
                    <button type="submit" value="submit">edit & save</button>
                </form>
                최종수정 : {timeString}
            </ReactModal>
            </>
        );

}

//export default Edit_Detail;
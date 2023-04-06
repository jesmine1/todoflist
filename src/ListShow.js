import React, { useCallback, useState } from "react";
import ReactModal from "react-modal";
import './App.css';
import Edit_Detail from "./Edit_Detail";
import cn from 'classnames';

function ListShow({List,rmList,editchecked,edittext}) {
    const { id, text, detail, date, checked } = List;
    
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);//modal 열고닫고제어

    return (
      <li className="contextli">

        <Edit_Detail modal={isOpen}  
        closeModal={closeModal}
        edittext={edittext}
        text={text} detail={detail} 
        id={id} timeString={date}/>

        <div>
          <input type="checkbox" checked={checked}  onChange={() => editchecked(id)}/>
        </div>

        <div className={cn('default', { checked })}>{/*cheked가 참일때만 클래스 이름 적용 */}
          <div onClick={openModal}>{text}</div>
        </div>

        <div>
          {/*수정?*/}
          <input type="button" value="+" onClick={openModal}/>
        </div>

        <div>
          {/*삭제?*/}
          <input type="button" value="delete" onClick={() => rmList(id)}/>
        </div>

      </li>
    );
  }

export default ListShow;

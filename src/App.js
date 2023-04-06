import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';//팝업 라이브러리
import TodoList from './TodoList';
import InputList from './InputList';
import Clock from './Clock';

function App() {

  const focus = useRef(4);//id시작점,배열 길이와는 무관

  const [time,setTime] = useState(new Date());//시간

  const timeString = time.toLocaleString();//시간 문자열로 저장

  const [List, setList] = useState([
    {
      id: 1,//key값
      text: 'TodoList1',//제목
      detail: 'detail1',//내용
      date: '2222. 4. 2. 오전 11:29:07',//최종시간
      checked: true,//true한거 false안한거
    },
    {
      id: 2,
      text: 'TodoList2',
      detail: 'detail2',
      date: '3333. 4. 2. 오전 21:29:07',
      checked: false,
    },
    {
      id: 3,
      text: 'TodoList3',
      detail: 'detail3',
      date: '4444. 4. 2. 오전 31:29:07',
      checked: false,
    },
  ]);//데이터

  const addList = useCallback((text) => {
    const temp = {
        id: focus.current,
        text: text,
        date: timeString,
        checked: false,
      };
    setList(List.concat(temp)); 
    focus.current++; 
  },[List]);//배열추가

  const rmList=useCallback((id)=>{//useCallback 재생성안하고 재사용?
    setList(List.filter(list => list.id !== id));
  },[List]);//배열삭제

  const editchecked=useCallback((id)=>{
   setList(List.map((list)=>
    list.id===id ? {...list, checked : !list.checked} : list
   ));
  },[List]);//체크박스 수정

  const edittext=useCallback((id,text,detail,date)=>{
    setList(List.map((list) => 
    (list.id === id ? { ...list, text, detail, date } : list
      )));
  },[List]);//제목 디테일 수정

  const falseCount = List.reduce((count, list) => {
    if (!list.checked) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);


  
  return (
    <div className='maindiv'>
    <InputList addList={addList}/>
    LeftTodo : {falseCount}
    <TodoList List={List} rmList={rmList} 
    editchecked={editchecked}
    edittext={edittext}/>
    <Clock time={time} setTime={setTime}/>
    </div>
  );
}

export default App;

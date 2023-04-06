import React, { useEffect, useState } from "react";
import ListShow from "./ListShow";
import { useCallback } from "react";


function TodoList({List,rmList,editchecked,edittext}) {
  
    return (
      <>
      <ul>
        {List && List.map((List) => (
          <ListShow
            List={List}
            key={List.id}
            rmList={rmList}
            editchecked={editchecked}
            edittext={edittext}
          />   
        ))}
      </ul> 
      </>
    );
  }

  export default TodoList;
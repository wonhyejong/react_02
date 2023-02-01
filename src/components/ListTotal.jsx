import React from 'react';
import { useState, useEffect}  from "react";
import Pagenation from './Pagenation';
import axios from 'axios';
import styled from 'styled-components';

const ListTotal = () => {
    const [lists,setLists] = useState([]);
    const [page, setPage] = useState(1);
    const LIST_PER_PAGE = 10 ;
    const startNum = (page - 1 ) * LIST_PER_PAGE;  //0 10 20 30
    const endNum = startNum + LIST_PER_PAGE // 10 20 30 40 
    const getList = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setLists(response.data)
    }
    useEffect(()=>{
        getList();
    },[])
    return (
        <div>
             <BoardUl>
              { 
              [...lists].reverse().slice(startNum,endNum).map(({id,body}) =>{
                   return (
                    <BoardLi key={id}>
                          <span className='idName'>{id}</span> 
                          <span className='listBody'>{body}</span>
                    </BoardLi>
                   )
                })
             }
             </BoardUl>
             <Pagenation 
                total={lists.length} 
                page={page} 
                setPage={setPage}
                LIST_PER_PAGE={LIST_PER_PAGE}
             />
        </div>
    );
};

export default ListTotal;

const BoardLi = styled.li`
    padding:0.5rem 1rem;
    border-bottom : 1px solid #ccc;
    display:flex;
    &>.idName{
        width:4rem;
        color:#333;
    }
    &>.listBody{
        margin-left:1.5rem;
        width:50rem;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color:#666;
        text-align:left;
    }  
`
const BoardUl = styled.ul`
    width : 1000px;
    font-size:0.875rem;
    margin:3rem auto;
`
//리액트에서 state 값이 객체인 경우 상태값을 업데이트 시킬때 ... spread 연산자로 기존의 값을 유지시키고 spread한 값을 상태 값으로 바꿔준다. 

//불변성  객체 => 복사 



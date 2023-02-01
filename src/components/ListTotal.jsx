import React from 'react';
import { useState, useEffect}  from "react";
import Pagenation from './Pagenation';
import axios from 'axios';

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
             <ul>
              { 
              [...lists].reverse().slice(startNum,endNum).map(({id,body}) =>{
                   return (
                    <li key={id}>
                          <span className='idName'>{id}</span> 
                          <span className='listBody'>{body}</span>
                    </li>
                   )
                })
             }
             </ul>
             <Pagenation />
        </div>
    );
};

export default ListTotal;
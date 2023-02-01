import React from 'react';
import styled from "styled-components";

const Pagenation = ({total,page,setPage,LIST_PER_PAGE}) => {
    const pageNum = Math.ceil(total/LIST_PER_PAGE)
    const pageNumArray = new Array(pageNum);
    return (
        <PaginationBox>
            <PrevButton onClick={()=>setPage(page-1)} disabled={page===1}>이전</ PrevButton>
            {
                pageNumArray.fill().map((ele,idx)=>{
                    return(
                        <PageNumButton 
                            key={idx} 
                            onClick={()=>setPage(idx+1)} 
                            className={page===idx+1 && "active"}
                        >
                            {idx+1}
                        </PageNumButton>
                    )
                }) 
            }
            <NextButton onClick={()=>setPage(page+1)} disabled={page === pageNum} >이후</NextButton>
        </PaginationBox>
    );
};

export default Pagenation;
const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:1000px;
    margin:1rem auto;
`
const PrevButton = styled.button`   
    border:none;
    border-radius: 0.25rem;
    padding:0.25rem 0.375rem;
    color:#fff;
    width:40px;height:24px;
    background:#cda8a8;
    font-size: 0.75rem;
    &:hover{
        cursor: pointer;
        color:#f23;
    }
    &[disabled]{
        background:#e0e0e0;
        color:#fff;
    }
    &.active{
        font-weight: bold;
        color:#f93;
        text-decoration:underline;
    }
`
const NextButton  = styled(PrevButton)``
const PageNumButton = styled(PrevButton)`
    background:none;
    color:#666;
    font-size: 1rem;
`
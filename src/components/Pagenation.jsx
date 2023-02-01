import React from 'react';

const Pagenation = ({total,page,setPage,LIST_PER_PAGE}) => {
    const pageNum = Math.ceil(total/LIST_PER_PAGE)
    const pageNumArray = new Array(pageNum);
    return (
        <div>
            <button onClick={()=>setPage(page-1)} disabled={page===1}>이전</button>
            {
                pageNumArray.fill().map((ele,idx)=>{
                    return(
                        <button key={idx} onClick={()=>setPage(idx+1)}>
                            {idx+1}
                        </button>
                    )
                }) 
            }
            <button onClick={()=>setPage(page+1)} disabled={page === pageNum} >이후</button>
        </div>
    );
};

export default Pagenation;
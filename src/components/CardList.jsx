import React from 'react';
import CardItem from './CardItem';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import './card.css';

const CardList = () => {
    const [cardData, setCardData] = useState([]);
    const dataUrl = './data/cardData.json'
    useEffect(() => {
        (async()=>{
            const response = await axios.get(dataUrl);
           console.log(response)
            setCardData(response.data);
        })()
    },[])
  /*   useEffect(()=>{  
        fetch('http://localhost:3000/data/cardData.json')
        .then(response=>response.json())
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error)})
   },[]) */
    return (
        <div>
            <h3>CardList</h3>
            <ul className='card-wrap'>
            {
                cardData.map((item)=><CardItem key={item.id} card={item}/>)
            }
            </ul>
        </div>
    );
};

export default CardList;
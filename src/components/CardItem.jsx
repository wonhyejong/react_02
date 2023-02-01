import React from 'react';
import {MdFavorite} from "react-icons/md"
import { useState } from 'react';
const CardItem = ({card}) => {
    const favListColor =[{color:'#ddd'},{color:'#F20'}];
    const [fav,setFav]  = useState(0);
    const [checkState, setCheckState]= useState('');
    const fncFav  = (e) => {
        setFav((fav === 0) ? 1 : 0)
        setCheckState(e.target.checked)
    }
    return (
        <li className='card'>
            <div className='img-set'>
                <dl>
                    <dt>{card.title}</dt>
                    <dd>{card.content}</dd>
                </dl>
            </div>
            <div className='btns'>
             <input 
             type='checkbox' 
             id={card.checkName} 
             name={card.checkName} 
             className="blind"
             data-checked={checkState}
             onChange={fncFav}
             />
             <label 
             htmlFor={card.checkName} 
             > 좋아요
              <MdFavorite style={favListColor[fav]} />
             </label>
            </div>
        </li>
    );
};

export default CardItem;
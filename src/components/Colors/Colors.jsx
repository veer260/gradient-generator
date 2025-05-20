import React from 'react';
import styles from './Colors.module.css';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import SingleColor from '../SingleColor/SingleColor';

function Colors() {

    const [openId, setOpenId] = React.useState("");
    function changeId(newId) {
        setOpenId(newId);
    }
    const colorsArr = [
        {
            color: "red",
            id: 1
        },
        {
              color: "yellow",
            id: 2
        },
        {
              color: "orange",
            id: 3
        },
        {
              color: "brown",
            id: 4
        },
        {
              color: "blue",
            id: 5
        }
    ]
    
    return (
        <div>
            <h2>Colors</h2>

            {
                colorsArr.map(({id, color}) =>  <SingleColor setId={changeId} openId={openId} color={color} colorId={id} key={id} />)
            }
         
        </div>
    )
}

export default Colors;
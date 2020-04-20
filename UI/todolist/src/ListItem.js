import React from 'react';
import './ListItem.css';

function ListItem(props)
{
    const items=props.items;
    const listItems = items.map(item=>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                <button className="icon" onClick={
                    () => props.deleteItem(item.key)
                }>X</button></p>
            </div>
        })
    return(
        <div>{listItems}</div>
    )
}
export default ListItem;
import React from 'react';
import './ListItem.css';

const ListItem = ({ name, description, address, id, onClick, fromListScreen }) => {
    return (
        <div
            className={fromListScreen ? 'container-list-element' : 'container-nearby'}
            onClick={fromListScreen ? onClick(id) : null}
        >
            <div className='list-element first'>
                <p>{ name }</p>
            </div>
            <div className='list-element second'>
                { description ? <p>{ description }</p> : null }
                { address ? <p>{ `${address.number}, ${address.street}, ${address.city} ${address.zip}` }</p> : null }
            </div>
        </div>
    );
};

export default ListItem;
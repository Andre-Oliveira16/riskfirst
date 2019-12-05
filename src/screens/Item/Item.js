import React from 'react';
import ListItem from '../../controls/ListItem/ListItem';
import './Item.css';

const Item = ({ address, email, image, phone, nearbyPlaces }) => {
    return (
        <div className='container-item'>
            <img src={image} alt={image} className='item-image' />
            <div className='container-columns'>
                <div className='element-column single'>
                    <h2>Address</h2>
                    <p>{ `${address.number} ${address.street}` }</p>
                    <p>{ `${address.city}, ${address.country} ${address.zip}` }</p>
                </div>
                <div className='element-column single'>
                    <h2>Contact</h2>
                    <p>{ phone }</p>
                    <p>{ email }</p>
                </div>
                <div className='element-column double'>
                    <h2>Nearby Places</h2>
                    { nearbyPlaces.map(({ id, name, address }) => (
                        <ListItem key={id} name={name} address={address} />
                    )) }
                </div>
            </div>
        </div>
    );
}

export default Item;
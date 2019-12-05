import React from 'react';
import ListItem from '../../controls/ListItem/ListItem';
import './List.css';

const List = ({ clients, onClick }) => {
    return (
        <div className='list-view'>
            <div>
                <div className='list-element first'>
                    <h3>NAME</h3>
                </div>
                <div className='list-element second'>
                    <h3>DESCRIPTION</h3>
                </div>
                { clients.map(({ name, description, id }) => (
                    <ListItem
                        key={id}
                        name={name}
                        description={description}
                        id={id}
                        onClick={onClick}
                        fromListScreen
                    />
                )) }
            </div>
        </div>
    );
};

export default List;
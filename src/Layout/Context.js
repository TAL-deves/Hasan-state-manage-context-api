import React, { createContext, useState } from 'react';

const userContext=createContext();

const Context = ({children}) => {
    const info={};

    const {users, setUsers}=useState([
        {
            'id':1,
            'name': 'Hasan',
            'age':'25',
            'city': 'pabna'
        },
        {
            'id':2,
            'name': 'mohi',
            'age':'24',
            'city': 'chandpur'
        },
        {
            'id':3,
            'name': 'orasur',
            'age':'24',
            'city': 'dhaka'
        },
        {
            'id':4,
            'name': 'rahman',
            'age':'23',
            'city': 'pabna'
        },
        {
            'id':5,
            'name': 'AR',
            'age':'27',
            'city': 'dhaka'
        }
    ])

    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default Context;
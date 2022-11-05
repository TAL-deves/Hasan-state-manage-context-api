import React, { useState } from 'react';
import SignleUser from '../SignleUser/SignleUser';

const PersonalInfo = () => {
// const users='hasan'


    const [users, setUsers]=useState([
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
    ]);
    return (
        <div>

            <h2>Total Users: {users.length}</h2>
            {
                users.map(user=>(<SignleUser
                key={user.id}
                user={user}
                ></SignleUser>))
            }
        </div>
    );
};

export default PersonalInfo;
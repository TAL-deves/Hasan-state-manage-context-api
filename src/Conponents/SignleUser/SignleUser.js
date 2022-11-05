import React from 'react';

const SignleUser = ({user}) => {
    const{id,name, age, city}=user;
    return (
        <div className="border rounded-1 border-success m-2 p-4">
            <h2>User Number: {id}</h2>
            <h3>{name}</h3>
            <h5>{age}</h5>
            <p>{city}</p>
        </div>
    );
};

export default SignleUser;
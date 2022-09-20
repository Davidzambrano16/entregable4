import React from 'react';

const UsersList = ({ users, deleteUser, updateUser }) => {
    return (
        <div className='conteinerList'>
            <ul className='conteinerList--ul'>
                {
                    users.map(user => (
                        <li className='cardUser' key={user.id}>
                            <div className='div--info'>
                                <b>{user.first_name} {user.last_name}</b>
                                <div>{user.email} </div>

                                <div>
                                    <i className="fa-solid fa-cake-candles"></i>
                                    <b className='textBirthday'>{user.birthday}</b>
                                </div>
                            </div>
                            <div className='div--buttons'>
                                <button
                                    className='buttonDelete'
                                    onClick={() => deleteUser(user.id)} >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                                <button 
                                className='buttonEdit'
                                onClick={() => updateUser(user)}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default UsersList;
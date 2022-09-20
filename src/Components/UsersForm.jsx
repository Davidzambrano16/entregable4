import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers, userSelected, setUserSelected }) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (userSelected !== null) {
            reset(userSelected)
        }
    }, [userSelected])

    const clear = () => {
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: ""
        })
    }

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${data.id}/`, data)
                .then(() => getUsers())
            clear();
            setUserSelected(null)
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response))
            clear()
        }
    }

    return (

        <form onSubmit={handleSubmit(submit)}>

            <h2 className='titleForm'>Formulary</h2>

            <div className='form--name'>
                <label htmlFor="first_name">First Name</label>
                <i className="fa-solid fa-user"></i>
                <input
                    type="text"
                    id="first_name"
                    placeholder='first name'
                    required
                    {...register("first_name")} />

                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    placeholder='last name'
                    required
                    {...register("last_name")} />
            </div>

            <div className='input'>
                <label htmlFor="email">Email</label>
                <i className="fa-solid fa-envelope"></i>
                <input
                    type="email"
                    name="email"
                    placeholder='email'
                    id="email"
                    required
                    {...register("email")} />
            </div>

            <div className='input'>
                <label htmlFor="password">Password</label>
                <i className="fa-solid fa-lock"></i>
                <input
                    type="password"
                    id="password"
                    placeholder='password'
                    required
                    {...register("password")} />
            </div>

            <div className='input'>
                <label htmlFor="birthday">Birthday</label>
                <i className="fa-solid fa-cake-candles"></i>
                <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    required
                    {...register("birthday")} />
            </div>
            <button className='submit'> {userSelected ? "update" : "submit"} </button>
        </form>


    );
};

export default UsersForm;
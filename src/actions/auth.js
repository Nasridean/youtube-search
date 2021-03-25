import axios from 'axios';
import jwt from 'jsonwebtoken';

export const login = (email) => ({
    type: 'LOGIN',
    email
})

export const startLogin = (data = 1) => axios.get('users.json')
.then((response) => {
    console.log(response, data)
    JSON.parse(response);
    //if (response.email !== email || response.password !== password) throw new Error("Неверные логин или пароль");
   // const token = jwt.sign({ email }, 'secret');
    //localStorage.setItem('token', token);
}).catch(e => e); 

export const logout = () => ({
type: 'LOGOUT'
})

export const startLogout = () => () => console.log('hi');
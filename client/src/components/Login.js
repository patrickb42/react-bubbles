import React, { useState } from "react";

import axiosWithAuth from '../utils/axiosWithAuth';

const Login = ({ history }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axiosWithAuth().post('http://localhost:5000/api/login', state);
        localStorage.setItem('token', response.data.payload);
        history.push('/bubbles');
      } catch (error) {
        console.error(error.response);
      }
    })();
  };

  const handleChange = e => setState({...state, [e.target.name]: e.target.value});

  if (localStorage.getItem('token') !== null) history.push('/bubbles');

  return (<>
    <h1>Welcome to the Bubble App!</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  </>);
};

export default Login;

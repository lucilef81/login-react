import React from 'react';
import Input from '../Input';
import FormStyled from '../FormStyled';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <FormStyled>
      <section className="form">
        <h2>Login</h2>
        <form
          onSubmit={handleSubmit}
          className="add-form"
          method="POST"
          action="/login"
        >
          <Input
            name="email"
            type="email"
            placeholder="Email"
            handleChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />

          <Input placeholder="Login" type="submit" />
        </form>
        <Link className="link" to="/register">
          Create Account /{' '}
        </Link>
        <Link className="link" to="/password">
          Forgot password
        </Link>
      </section>
    </FormStyled>
  );
};

export default LoginForm;

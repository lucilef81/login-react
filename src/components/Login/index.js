import React from 'react';
import Input from '../Input';
import { Link } from 'react-router-dom';

import FormStyled from '../FormStyled';
import PageTitle from '../PageTitle';

const LoginForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <FormStyled>
      <section className="form">
        <PageTitle title="Login" />
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
        <div className="links">
          <Link className="link" to="/register">
            Don't have an account yet ? Register here.
          </Link>
          <Link className="link" to="/password">
            Forgot password
          </Link>
        </div>
      </section>
    </FormStyled>
  );
};

export default LoginForm;

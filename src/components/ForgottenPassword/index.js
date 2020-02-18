import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import PageTitle from '../PageTitle';
import FormStyled from '../FormStyled';

const PasswordForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <FormStyled>
      <section className="form">
        <PageTitle title="Forgot password" />
        <form
          onSubmit={handleSubmit}
          className="add-form"
          method="POST"
          action="/login"
        >
          <Input
            name="login"
            type="text"
            placeholder="Login"
            handleChange={handleChange}
          />
          <Input placeholder="Generate new password" type="submit" />
        </form>
        <Link className="link" to="/register">
          Create Account /{' '}
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </section>
    </FormStyled>
  );
};

export default PasswordForm;

import React from 'react';
import Input from '../Input';
import FormStyled from '../FormStyled';
import { Link } from 'react-router-dom';

const PasswordForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <FormStyled>
      <section className="form">
        <h2>Forgotten password</h2>
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

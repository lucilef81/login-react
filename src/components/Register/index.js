import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import FormStyled from '../FormStyled';
import PageTitle from '../PageTitle';

const RegisterForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <FormStyled>
      <section className="form">
        <PageTitle title="Create an account" />
        <form
          onSubmit={handleSubmit}
          className="add-form"
          method="POST"
          action="/register"
        >
          <Input name="name" placeholder="Name" handleChange={handleChange} />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            handleChange={handleChange}
          />
          <Input name="age" placeholder="Age" handleChange={handleChange} />
          <Input name="city" placeholder="City" handleChange={handleChange} />
          <Input placeholder="create account" type="submit" />
        </form>
        <Link className="link" to="/login">
          Already have an account ? Login
        </Link>
      </section>
    </FormStyled>
  );
};

export default RegisterForm;

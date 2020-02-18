import styled from 'styled-components';
import config from '../styles/StyledConfig';

const FormStyled = styled.div`
  .form {
    background-color: #fff;
    color: ${config.dark};
    width: 500px;
    padding: 1rem;
    border-radius: 10px;
  }

  .add-form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .add-form {
    margin-top: 1.5rem;
  }

  .submit {
    background-color: ${config.success};
    margin: 1rem;
  }

  .input,
  .form-button {
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid ${config.primary};
  }

  label {
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: bold;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  .form-button {
    transition: all 300ms;
    margin-top: 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${config.primary};

    &:hover {
      transition: all 300ms;
      background-color: ${config.primary};
      color: #fff;
    }
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
  }

  .page-title,
  .link {
    color: ${config.dark};
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .link:hover {
    color: ${config.danger};
  }
`;

export default FormStyled;

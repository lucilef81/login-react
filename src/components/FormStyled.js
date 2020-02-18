import styled from 'styled-components';
import config from '../styles/StyledConfig';

const FormStyled = styled.div`
  .form {
    background-color: transparent;
    color: ${config.dark};
    width: 500px;
    margin: 0 auto;
    padding-top: 1rem;
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

  input {
    padding: 1rem;
    border-radius: 0.3rem;
    border: none;
  }

  form .button {
    transition: all 300ms;
    margin-top: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${config.dark};
    border: 1px solid ${config.dark};

    &:hover {
      transition: all 300ms;
      background-color: ${config.secondaryHover};
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

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import validator from 'validator';
import signUp from '../../../../apis/signUp';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import FormItem from '../FormItem';
import ErrorMessage from '../../../../components/ErrorMessage';
import withForm from '../../../../components/withForm';

const Form = styled.form`
  padding: 16px 0;
`;

const FIELDS = [{
  key: 'email',
  label: 'Email',
  type: 'text',
  validations: [{
    message: 'Please enter your email address',
    validator: (value) => !validator.isEmpty(value),
  },{
    message: 'Please enter a valid email address',
    validator: (value) => validator.isEmail(value),
  }],
},{
  key: 'password',
  label: 'Password',
  type: 'password',
  validations: [{
    message: 'Please enter your password',
    validator: (value) => !validator.isEmpty(value),
  },{
    message: 'Password must be at least 8 characters',
    validator: (value) => validator.isLength(value, { min:8 }),
  }],
},{
  key: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password',
  validations: [{
    message: 'Please confirm your password',
    validator: (value) => !validator.isEmpty(value),
  },{
    message: 'Confirmed password does not match the password',
    validator: (value, data) => value === data.password.value,
  }],
}];

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  color: #292b32;
  font-size: 14px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #bbc2dc;
`;

const SignInButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: #008fb4;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      errorMessage: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  setErrorMessage(message){
    this.setState({
      errorMessage:message,
    });
  }

  onSubmit() {
    const { data } = this.props;

    signUp({
      email: data.email.value,
      password: data.password.value
    })
    .catch((error) => {
      const message = error.response && {
        409: 'This email address has already been taken, please choose another one'
      }[error.response.status];
  
      this.setErrorMessage(message || 'Something went wrong, please try again later')
    });
  }


  render() {
    const { errorMessage } = this.state;

    const {
      data,
      formDirty,
      valid,
      getErrorMessage,
      setData,
      submit,
    } = this.props;

    return (
      <Modal>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body> 
          <Form onSubmit={submit(this.onSubmit)}>
          {errorMessage && (
            <FormItem>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormItem>
          )} 
            {FIELDS.map((f) => (
              <FormItem key={f.key} htmlFor={f.key} label={f.label}>
                <Input
                  onChange={setData(f.key)}
                  id={f.key}
                  type={f.type}
                />
                {(formDirty || data[f.key].dirty) && getErrorMessage(f)}
              </FormItem>
            ))}
            <FormItem>
              <button> Sign Up</button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already a member?&nbsp;
          <SignInButton>
            <Link to="/auth/signin">Sign In Now</Link>
          </SignInButton>
        </Modal.Footer>
      </Modal>
    ); 
  }
}

SignUpModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default withForm(FIELDS)(SignUpModal);

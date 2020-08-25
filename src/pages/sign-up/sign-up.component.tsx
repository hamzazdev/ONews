import React from 'react';
// import { connect } from 'react-redux';

// import LogoForm from '../../assets/logo-form.png';
// import LogoForm from '../../assets/logo.png';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// import { signUpStartAsync } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

interface SignUpState {}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class SignUp extends React.Component<SignUpState, SignUpProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();

    // const { name, email, password, confirmPassword } = this.state;
    const { password, confirmPassword } = this.state;

    // const { signUpStartAsync } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // signUpStartAsync(name, email, password);
  };

  handleChange = (event: any) => {
    const { name, value } = event.target;

    this.setState<any>({ [name]: value });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <span className='sign-up__background' />
        <div className='sign-up__content'>
          <form className='sign-up__content--form' onSubmit={this.handleSubmit}>
            <h2 className='sign-up__content--form--header'>Sign Up</h2>

            <FormInput
              name='name'
              type='text'
              value={name}
              handleChange={this.handleChange}
              required
              label='Display Name'
              placeholder='John Doe'
              maxLength='50'
            />
            <FormInput
              name='email'
              type='email'
              value={email}
              handleChange={this.handleChange}
              required
              label='Email Address'
              placeholder='example@google.com'
            />

            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={this.handleChange}
              required
              label='Password'
              placeholder='••••••••'
              minLength='8'
            />

            <FormInput
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              handleChange={this.handleChange}
              required
              label='Confirm Password'
              placeholder='••••••••'
              minLength='8'
            />

            <div className='sign-up__content--form--btns'>
              <CustomButton type='submit'>Sign Up</CustomButton>
              <CustomButton link='/auth/sign-in'>Sign In</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   signUpStartAsync: (name, email, password) =>
//     dispatch(signUpStartAsync(name, email, password)),
// });

export default SignUp;
// export default connect(null, mapDispatchToProps)(SignUp);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';

import Form from './Form';
import Input from './Input';
import Button from './Button';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class LoginForm extends Component {
  static propTypes = {
    users: PropTypes.object,
    createUser: PropTypes.func,
    getUsersList: PropTypes.func,
    userLogin: PropTypes.func,
  }

  state = {
    firstName: '',
    lastName: '',
    password: '',
    buttonDisabled: null,
  }

  componentDidMount() {
    this.onFormValidation();
  }

  onInputChange = (name, value, stateErrors) => {
    this.setState((state, props) => {
      const newState = {...this.state, [name]: value };
      return newState;
    }, this.onFormValidation);
  }

  onFormValidation = () => {
    const { firstName, lastName, password } = this.state;
    const buttonDisabled = firstName && lastName && password;
    this.setState({ buttonDisabled });
  }

  onButtonClick = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  onUserLogin = (e) => {
    e.preventDefault();
    this.props.userLogin({firstName: this.state.firstName, password: this.state.password});
  }

  clearState = () => {
    this.setState({firstName: '', lastName: '', password: ''}, this.onFormValidation);
  }

  render() {
    const { users, routerMatch } = this.props;
    console.log(this.props)
    return (
      <div>
        <div>
          <Link onClick={this.clearState} to='/login'>
            Login
          </Link>
          <Link onClick={this.clearState} to='/register'>
            Registration
          </Link>
        </div>
        {
          routerMatch.path === '/login' &&
            <Form>
              {
                users.error &&
                  <div>{users.error.message}</div>
              }
              <Input
                label="First name"
                value={this.state.firstName}
                name="firstName"
                onInputChange={this.onInputChange}
                required
              />
              <Input
                label="Password"
                type="password"
                value={this.state.password}
                name="password"
                onInputChange={this.onInputChange}
              />
              <Button onButtonClick={this.onUserLogin}>
                Login
              </Button>
            </Form>
        }
        {
          routerMatch.path === '/register' &&
            <Form>
              {
                users.error &&
                  <div>{users.error.message}</div>
              }
              <Input
                label="First name"
                value={this.state.firstName}
                name="firstName"
                onInputChange={this.onInputChange}
                required
              />
              <Input
                label="Last name"
                value={this.state.lastName}
                name="lastName"
                onInputChange={this.onInputChange}
              />
              <Input
                label="Password"
                type="password"
                value={this.state.password}
                name="password"
                onInputChange={this.onInputChange}
              />
              <Button disabled={!this.state.buttonDisabled} onButtonClick={this.onButtonClick}>
                Create user
              </Button>
            </Form>
        }
      </div>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
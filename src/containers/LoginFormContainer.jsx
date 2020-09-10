import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUser, getUsersList, userLogin } from '../actions/userActions';
import { getAuthStatus } from '../actions/authActions'

import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component {
  static propTypes = {
    createUser: PropTypes.func,
    getUsersList: PropTypes.func,
    userLogin: PropTypes.func,
    users: PropTypes.object,
    pathname: PropTypes.string,
  }

  render() {
    const { users, pathname, createUser, getUsersList, userLogin } = this.props;
    return (
      <LoginForm
        users={users}
        createUser={createUser}
        getUsersList={getUsersList}
        userLogin={userLogin}
        getAuthStatus={getAuthStatus}
        pathname={pathname}
      />
    )
  }
}


const mapStateToProps = ({
  users,
  router
}) =>({
  users,
  pathname: router.location.pathname,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin,
  createUser,
  getUsersList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
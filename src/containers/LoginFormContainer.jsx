import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { createUser, getUsersList, userLogin } from '../actions/userActions';

import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component {
  static propTypes = {
    createUser: PropTypes.func,
    getUsersList: PropTypes.func,
    userLogin: PropTypes.func,
    users: PropTypes.object,
  }

  render() {
    const { users, match, createUser, getUsersList, userLogin } = this.props;
    return (
      <LoginForm
        users={users}
        routerMatch={match}
        createUser={createUser}
        getUsersList={getUsersList}
        userLogin={userLogin}
      />
    )
  }
}


const mapStateToProps = ({users}) => ({users});
const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin,
  createUser,
  getUsersList,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
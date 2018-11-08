import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getUsersList } from '../actions/userActions';

import UserList from '../components/UserList';

class UsersListContainer extends React.Component {
  render() {
    const { users, getUsersList } = this.props;
    return (
      <UserList
        isFetching={users.isFetching}
        rawUsersList={users.rawUsersList}
        error={users.error}
        getUsersList={getUsersList}
      />
    )
  }
}

UsersListContainer.propTypes = {
  users: PropTypes.object,
  getUsersList: PropTypes.func,
};

const mapStateToProps = ({users}) => ({users});
const mapDispatchToProps = dispatch => bindActionCreators({
  getUsersList
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersListContainer));
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsersList } from '../../actions/userActions';

class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersList();
  }
  
  render() {
    const { users } = this.props;
    return (
      <div>
        {
          users.isFetching &&
            <div>Loading...</div>
        }
        {
          users.rawUsersList.length > 0 && !users.isFetching &&
            users.rawUsersList.map(user => (
              <div key={user._id}>
                <span>{user.firstName}</span>
                {' '}
                <span>{user.lastName}</span>
              </div>
            ))
        }
        {
          users.error &&
            <div>{users.error.data}</div>
        }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
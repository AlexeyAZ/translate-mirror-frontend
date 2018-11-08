import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
  static propTypes = {
    getUsersList: PropTypes.func,
    isFetching: PropTypes.bool,
    rawUsersList: PropTypes.array,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])
  };

  componentDidMount() {
    this.props.getUsersList();
  }

  render() {
    const { isFetching, rawUsersList, error } = this.props;
    return (
      <div>
        {
          isFetching && <div>Loading...</div>
        }
        {
          rawUsersList.length > 0 && !isFetching &&
            rawUsersList.map(user => (
              <div key={user._id}>
                <span>{user.firstName}</span>
                {' '}
                <span>{user.lastName}</span>
              </div>
            ))
        }
        {
          error && <div>{error.data ? error.data : error}</div>
        }
      </div>
    );
  }
}

export default UserList;
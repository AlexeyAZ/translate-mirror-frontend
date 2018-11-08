import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  static propTypes = {
    children: PropTypes.func,
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.isFetching &&
            <div>Loading...</div>
        }
        {
          data.rawUsersList.length > 0 && !data.isFetching && this.props.children(data.rawUsersList)
            // data.rawUsersList.map(user => (
            //     <div key={user._id}>
            //       <span>{user.firstName}</span>
            //       {' '}
            //       <span>{user.lastName}</span>
            //     </div>
            //   ))
        }
        {
          data.error && this.props.children(data.error)
        }
      </div>
    );
  }
}

export default Component;
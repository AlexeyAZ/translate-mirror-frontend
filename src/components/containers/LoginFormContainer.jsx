import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const LoginFormContainer = props => {
  console.log(props)
  return (
    <div>
      LoginFormContainer
    </div>
  );
};

LoginFormContainer.propTypes = {
  users: PropTypes.object,
};

const mapStateToProps = ({users}) => ({users});

export default connect(mapStateToProps)(LoginFormContainer);
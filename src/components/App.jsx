import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { getAuthStatus } from '../actions/authActions'

import LoginFormContainer from '../containers/LoginFormContainer'
import Routes from './Routes';

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthStatus();
  }

  render() {
    const { logged } = this.props;
    console.log(logged)
    return (
      logged ? <Routes /> : <LoginFormContainer />
    );
  }
}

App.propTypes = {
  logged: PropTypes.bool,
  children: PropTypes.any,
};

const mapStateToProps = ({ auth }) => ({
  logged: auth.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAuthStatus
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
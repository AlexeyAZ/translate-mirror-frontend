import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getUsersList } from '../actions/userActions';

// import styles from '../styles/App.module.scss';

class App extends Component {
  static propTypes = {
    getUsersList: PropTypes.func,
  }
  componentDidMount() {
    this.props.getUsersList();
  }
  
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <div>1</div>} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersList: () => dispatch(getUsersList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

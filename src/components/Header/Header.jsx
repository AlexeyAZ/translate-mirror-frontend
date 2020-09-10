import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';
console.log(styles)

class Header extends Component {
  render() {
    return (
      <header className={`header ${styles.header}`}>
        <Link onClick={this.clearState} to='/admin'>
          User list
        </Link>
        <Link onClick={this.clearState} to='/login'>
          Login
        </Link>
        <Link onClick={this.clearState} to='/register'>
          Registration
        </Link>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        Header
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
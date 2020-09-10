import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, showHeader, showFooter, isSidebarOpen }) => {
  return (
    <div className={classNames(styles.layout, { [styles.sidebarOpen]: isSidebarOpen })}>
      {
        showHeader && <Header />
      }
      <main className={`content ${styles.content}`}>
        {children}
      </main>
      {
        showFooter && <Footer />
      }
    </div>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  children: PropTypes.any,
  isSidebarOpen: PropTypes.bool,
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
};

export default Layout;
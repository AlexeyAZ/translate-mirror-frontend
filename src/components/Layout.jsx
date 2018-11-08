import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import styles from './Layout.module.scss';

const Layout = props => {
  console.log(props);
  return (
    <div className={styles.layout}>
      {
        props.showHeader && <Header />
      }
      <main className={styles.content}>
        {props.children}
      </main>
      {
        props.showFooter && <Footer />
      }
    </div>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  children: PropTypes.any,
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true
};

export default Layout;
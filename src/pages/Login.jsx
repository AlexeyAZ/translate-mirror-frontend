import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import LoginFormContainer from '../containers/LoginFormContainer';

import grid from '../styles/grid.module.scss';

const Login = () => {
  return (
    <Layout showHeader={false}>
      <div className={grid.container}>
        <LoginFormContainer />
      </div>
    </Layout>
  );
};

Login.propTypes = {
  
};

export default Login;
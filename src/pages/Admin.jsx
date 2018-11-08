import React from 'react';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import UsersListContainer from '../containers/UsersListContainer';

const Admin = () => {
  return (
    <Layout>
      <UsersListContainer />
    </Layout>
  );
};

Admin.propTypes = {
  
};

export default Admin;
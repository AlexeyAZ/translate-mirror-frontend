import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions';

import Sidebar from '../components/Sidebar/Sidebar';
import Layout from '../containers/LayoutContainer';
import Button from '../components/Button';


const Home = () => {
  const items=[{name: 'first'}, {name: 'second'}];
  return (
    <Layout>
      <Sidebar items={!items}>
        <Button onButtonClick={e => console.log('click')}>
          Create article
        </Button>
      </Sidebar>
      <div>
        test<br />
      </div>
    </Layout>
  );
};

Home.propTypes = {
  
};

const mapStateToProps = ({ selectedUser }) => ({ selectedUser });

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
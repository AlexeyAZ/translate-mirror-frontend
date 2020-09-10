import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import switchSidebar from '../actions/sidebarActions';
import Layout from '../components/Layout';



class LayoutContainer extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.any,
  };

  render() {
    const { isOpen, children } = this.props;
    return (
      <Layout
        isSidebarOpen={isOpen}
      >
        {children}
      </Layout>
    );
  }
}

const mapStateToProps = ({
  sidebar,
}) => ({
  isOpen: sidebar.open
});

export default connect(mapStateToProps)(LayoutContainer);
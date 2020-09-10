import React, { Component } from 'react';
import Mirror from '../components/Mirror';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUser } from '../actions/userActions';


class MirrorContainer extends Component {
  render() {
    return (
      <Mirror />
    );
  }
}

MirrorContainer.propTypes = {

};

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
})

export default connect(mapDispatchToProps)(MirrorContainer);
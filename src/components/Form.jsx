import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    const { children } = this.props;
    return (
      <form>
        {children}
      </form>
    );
  }
}

export default Form;
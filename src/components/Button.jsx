import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onButtonClick: PropTypes.func,
  };

  render() {
    const {children, onButtonClick, disabled } = this.props;
    return (
      <button disabled={disabled} onClick={onButtonClick}>
        {children}
      </button>
    );
  }
}

export default Button;
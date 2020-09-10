import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    onButtonClick: PropTypes.func,
    className: PropTypes.any
  };

  onButtonClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick(e);
  }

  render() {
    const {children, disabled, className } = this.props;
    return (
      <button disabled={disabled} onClick={this.onButtonClick} className={className}>
        {children}
      </button>
    );
  }
}

export default Button;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.bool,
    errorMsg: PropTypes.string,
    onInputChange: PropTypes.func,
    onInputValidation: PropTypes.func,
  }

  onInputChange = (name, value, e) => {
    this.props.onInputChange(name, value, e);
    // this.props.onInputValidation(name, value, e);
  }

  render() {
    const { label, value, name, error, errorMsg, type } = this.props;
    return (
      <div>
        <label>
          <div>{label}</div>
          <input type={type ? type : 'text'} value={value} onChange={(e) => this.onInputChange(name, e.target.value, e)} />
          {
            error && <div>
              {errorMsg}
            </div>
          }
        </label>
      </div>
    );
  }
}

export default Input;
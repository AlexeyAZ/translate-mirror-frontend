import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sidebarSwitch } from '../../actions/sidebarActions';


import Button from '../Button';

import styles from './Sidebar.module.scss';

const Sidebar = ({ items, children, isOpen, sidebarSwitch }) => {
  return (
    <div className={classNames(styles.sidebar, { [styles.open]: isOpen })}>
      <div className={styles.header}>
        Sidebar Header
      </div>
      {
        items
          ?
            items.map((item, index) => (
              <div key={index}>
                {item.name}
              </div>
            ))
          :
            children
      }
      <Button className={styles.switch} onButtonClick={sidebarSwitch}>
        {
          isOpen ? '<' : '>'
        }
      </Button>
    </div>
    
  );
};

Sidebar.propTypes = {
  items: PropTypes.array,
  isOpen: PropTypes.bool,
  sidebarSwitch: PropTypes.func,
  children: PropTypes.any,
};

const mapStateToProps = ({ sidebar }) => ({ isOpen: sidebar.open });

const mapDispatchToProps = dispatch => bindActionCreators({
  sidebarSwitch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Style from './style.module.scss';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children, requestCount } = this.props;
    return (
      <Container>
        <Header />
        {children}
        {
          requestCount > 0 ? (
            <div className={Style.spinner} />
          ) : ('')
        }
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    requestCount: state.homeReducer.requestCount
  };
};

export default connect(mapStateToProps, {})(Layout);
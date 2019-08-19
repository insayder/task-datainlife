import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import './index.css';

class Footer extends React.PureComponent {

  render() {
    return (
      <footer className="page-footer">
        <Button onClick={() => this.props.getDataBasket(this.props.basketData)} color="warning"><img src="https://img.icons8.com/android/24/000000/shopping-cart.png" alt="no img" /></Button>
        <div></div>
      </footer>
    );
  }
}

const mapStateToProps = (data) => ({
  data
});

export default connect(
  mapStateToProps,
  { ...actions },
)(Footer);
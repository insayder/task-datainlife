import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './index.css';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="main-toolbar">
        <p>Категории</p>
        <Nav vertical>
          <NavItem>
            <NavLink onClick={}>Таблица размеров манжет</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Манжеты</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Кольца</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Кольца защитные</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Разное</NavLink>
          </NavItem>
        </Nav>

      </div>
    );
  }
}

const mapStateToProps = (data) => ({
  data
});

export default connect(
  mapStateToProps,
  { ...actions },
)(Toolbar);
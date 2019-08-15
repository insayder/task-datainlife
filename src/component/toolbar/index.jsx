import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './index.css';

class Toolbar extends React.Component {
  render() {
    return (
      <div className="main-toolbar">
        <p>Категории</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(1)}>Таблица размеров манжет</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(2)}>Манжеты</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(3)}>Кольца</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(4)}>Кольца защитные</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(5)}>Разное</NavLink>
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
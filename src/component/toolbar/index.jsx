import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './index.css';

class Toolbar extends React.PureComponent {
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
            <NavLink href="#" onClick={() => this.props.getSection(3)}>Кольца по ГОСТ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(4)}>Кольца защитные</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.props.getSection(5)}>Весь ассортимент</NavLink>
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
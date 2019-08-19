import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Table, Spinner, Input } from 'reactstrap';
import Footer from '../footer';
import './index.css';

class MainTable extends React.PureComponent {

  state = {
    data: []
  }

  async componentDidMount() {
    await this.props.getDataTable();
    const { data } = this.props.data.default.reducersTables.dataTable;
    this.setState({ data: data }, () => console.log(this.state.data))
  }
  // сортировка по разделам
  sortData = () => {
    const dataSection = this.props.data.default.reducersTables.dataSection;
    switch (dataSection) {
      case 1:
        return '192';
      case 2:
        return '113';
      case 3:
        return '99';
      case 4:
        return '211';
      case 5:
        return 'ALL';
      default:
        return 'ALL';
    }
  }

  // получить значение инпута
  updateInputValue = (event, itemId, price) => {
    const { data } = this.state;
    const newData = data.map((items) => {
      const searchValue = items.rid === itemId ? event.target.value * price : items.total;
      const searchTotal = items.rid === itemId ? event.target.value : items.value;
      return Object.assign(items, { total: searchValue, value: searchTotal });
    })
    this.setState({
      data: newData,
    })
  }

  getBascetForm = () => {
    const { data } = this.state;
    const newData = data.map((items) => {
      let product = {
        [items.rid]: items.value
      }
      if (items.value !== undefined) {
        return product;
      }
    })
    return newData;
  }


  // получить тулбар
  getTable = () => {
    const { data } = this.state;
    const sort = data.filter((item) => {
      if (item.rparent === 'undefined' || this.sortData() === 'ALL') {
        return item;
      }
      if (item.rparent !== 'ALL') {
        return item.rparent === this.sortData()
      }
      return null;
    });
    const row = sort.map((item, i) => {
      let total = item.total === undefined ? 0 : item.total;
      return (
        <tr key={i}>
          <th scope="row">{item.rid}</th>
          <td>{item.rname}</td>
          <td>{item.rposition}</td>
          <td><Input
            bsSize='sm'
            type="number"
            value={item.value}
            onChange={(change) => this.updateInputValue(change, item.rid, item.rposition)} /></td>
          <td>{total}</td>
        </tr>
      )
    })
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>id</th>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </Table>
    )
  }

  render() {
    const data = this.props.data.default.reducersTables.dataTable;
    return (
      <Fragment>
        {data ? this.getTable() : <Spinner className="main-spinner" style={{ width: '5rem', height: '5rem' }} />}
        <Footer basketData={this.getBascetForm()} />
      </Fragment>
    );
  }
}

const mapStateToProps = (data) => ({
  data
});

export default connect(
  mapStateToProps,
  { ...actions },
)(MainTable);
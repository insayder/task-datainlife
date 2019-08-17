import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Table, Spinner, Input } from 'reactstrap';
import './index.css';

class MainTable extends React.Component {

  state = {
    data: []
  }

  async componentDidMount() {
    await this.props.getDataTable();
    const { data } = this.props.data.default.reducersTables.dataTable;
    this.setState({ data: data })
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
    // const totals = event.target.value * price;
    const newData = data.map((items) => {
      const searchValue = items.rid === itemId ? event.target.value * price : items.total;
      return Object.assign(items, { total: searchValue });
    })
    this.setState({
      data: newData
    })
  }

  // получить тулбар
  getTable = () => {
    const { data } = this.state;
    console.log(this.state.data.map((item) => item.total))
    console.log(data);
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
            // value={this.state.inputValue}
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
      data ? this.getTable() : <Spinner className="main-spinner" style={{ width: '5rem', height: '5rem' }} />
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
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Table, Spinner } from 'reactstrap';
import './index.css';

class MainTable extends React.PureComponent {
  async componentDidMount() {
    await this.props.getDataTable();
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
  // получить тулбар
  getTable = () => {
    const { data } = this.props.data.default.reducersTables.dataTable;
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
      return (
        <tr key={i}>
          <th scope="row">{item.rid}</th>
          <td>{item.rname}</td>
          <td>{item.rposition}</td>
          <td>{item.rparent}</td>
          <td></td>
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
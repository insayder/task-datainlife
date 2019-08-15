import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/tables';
import { Table, Spinner } from 'reactstrap';
import './index.css';

class MainTable extends React.PureComponent {
  async componentDidMount() {
    await this.props.getDataTable();
  }

  // функция сортировки
  sortData = (data) => {
    data.sort((a, b) => a - b);
    return data;
  }

  // получить тулбар
  getTable = () => {
    console.log(this.props.data.default.reducersTables.dataTable.data);
    const { data } = this.props.data.default.reducersTables.dataTable;
    const sort = data.filter((item) => {
      return item.rparent;
    });
    /* console.log(this.props); */
    const row = this.sortData(sort).map((item, i) => {
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
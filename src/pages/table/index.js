import React, { Component } from 'react';
import { Table } from 'antd';
import './index.less'

class ZPTable extends Component {
  state = {
    selectedRows: [],
    tableData: {},
  }

  componentDidMount () {
    let tableData = {
      //表头
      columns: [
        {
          title: 'Full Name',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          render: (name) => <a href='#'>{name}</a>,
        },
        {
          title: 'Age',
          width: 100,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left',
        },
        {
          title: 'Column 1',
          dataIndex: 'address',
          key: '1',
          width: 150,
        },
        {
          title: 'Column 2',
          dataIndex: 'address',
          key: '2',
          width: 150,
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: '3',
          width: 150,
        },
        {
          title: 'Column 4',
          dataIndex: 'address',
          key: '4',
          width: 150,
        },
        {
          title: 'Column 5',
          dataIndex: 'address',
          key: '5',
          width: 150,
        },
        {
          title: 'Column 6',
          dataIndex: 'address',
          key: '6',
          width: 150,
        },
        {
          title: 'Column 7',
          dataIndex: 'address',
          key: '7',
          width: 150,
        },
        {
          title: 'Column 8', dataIndex: 'address', key: '8',
          width: 150
        },
        {
          title: 'Column 9', dataIndex: 'address', key: '9',
          width: 150
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          render: (record) => <a onClick={() => this.action(record)}>action</a>,
        },
      ],
      //列表数据
      data: [],
    }
    //模拟数据
    for (let i = 0; i < 100; i++) {
      tableData.data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    this.setState({
      tableData: tableData
    })
  }
  //点击触发方法
  action = (record) => {
    console.log("record--->", record)
  }
  //多选变化
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRows changed: ', selectedRows);
    this.setState({ selectedRowKeys });
  };

  render () {
    const { selectedRows, tableData } = this.state;
    //多选框配置
    const rowSelection = {
      selectedRows,
      onChange: this.onSelectChange,
    }

    return (
      <div className="table-container">
        <Table rowSelection={rowSelection} columns={tableData.columns} dataSource={tableData.data} scroll={{ x: 1500 }} />
      </div>
    );
  }
}

export default ZPTable;
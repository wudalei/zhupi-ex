import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import './index.less'
import tableData from './data'

class ZPTable extends Component {
  render () {
    //模拟数据
    for (let i = 0; i < 100; i++) {
      tableData.data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }

    return (
      <div className="table-container">
        <Table columns={tableData.columns} dataSource={tableData.data} scroll={{ x: 1500 }} />
      </div>
    );
  }
}

export default ZPTable;
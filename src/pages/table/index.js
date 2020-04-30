import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import './index.less'
import tableData from './data'

class ZPTable extends Component {
  render () {
    return (
      <div className="chart-container">
        <Table columns={tableData.columns} dataSource={tableData.data} />
      </div>
    );
  }
}

export default ZPTable;
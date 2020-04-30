import React, { Component } from 'react';
import { Tabs, Carousel, Layout, Icon, Breadcrumb } from 'antd'

const { Content, Footer } = Layout;
const { TabPane } = Tabs

class HomeContent extends Component {
  constructor(props) {
    super(props)
  }

  onChange = activeKey => {
    this.props.onChance({
      activeTag: activeKey
    })
  };

  onEdit = (targetKey, action) => {
    if (action === 'remove') {
      this.remove(targetKey)
    }
  }

  //关闭标签
  remove = (targetKey) => {
    let activeTag = this.props.activeTag
    let tags = this.props.tags
    let preIndex = tags.findIndex(item => item.key === targetKey) - 1
    preIndex = Math.max(preIndex, 0)

    tags = tags.filter(item => item.key !== targetKey)

    if (targetKey === activeTag) {
      activeTag = tags[preIndex] ? tags[preIndex].key : ''
    }
    this.props.onChance({
      activeTag,
      tags
    })
  }
  render () {
    const { tags, activeTag } = this.props
    console.log('tags-->', tags)
    return (
      <div className='content-container'>
        {tags.length ? (
          <div className="site-layout-background" style={{ minHeight: 460 }}>
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={activeTag}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {tags.map(pane => (
                <TabPane tab={pane.name} key={pane.key}>
                  <Content>
                    {pane.content}
                  </Content>
                </TabPane>
              ))}
            </Tabs>
          </div>) : ''
        }
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </div>
    );
  }
}

export default HomeContent;
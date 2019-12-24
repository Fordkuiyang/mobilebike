import React from "react";
import { Card, Button, Tabs, message, Icon } from "antd";
import "./ui.less";
const TabPane = Tabs.TabPane;
class TabPages extends React.Component {
  callback = key => {
    message.info("hi, 你选择了页签：" + key);
  };
  newTabIndex = 0;
  componentWillMount() {
    const panes = [
      {
        title: "Tab 1",
        content: "tab 1",
        key: "1"
      },
      {
        title: "Tab 2",
        content: "tab 2",
        key: "2"
      },
      {
        title: "Tab 3",
        content: "tab 3",
        key: "3"
      }
    ];
    this.setState({
      activeKey: panes[0].key,
      panes
    });
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: activeKey,
      content: `Content of ${activeKey}`,
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={key => this.callback(key)}>
            <TabPane tab="Tab 1" key="1">
              欢迎选择学习React
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              欢迎选择学习Vue
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              React是一个非常强大的Mv*框架
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={key => this.callback(key)}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  Tab1
                </span>
              }
              key="1"
            >
              欢迎选择学习React
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  Tab2
                </span>
              }
              key="2"
            >
              欢迎选择学习Vue
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  Tab3
                </span>
              }
              key="3"
            >
              React是一个非常强大的Mv*框架
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图页签" className="card-wrap">
          <Tabs
            type="editable-card"
            activeKey={this.state.activeKey}
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map(panel => {
              return (
                <TabPane tab={panel.title} key={panel.key}>
                  {panel.content}
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default TabPages;

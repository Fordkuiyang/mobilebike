import React from "react";
import { Card, Table, Col, Modal, Button, message } from "antd";
import axios from "./../../axios";
import Util from "./../../utils/utils";
import utils from "./../../utils/utils";
class BasicTable extends React.Component {
  state = { dataSource2: [] };
  params = {
    page: 1
  };
  componentDidMount() {
    const data = [
      {
        id: "0",
        userName: "Jack",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress: "陕西省西安市莲湖区象牙塔",
        morningTime: "09:00"
      },
      {
        id: "1",
        userName: "Belinda",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress: "陕西省西安市莲湖区象牙塔",
        morningTime: "09:00"
      },
      {
        id: "2",
        userName: "Sandy",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress: "陕西省西安市莲湖区象牙塔",
        morningTime: "09:00"
      },
      {
        id: "3",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      }
    ];
    data.map((item, index) => {
      item.key = index;
    });
    console.log(data);
    this.setState({
      dataSource: data
    });
    this.request();
  }

  //动态获取数据
  request = () => {
    let _this = this;
    axios
      .ajax({
        url: "/table/list",
        data: {
          params: {
            page: this.params.page
          },
          isShowloading: true
        }
      })
      .then(res => {
        if (res.code === 0) {
          res.lives.list.map((item, index) => {
            item.key = index;
          });
          this.setState({
            dataSource2: res.lives.list,
            selectedRowKeys: [],
            selectedRows: null,
            pagination: utils.pagination(res, current => {
              //todoll
              _this.params.page = current;
              this.request();
            })
          });
        }
      });
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.info({
      title: "信息",
      content: `用户名: ${record.userName},用户爱好:${record.interest}`
    });
    this.setState({
      selectedRowKeys: selectKey,
      selectItem: record
    });
  };
  //多选执行删除动作
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map(item => {
      ids.push(item.id);
    });
    Modal.confirm({
      title: "删除提示",
      content: `您确定要删除这些数据吗？ ${ids.join(",")}`,
      onOk: () => {
        message.success("删除成功");
        this.request();
      }
    });
  };
  render() {
    const columns = [
      {
        title: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "userName"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "currentState",
        render(currentState) {
          let config = {
            "1": "咸鱼一条",
            "2": "风华浪子",
            "3": "北大才子",
            "4": "百度FE",
            "5": "创业者"
          };
          return config[currentState];
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            "1": "游泳",
            "2": "打篮球",
            "3": "踢足球",
            "4": "跑步",
            "5": "爬山",
            "6": "桌球",
            "7": "麦霸",
            "8": "骑行"
          };
          return config[interest];
        }
      },
      {
        title: "生日",
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        dataIndex: "contactAddress"
      },
      {
        title: "早起时间",
        dataIndex: "morningTime"
      }
    ];
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    };
    const rowCheckBoxSelection = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        });
      }
    };
    return (
      <div>
        <Card title="基础表格">
          <Table
            columns={columns}
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
          ></Table>
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{ margin: "10px 0" }}>
          <Table
            columns={columns}
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
          ></Table>
        </Card>
        <Card title="Mock-单选" style={{ margin: "10px 0" }}>
          <Table
            columns={columns}
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                } // 点击行
              };
            }}
            pagination={false}
            dataSource={this.state.dataSource2}
          ></Table>
        </Card>
        <Card title="Mock-复选框" style={{ margin: "10px 0" }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            columns={columns}
            bordered
            rowSelection={rowCheckBoxSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                } // 点击行
              };
            }}
            pagination={false}
            dataSource={this.state.dataSource2}
          ></Table>
        </Card>
        <Card title="Mock-表格分页" style={{ margin: "10px 0" }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            columns={columns}
            bordered
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default BasicTable;

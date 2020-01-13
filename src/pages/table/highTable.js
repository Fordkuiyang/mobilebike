import React from "react";
import { Card, Table, Col, Modal, Button, message, Badge } from "antd";
import axios from "./../../axios";
import utils from "./../../utils/utils";
class BasicTable extends React.Component {
  state = { dataSource2: [], sortOrder: "" };

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
      },
      {
        id: "4",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      },
      {
        id: "5",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      },
      {
        id: "6",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      },
      {
        id: "7",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      },
      {
        id: "8",
        userName: "Raymond",
        sex: "1",
        currentState: "1",
        interest: "1",
        birthday: "2019-12-31",
        contactAddress:
          "陕西省西安市莲湖区象牙塔深宅巷子，不知去处，你可寻我，我不可不见，你不可多想",
        morningTime: "09:00"
      },
      {
        id: "9",
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
    this.setState({
      dataSource: data
    });
    this.request();
  }
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    });
  };
  //动态获取数据
  request = () => {
    axios
      .ajax({
        url: "/table/high/list",
        data: {
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
            selectedRows: null
          });
        }
      });
  };
  //多选执行删除动作
  handleDelete =(item)=>{
let id = item.id;
Modal.confirm({
  title:'确认',
  content:'您确认要删除此条数据吗？',
  onOk:()=>{
    message.success('删除成功');
    this.request()
  }
});
  }
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
    const columns2 = [
      {
        title: "id",
        dataIndex: "id",
        width: 100,
        fixed: "left"
      },
      {
        title: "用户名",
        width: 100,
        dataIndex: "userName",
        fixed: "left"
      },
      {
        title: "性别",
        width: 100,
        dataIndex: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        width: 100,
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
        width: 100,
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
        width: 100,
        dataIndex: "birthday"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "联系地址",
        width: 100,
        dataIndex: "contactAddress"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      },
      {
        title: "早起时间",
        width: 100,
        dataIndex: "morningTime"
      }
    ];

    const columns3 = [
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
        title: "年龄",
        dataIndex: "age",
        sorter: (a, b) => a.age - b.age,
        defaultSortOrder: this.state.sorterOrder
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
    const columns4 = [
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
        title: "年龄",
        dataIndex: "age"
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
            "1": <Badge count={4} status="success" text="游泳" />,
            "2": <Badge count={4} status="error" text="打篮球" />,
            "3": <Badge count={4} status="default" text="踢足球" />,
            "4": <Badge count={4} status="processing" text="跑步" />,
            "5": <Badge count={4} status="warning" text="爬山" />,
            "6": <Badge count={4} status="success" text="桌球" />,
            "7": <Badge count={4} status="success" text="麦霸" />,
            "8": <Badge count={4} status="success" text="骑行" />
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
        title: "操作",
        render:(text, item)=>{
          return <Button size='small' onClick={(item)=>this.handleDelete(item)}>删除</Button>
        }
      }
    ];
    return (
      <div>
        <Card title="头部固定">
          <Table
            columns={columns}
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            scroll={{ y: 480 }}
          >
          </Table>
        </Card>
        <Card title="左侧固定" style={{ margin: "10px 0" }}>
          <Table
            columns={columns2}
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            scroll={{ y: 240, x: 2504 }}
          ></Table>
        </Card>
        <Card title="表格排序" style={{ margin: "10px 0" }}>
          <Table
            columns={columns3}
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
            scroll={{ y: 240 }}
            onChange={this.handleChange}
          ></Table>
        </Card>
        <Card title="操作按钮" style={{ margin: "10px 0" }}>
          <Table
            columns={columns4}
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
            scroll={{ y: 240 }}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default BasicTable;

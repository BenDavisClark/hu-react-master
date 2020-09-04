import React from 'react'
import { Form, Input, Button, Checkbox, Radio, Select, message, DatePicker, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker

const { Option } = Select
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 }
}

const tailLayout = {
    wrapperCol: { offset: 6, span: 12 }
}
const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

class Demo extends React.Component {
    onFinish = fieldsValue => {
        const rangeValue = fieldsValue['range-picker'];
        const values = {
            ...fieldsValue,
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
        }
        console.log('Success:', values)
        message.success('提交成功')
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }
  render() {
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            style={{paddingTop: '50px'}}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input  placeholder="用户名"/>
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input.Password  placeholder="密码"/>
            </Form.Item>

            <Form.Item
                label={
                    <span>
                        在职状态&nbsp;
                          <Tooltip title="你有什么想对我说的">
                              <QuestionCircleOutlined />
                         </Tooltip>
                  </span>
                }
                name="status"
                rule={[{ required:true, message: '请选择在职状态！' }]}
            >
                <Radio.Group>
                    <Radio.Button value="horizontal">在职</Radio.Button>
                    <Radio.Button value="vertical">离职</Radio.Button>
                    <Radio.Button value="inline">退休</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                name="select"
                label="国籍"
                rules={[{ required: true, message: '请选择你的国籍!' }]}
            >
                <Select placeholder="请选择">
                    <Option value="china">中国</Option>
                    <Option value="usa">美国</Option>
                </Select>
            </Form.Item>

            <Form.Item name="range-picker" label="日期" {...rangeConfig}>
                <RangePicker />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="mr-10">
                    保存
                </Button>
                <Button>
                    取消
                </Button>
            </Form.Item>
        </Form>
    );
  }
}

export default Demo
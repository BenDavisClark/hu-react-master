import React from 'react'
import {
  Select, InputNumber, Switch, Radio,
  Slider, Button, Upload,
  Row, Col, Card
} from 'antd';
import { Form } from '@ant-design/compatible'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="gutter-example form-demo">
            <Row gutter={10}>
                <Col className="gutter-row" md={24}>
                    <div className="gutter-box">
                        <Card title="基础表单" bordered={false}>
                          <FormItem
                            {...formItemLayout}
                            label="Plain Text"
                          >
                            <span className="ant-form-text">China</span>
                          </FormItem>
                          <FormItem
                            {...formItemLayout}
                            label="Select"
                            hasFeedback
                            name="select"
                            rules={[{ required: true, message: 'Please select your country!' }]}
                          >
                              <Select placeholder="Please select a country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                              </Select>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Select[multiple]"
                            name="select-multiple"
                            rules= {[
                            { required: true, message: 'Please select your favourite colors!', type: 'array' },
                            ]}
                          >
                              <Select mode="multiple" placeholder="Please select favourite colors">
                                  <Option value="red">Red</Option>
                                  <Option value="green">Green</Option>
                                  <Option value="blue">Blue</Option>
                              </Select>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="InputNumber"
                            name="input-number"
                          >
                           <InputNumber min={1} max={10} initialValue={3}/>
                            <span className="ant-form-text"> machines</span>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Switch"
                            name="switch"
                          >
                              <Switch valuePropName={'checked'}/>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Slider"
                            name="slider"
                          >
                              <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Radio.Group"
                            name="radio-group"
                          >
                              <RadioGroup>
                                  <Radio value="a">item 1</Radio>
                                  <Radio value="b">item 2</Radio>
                                  <Radio value="c">item 3</Radio>
                              </RadioGroup>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Radio.Button"
                            name="radio-button"
                          >
                              <RadioGroup>
                                  <RadioButton value="a">item 1</RadioButton>
                                  <RadioButton value="b">item 2</RadioButton>
                                  <RadioButton value="c">item 3</RadioButton>
                              </RadioGroup>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Upload"
                            extra="longgggggggggggggggggggggggggggggggggg"
                            name="upload"
                            getValueFromEvent={this.normFile}
                          >
                              <Upload name="logo" action="/upload.do" listType="picture" valuePropName={'fileList'}>
                                  <Button>
                                      {/*<Icon type="upload" /> Click to upload*/}
                                  </Button>
                              </Upload>
                          </FormItem>

                          <FormItem
                            {...formItemLayout}
                            label="Dragger"
                            name="dragger"
                            getValueFromEvent={this.normFile}
                          >
                            <div className="dropbox">
                                <Upload.Dragger name="files" action="/upload.do" valuePropName={'fileList'}>
                                    <p className="ant-upload-drag-icon">
                                        {/*<Icon type="inbox" />*/}
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                </Upload.Dragger>
                            </div>
                          </FormItem>

                          <FormItem
                            wrapperCol={{ span: 12, offset: 6 }}
                          >
                            <Button type="primary" htmlType="submit">Submit</Button>
                          </FormItem>
                        </Card>
                    </div>
                </Col>
            </Row>              
        </div>
      </Form>
    );
  }
}

export default Demo
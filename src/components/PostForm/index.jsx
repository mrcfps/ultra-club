import Taro, { Component } from '@tarojs/taro'
import { View, Form, Input, Textarea, Button } from '@tarojs/components'

import './index.css'

export default class PostForm extends Component {
  static options = {
    addGlobalClass: true,
  }

  render() {
    return (
      <View className="post-form">
        <View>添加新的帖子</View>
        <Form onSubmit={this.props.handleSubmit}>
          <View>
            <View className="form-hint">标题</View>
            <Input
              className="input-title"
              type="text"
              placeholder="点击输入标题"
              value={this.props.formTitle}
              onInput={this.props.handleTitleInput}
            />
            <View className="form-hint">正文</View>
            <Textarea
              placeholder="点击输入正文"
              className="input-content"
              value={this.props.formContent}
              onInput={this.props.handleContentInput}
            />
            <Button className="form-button" formType="submit" type="primary">
              提交
            </Button>
          </View>
        </Form>
      </View>
    )
  }
}

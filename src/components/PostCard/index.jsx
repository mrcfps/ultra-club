import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.css'

export default class PostCard extends Component {
  handleClick = () => {
    const { isList } = this.props

    // 如果是列表，那么就响应点击事件，跳转到帖子详情
    if (isList) {
      const { title, content } = this.props
      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }
  }
  render() {
    return (
      <View className="postcard" onClick={this.handleClick}>
        <View className="post-title">{this.props.title}</View>
        <View className="post-content">{this.props.content}</View>
      </View>
    )
  }
}

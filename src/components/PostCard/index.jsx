import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.css'

export default class PostCard extends Component {
  render() {
    return (
      <View className="postcard">
        <View className="post-title">{this.props.title}</View>
        <View className="post-content">{this.props.content}</View>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    posts: [
      {
        title: '泰罗奥特曼',
        content: '泰罗是奥特之父和奥特之母唯一的亲生儿子。',
      },
    ],
    formTitle: '',
    formContent: '',
  }

  render() {
    return (
      <View className="index">
        {this.state.posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
        <PostForm
          formTitle={this.state.formTitle}
          formContent={this.state.formContent}
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
        />
      </View>
    )
  }
}

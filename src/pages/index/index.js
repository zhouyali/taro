import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from "taro-ui";
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  skipToHome(n) {
    // if(n=='counter') {
    //   Taro.navigateTo({url:'/pages/counter/counter'})
    // }else if(n=='login'){
      Taro.navigateTo({url:'/pages/login/login'})

    // }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View>
          <AtButton size='small' type='primary' onClick={this.skipToHome('login')}>skip to Home Page</AtButton>
        </View>
        {/* <View>
          <AtButton size='small' type='primary' onClick={this.skipToHome('counter')}>skip to Home Page</AtButton>
        </View> */}
      </View>
    )
  }
}


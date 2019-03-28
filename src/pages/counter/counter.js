import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './counter.scss';

export default class Home extends Component {
    config = {
        //如果与app.js的设置重复，则会将app的全局覆盖；
        navigationBarTitleText:'counter',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    }
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidShow() {

    }

    componentDidHide() {

    }

    render () {
        return (
          <View className='counter'>
            <Text> Hello counter Page!</Text>
          </View>
        )
      }
}
import Taro, { Component } from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import '@tarojs/async-await';
import { AtInput, AtButton} from 'taro-ui';
import mock from '../../../mock/index.js';
import img from './account.png';
import './login.scss';


export default class Home extends Component {
    config = {
        //如果与app.js的设置重复，则会将app的全局覆盖；
        navigationBarTitleText:'我的',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    }
    constructor() {
        super(...arguments)
        this.state = {
            username:'',
            password:'',
            isActive: false,
        }
    }

    handleChangeUsername=(e,type)=> {   
        if(type == 'user') {
          this.setState({username:e})
        }else if(type=='psd'){
          this.setState({password: e})
        }
      setTimeout(() => {
        const { password,username } = this.state;
        if(password && username) {
          this.setState({isActive:true});
        }else {
          this.setState({isActive:false});
        } 
      }, 0);
    }

    onSubmit=() =>{
      const { username,password,isActive} = this.state;
      // if(!isActive) {
      //   return false;
      // }else {
      //   console.log(username,password)
      // }


      Taro.request({
        url: '../data.json',
        header: {
          'content-type': 'application/json'
        },
        method:'GET',
        dataType:'json',
      }).then(res => {
        console.log(1111)
        console.log(res)
      }).catch((err)=> {
        console.log(err)
      })

      // var ajax = new XMLHttpRequest();
      // ajax.open('GET','./data.json');
      // ajax.send(null);
      // ajax.onreadystatechange = function() {
      //   if(ajax.readyState ==4 && ajax.status ==200) {
      //     console.log(ajax.responseText);
      //   }
      // }
     
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
          <View className='login'>
            <Text> 你好！</Text>
            <View>
              <Text className='slogan'>欢迎来到XXXX登录</Text>
            </View>
            {/* <Image style='width:30px;height:30px;float:left;' src={img} /> */}
            <AtInput
              style='float:left'
              className='username'
              name='username'
              title='用户名：'
              placeholder='请输入用户名'
              type='text'
              value={this.state.username}
              onChange={(event)=>this.handleChangeUsername(event,'user')}
            />
            <AtInput
              className='password'
              name='passowrd'
              title='密码：'
              type='text'
              placeholder='请输入密码'
              value={this.state.password}
              onChange={(event)=>this.handleChangeUsername(event,'psd')}
            /> 
            <AtButton type='primary' onClick={this.onSubmit} className={`myBtn ${this.state.isActive?"active":null}`}>登录</AtButton>
          </View>
        )
      }
}
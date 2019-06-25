import {InputItem,List,WingBlank,WhiteSpace,Button} from "antd-mobile";
import axios from "~/utils/axios";
import "./index.scss";
var timer = null;
export class Login extends Component{



    state = {
        txt:"获取手机验证码",
        count:60,
        disabled:true,
        telFlag:true
    }

    calcTime=()=>{
        if(!timer){
            timer = setInterval(()=>{
                if(this.state.count>0){
                    this.state.count--;
                    this.setState({
                        txt:'倒计时 ' + this.state.count + ' s',
                        disabled:true
                    })
                }else{
                    clearInterval(timer);
                    timer = null;
                    this.setState({
                        txt:"获取验证码",
                        count:60,
                        disabled:false
                    })
                }
            },1000)
        }
    }   

    getCode=()=>{
        if(!this.state.telFlag){
        axios.post("/react/sendCode",{
            mobile:this.refs.mobile.state.value
        }).then(res=>{
            // console.log(res);
            this.calcTime();
        })
    }
    }

    checkTel=(val)=>{
        
        var telReg = /^1(3|5|7|8|9)\d{9}$/
        
        if(telReg.test(val)){
            this.setState({
                telFlag:false,
                disabled:false
            })
        }else{
            this.setState({
                telFlag:true,
                disabled:true
            })
        }
    }

    startLogin=()=>{
        axios.post("/react/testCode",{
            mobile:this.refs.mobile.state.value,
            code:this.refs.code.state.value
        }).then(res=>{
            // console.log(res);
            if(res.data.type=='1'){
                // var data = $.md5(this.refs.mobile.state.value+new Date());
                // console.log(data);
                localStorage.setItem("mobile",this.refs.mobile.state.value)
                this.props.history.push("/home");
                // 加密 
                axios.post("/react/login",{
                    params:{
                        tel:localStorage.mobile
                    }
                }).then(res=>{
                    // console.log(res);
                })
            }else{
                
            }
        })
    }
    componentWillUnmount(){
        clearInterval(timer);
    }
    render(){
        const {txt,disabled,telFlag} = this.state;
        return (
            <div className="login">
               <div className="title">
                <a  className="goback"></a>
                <span>短信验证登录</span>
               </div>
               <WingBlank>
                <List>  
                        <WhiteSpace/>
                        <InputItem
                            onChange={this.checkTel}
                            type="tel"
                            placeholder="请输入手机号"
                            ref="mobile"
                        >手机号</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type="text"
                            placeholder="请输入验证码"
                            ref="code"
                        >验证码</InputItem>
                        <Button disabled={disabled} onClick={this.getCode} inline type="warning">{txt}</Button>
                        <Button onClick={this.startLogin}  disabled={telFlag}  type="primary">登录</Button>
                    </List>
               </WingBlank>
               
            </div>
        )
    }
}


import "./index.scss";
import axios from "~/utils/axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getGzdb,getFtsl} from "~/actions";
@connect(
    state=>({
      
      userInfo:state.userInfo,
      gzdb:state.gzdb,
      fbtz:state.fbtz
    })
  )
export class IsloginMine extends Component{
    state = {
        nickname:"小呆",
        userpicpath:"",
    }

componentWillMount(){
    //个人信息
    axios.get("/react/showPerson",{params:{
        tel:localStorage.mobile
    }}).then(res=>{
        this.state.nickname = res.data.result.nickname;
        this.state.userpicpath = res.data.result.userpicpath;
        this.setState({
            nickname:this.state.nickname,
            userpicpath:this.state.userpicpath
        })
    })

    //关注的吧
    this.props.dispatch(getGzdb("/react/myguanzhu"))
    //发布的帖子数量
    var user = localStorage.mobile;
    this.props.dispatch(getFtsl({url:"/react/fabutiezi",params:{user}}))
}
render(){
    // console.log(this.props);
    const {
        who
      } = this.props;
    return(
        <div className="my2">
             <div data-v-b373f9d2="" className="user-info" onClick={()=>{window.location.href="http://101.132.73.191/xjp_react/#/mypage"}}>
          <span data-v-b373f9d2="" className="user-img"> 
          <img src={this.state.userpicpath} alt=""/>
             </span>
          <a data-v-b373f9d2="" className="user-login">
           <i className="iconfont icon-iconfontjiantou2
"></i>
          </a>{" "}
          <div data-v-b373f9d2="" className="user-desc">
            <p data-v-b373f9d2="" className="user-name">
            {who}
            </p>{" "}
            <p data-v-b373f9d2="" className="user-means">
            {this.state.nickname}
            </p>
          </div>
        </div>
        <div className="home_tab" onClick={()=>{window.location.href="http://101.132.73.191/xjp_react/#/mypage"}}>
            <div className="l_item">
                <a>
                <span>0</span>
                <span>关注</span>
                </a>
            </div>
            <div className="l_item">
                <a>
                <span>0</span>
                <span>粉丝</span>
                </a>
            </div>
            <div className="l_item">
                <a>
                <span>{this.props.gzdb.length}</span>
                <span>关注的吧</span>
                </a>
            </div>
            <div className="l_item">
                <a>
                <span>{this.props.fbtz.length}</span>
                <span>帖子</span>
                </a>
            </div>
        </div>
        </div>
    )
}
    
}
IsloginMine.contextTypes = {
    props:PropTypes.object
  }
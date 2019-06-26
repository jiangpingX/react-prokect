

import "./index.scss";
import axios from "~/utils/axios";
export class IsloginMine extends Component{
    state = {
        nickname:"小呆",
        picpath:"",
    }

componentWillMount(){
    axios.get("/react/showPerson",{params:{
        tel:localStorage.mobile
    }}).then(res=>{
        this.state.nickname = res.data.result.nickname;
        this.state.picpath = res.data.result.picpath;
        this.setState({
            nickname:this.state.nickname,
            picpath:this.state.picpath
        })
    })
}
render(){
    // console.log(this.props);
    const {
        who
      } = this.props;
    return(
        <div className="my2">
             <div data-v-b373f9d2="" className="user-info">
          <span data-v-b373f9d2="" className="user-img"> 
          <img src={this.state.picpath} alt=""/>
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
        <div className="home_tab">
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
                <span>0</span>
                <span>关注的吧</span>
                </a>
            </div>
            <div className="l_item">
                <a>
                <span>0</span>
                <span>关注</span>
                </a>
            </div>
        </div>
        </div>
    )
}
    
}
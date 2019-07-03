import "./index.scss";
import { Tie_xiang } from "~/components/tie_xiang";
import axios from "~/utils/axios";
import {checkLogin} from "~/utils";
import { getFormtime } from "~/utils";
import { getUserInfo } from "~/actions";
import { connect } from "react-redux";
@connect(state => ({
  userInfo: state.userInfo
}))
export class Tiezidetail extends Component {
  state = {
    comments: [],
    content: {} //当前帖子的信息
  };
  componentWillMount() {
    //获取当前帖子的信息
    // console.log(this.props)
    var _id = this.props.location.query._id;
    axios
      .get("/react/detail", {
        params: {
          _id
        }
      })
      .then(res => {
        // console.log(res);
        this.state.content = res.data.result;
        this.setState({
          content: this.state.content
        });
      });
    //用户信息
    // this.props.dispatch(
    //   getUserInfo({
    //     url: "/react/showPerson",
    //     params: { tel: localStorage.mobile }
    //   })
    // );
    //获取当前帖子的评论信息
    axios.get("/react/getcomments", { params: { _id } }).then(res => {
      // console.log(res);
      this.state.comments = res.data.result;
      this.setState({
        comments: this.state.comments
      });

    });
  }
  componentDidMount(){

  }
  goback = () => {
    var baming = this.props.location.query.baming;
    this.props.history.push({ pathname: "/balist", query: { name: baming } });
  };
  comment = tieziId => {
  
    checkLogin(()=>{
       this.props.dispatch(
      getUserInfo({
        url: "/react/showPerson",
        params: { tel: localStorage.mobile }
      })
    );
    var userpicpath = this.props.userInfo.userpicpath;
    var nickname = this.props.userInfo.nickname;
    var content = this.refs.con.value;
    var who = localStorage.mobile;
    var time = getFormtime();
    axios
      .get("/react/submitComment", {
        params: { content, tieziId, who, time, userpicpath, nickname }
      })
      .then(res => {
        // console.log(res);
        this.state.comments.push({userpicpath,nickname,content,time});
        this.setState({
          comments:this.state.comments
        })
        this.refs.con.value = "";
      });
    });
   
    
  };
  render() {
    // console.log(this.state.content);
    // this.state.content.userpath = this.props.userInfo.picpath;
    // this.state.content.nickname = this.props.userInfo.nickname;
    return (
      <div className="detail">
        <div className="head">
          <span onClick={this.goback} className="left">
            <i className="iconfont icon-zuojiantou" />
          </span>
          <span className="right">
            <i className="iconfont icon-gengduo" />
          </span>
        </div>
        <Tie_xiang content={this.state.content} />
        <div className="huifu">
          <p>全部回复</p>
          <ul className="ul1">
            {this.state.comments &&
              this.state.comments.map((item, i) => {
                return (
                  <li key={i}>
                    <div className="all">
                      <a className="item">
                        <div className="con">
                          <div className="info">
                            <div className="info_1">
                              <span className="avata">
                                <img src={item.userpicpath} alt="" />
                              </span>
                              <div className="avata_ri2">
                                <h4>{item.nickname}</h4>
                                <div>
                                  <span>{item.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="maincontext">
                            <p className="title">{item.content}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="pinlun">
          <textarea ref="con" placeholder="留言评论。。。。。" />
          <button
            onClick={() => {
              this.comment(this.state.content._id);
            }}
          >
            发表
          </button>
        </div>
      </div>
    );
  }
}

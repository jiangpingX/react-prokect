import "./index.scss";
import axios from "~/utils/axios";
export class Invition extends Component {
  state = {
    num:0
  }
  componentWillMount(){
      let _id = this.props.item._id;
      axios.get("/react/getcomments", { params: { _id } }).then(res => {
        // console.log(res);
        this.state.num = res.data.result.length;
        this.setState({
          num:this.state.num
        })
      });
  }
  render() {
    // console.log(this.props.item);
    const{
      baming,
      title,
      picpath,
      time,
      nickname,
      userpicpath
    }=this.props.item;
    // const{
    //   nickname
    // }=this.props.userInfo
    // const touxiang = this.props.userInfo.picpath;
    
    return (
      <div className="all2" >
        <a className="item">
          <div className="con">
            <div className="info">
              <div className="info_1">
                <span className="avata">
                  <img
                    src={userpicpath}
                    alt=""
                  />
                </span>
                <div className="avata_ri">
                  <h4>{nickname}</h4>
                  <div>
                    <span>{baming}</span>
                    <span className="span2" />
                    <span>{time}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="maincontext">
              <p className="title">{title}</p>
              <div className="showimg">
                <div>
                  {picpath&&
                  <span>
                    <img
                      src={picpath}
                      alt=""
                    />
                  </span>
                  }
                </div>
              </div>
              <div className="pinglun">
                <div>
                  <span>
                    <i
                      className="iconfont icon-yijianfankui
"
                    />
                    <span>{this.state.num}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
       
      </div>
    );
  }
}

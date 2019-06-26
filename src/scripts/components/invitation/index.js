import "./index.scss";
export class Invition extends Component {
  render() {
    // console.log(this.props);
    const{
      baming,
      title,
      picpath,
      time
    }=this.props.item
    const{
      nickname
    }=this.props.userInfo
    const touxiang = this.props.userInfo.picpath;
    
    return (
      <div className="all">
        <a className="item">
          <div className="con">
            <div className="info">
              <div className="info_1">
                <span className="avata">
                  <img
                    src={touxiang}
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
                    <span>1111</span>
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

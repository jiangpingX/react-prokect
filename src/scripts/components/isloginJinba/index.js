import "./index.scss";

export class Islogin extends Component {
  state = {
    icon:true,
    guanzhu:true
  }
  changeIcon=()=>{
    this.setState({
      icon:!this.state.icon
    })
  }
  changeGuanz =()=>{
    this.setState({
      guanzhu:false
    })
  }
  render() {
    const {
      icon,
      guanzhu
    } = this.state;
    return (
     <div className="log_jinba">
      <a ><i className="iconfont icon-weibiaoti-"></i> 搜索一下</a>
      <div className="guanzhu">
        <div className="title">
            我关注的吧
            <a onClick={this.changeIcon}>
                {icon?"编辑":"完成"}
            </a>
        </div>
        <div className="lists">
            <div className="ite" >
                <span>武汉学院</span>
                {
                  icon? <i className="iconfont icon-zuanshi_o"/>:<i style={{color:"red"}} onClick={this.del} className="iconfont icon-shanchu"/>
                }
               
                
            </div>
        </div>
      </div>
      <div className="like">
          <div className="tit">
              我可能感兴趣的吧
              <a>换一换</a>
          </div>
          <ul>
            <li>
              <a>
                <div className="pic">
                  <img src="https://imgsa.baidu.com/forum/pic/item/34fae6cd7b899e51eb8ff0e440a7d933c8950d39.jpg" alt=""/>
                </div>
                <div className="content">
                  <h3>动感新时代</h3>
                  <div className="post-num">关注 <span>10w</span> 帖子 <span>24w</span></div>
                </div>
                {
                  guanzhu?<div className="gz" onClick={this.changeGuanz}>关注</div>:<div className="gz2">已关注</div>
                }
                
                
              </a>
            </li>
          </ul>
      </div>
      <div></div>
     </div>
    )
  }
}

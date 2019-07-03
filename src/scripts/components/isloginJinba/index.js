import "./index.scss";
import PropTypes from "prop-types";
import axios from "~/utils/axios";
export class Islogin extends Component {
  state = {
    icon: true,
    
    xingquba: [],
    guanzhuba:[]
  };
  changeIcon = () => {
    this.setState({
      icon: !this.state.icon
    });
  };
  huanyihuan = ()=>{
    axios.get("/react/xingquba").then(res => {
      this.state.xingquba = res.data.result;
      this.setState({
        xingquba:this.state.xingquba
      })
    });
  }
  quguan=(i,_id)=>{
    this.state.guanzhuba.splice(i,1);
    this.setState({
      guanzhuba:this.state.guanzhuba
    })
    axios.get("/react/quguan",{params:{_id}})
    .then(res=>{
      
    })
  }
  componentWillMount() {
    //兴趣吧
    axios.get("/react/xingquba").then(res => {
      this.state.xingquba = res.data.result;
      this.setState({
        xingquba:this.state.xingquba
      })
    });
    // console.log(this.state.xingquba);
    
    axios.get("/react/myguanzhu").then(res => {
      // console.log(res);
      this.state.guanzhuba = res.data.result;
      this.setState({
        guanzhuba:this.state.guanzhuba
      })
    });
  }
  changeG = (i,_id)=>{
    // console.log(i);
    // console.log("11111111111111")
    this.state.xingquba.forEach((item,index)=>{
      if(i==index){
        item.check = true;
      }
    })
    this.setState({
      xingquba:this.state.xingquba
    })
    //后台更新关注
    axios.get("/react/guanzhu",{params:{_id}})
    .then(res=>{

    })
  }
  render() {
    const { icon,guanzhuba, xingquba } = this.state;
    // console.log(guanzhuba);
    return (
      <div className="log_jinba">
        <a
          onClick={() => {
            this.context.props.history.push("/search");
          }}
        >
          <i className="iconfont icon-weibiaoti-" /> 搜索一下
        </a>
        
          
          <div className="guanzhu">
          <div className="title">
            我关注的吧
            <a onClick={this.changeIcon}>{icon ? "编辑" : "完成"}</a>
          </div>
          <div className="lists">
            {
          guanzhuba.map((item,i)=>{
            return (
             <div className="ite" key={i}>
              <span>{item.name}</span>
              {icon ? (
                <i className="iconfont icon-zuanshi_o" />
              ) : (
                <i
                  style={{ color: "red" }}
                  onClick={this.del}
                  className="iconfont icon-shanchu"
                  onClick={()=>{this.quguan(i,item._id)}}
                />
              )}
            </div> )
          })
        }
          </div>
        </div>
        
        
        
        <div className="like">
          <div className="tit">
            我可能感兴趣的吧
            <a onClick={this.huanyihuan}>换一换</a>
          </div>
          <ul>
            {xingquba&&xingquba.map((item, i) => {
              return (
                <li key={i}>
                  <a>
                    <div className="pic">
                      <img src={item.picpath} alt="" />
                    </div>
                    <div className="content">
                      <h3>{item.name}</h3>
                      <div className="post-num">
                        关注 <span>{item.gznum}</span> 帖子{" "}
                        <span>{item.tiezi}</span>
                      </div>
                    </div>
                    {item.check?<div  className="gz2">已关注</div>:<div onClick={()=>this.changeG(i,item._id)} className="gz" >
                      关注
                    </div>}
                    
                    
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div />
      </div>
    );
  }
}
Islogin.contextTypes = {
  props: PropTypes.object
};

import "./index.scss";
import  {IsloginMine} from "~/components/IsloginMine";
import  {NologinMine} from "~/components/nologinMine";
import { List } from 'antd-mobile';
const Item = List.Item;
export class Mine extends Component {
  state={
    who:""
  }
  componentWillMount(){
    if(localStorage.mobile){
      this.setState({
        who:localStorage.mobile
      })
    }
  }
  logout = ()=>{
    localStorage.mobile = "";
    this.props.history.push("/home/recommond");
  }
  render() {
    const {
      who
    } = this.state;
    return (
      <div className="mine">
        {who?<IsloginMine who={who}/>:<NologinMine/>}
        <div className="user-select">
        <List className="my-list">
        <Item extra={'>'}>我的收藏</Item>
      </List>
      <List className="my-list">
        <Item extra={'>'}>会员中心</Item>
      </List>
      <List className="my-list">
        <Item extra={'>'}>意见反馈</Item>
      </List>
        </div>

        <div className="ffo" >
          <div className="logout" onClick={this.logout} style={{textAlign:"center",lineHeight:"30px",marginBottom:"20px"}}>退出登录</div>
        <img src="https://tb2.bdstatic.com/tb/mobile/tbwisecommon/img/components/tieba_h5/tb-footer/images/footer_icon.png" alt=""/>
        <p  className="footer-title">年轻人的潮流文化社区</p>
        <span className="btn-openapp">立即下载</span>
      </div>
      </div>
      
    )
  }
}

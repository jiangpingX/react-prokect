import "./index.scss";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {NavLink} from "react-router-dom"
import PropTypes from "prop-types";
export class MyHeader extends Component {
  search=()=>{
    this.context.props.history.push("/search")
  }
  state = {
    foots:[
        {txt:"推荐",path:"/home/recommond",name:"recommond"},
        {txt:"进吧",path:"/home/jinba",name:"jinba"},
        {txt:"我的",path:"/home/mine",name:"mine"},
    ] 
}
  render() {
    // console.log(this.props);
    return (
      <div className="myh">
        <div className="myheader">
          <div className="bar-left" onClick={this.search}>
            <a>
              <i  className="iconfont icon-sousuo1" />
            </a>
          </div>
          <div className="bar-middle">贴吧</div>
          <div className="bar-right">
            <a href="">
              <i className="iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing" />
            </a>
          </div>
        </div>
        <div className="my-nav">
        {
          this.state.foots.map((foot,i)=>{
            return(
              <div key={i}>
                <NavLink
                to={foot.path}
                activeClassName="nav-active"
                >
                  <span>{foot.txt}</span>
                </NavLink>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

MyHeader.contextTypes = {
  props:PropTypes.object
}
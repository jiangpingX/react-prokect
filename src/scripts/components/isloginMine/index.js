

import "./index.scss";

export class IsloginMine extends Component{

   
render(){
    const {
        who
      } = this.props;
    return(
        <div className="my2">
             <div data-v-b373f9d2="" className="user-info">
          <span data-v-b373f9d2="" className="user-img" />{" "}
          <a data-v-b373f9d2="" className="user-login">
           <i className="iconfont icon-iconfontjiantou2
"></i>
          </a>{" "}
          <div data-v-b373f9d2="" className="user-desc">
            <p data-v-b373f9d2="" className="user-name">
            {who}
            </p>{" "}
            <p data-v-b373f9d2="" className="user-means">
            小呆
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
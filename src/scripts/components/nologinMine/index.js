
import "./index.scss";
import PropTypes from "prop-types";
export class NologinMine extends Component{

    render(){
        return(
            <div>
                <div data-v-b373f9d2="" className="user-info">
          <span data-v-b373f9d2="" className="user-img" />{" "}
          <a data-v-b373f9d2="" className="user-login" onClick={()=>{this.context.props.history.push("/login")}}>
            立即登录
          </a>{" "}
          <div data-v-b373f9d2="" className="user-desc">
            <p data-v-b373f9d2="" className="user-name">
              未登录
            </p>{" "}
            <p data-v-b373f9d2="" className="user-means">
              登录后发贴评论畅所欲言
            </p>
          </div>
        </div>
       
            </div>
        )
    }
}
NologinMine.contextTypes = {
  props:PropTypes.object
}
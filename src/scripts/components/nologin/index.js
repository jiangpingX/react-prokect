import "./index.scss";
import PropTypes from "prop-types";
export class Nologin extends Component {
  render() {
    return (
      <div className="jinba">
        <div className="img">
          <img src={require("@/assets/images/q1.png")} alt="" />
        </div>
        <div className="text">
          <p>还没有登录哦</p>
          <div>登录后，可以看到关注的吧</div>
        </div>
        <div className="login" onClick={()=>{this.context.props.history.push("/login")}}>
          立即登录
        </div>
      </div>
    );
  }
}
Nologin.contextTypes = {
  props:PropTypes.object
}
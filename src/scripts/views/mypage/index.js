import { Invition } from "~/components/invitation";
import { connect } from "react-redux";
import { getFtsl, getUserInfo,getGzdb } from "~/actions";

import "./index.scss";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
const tabs = [
  { title: <Badge>帖子</Badge> },
  { title: <Badge>贴吧</Badge> },
  { title: <Badge>关注</Badge> }
];
@connect(state => ({
  userInfo: state.userInfo,
  gzdb: state.gzdb,
  fbtz: state.fbtz
}))
export class Mypage extends Component {
  componentWillMount() {
    var user = localStorage.mobile;
    this.props.dispatch(getFtsl({ url: "/react/fabutiezi", params: { user } }));
    //个人信息
    this.props.dispatch(
      getUserInfo({
        url: "/react/showPerson",
        params: { tel: localStorage.mobile }
      })
    );

    //关注的吧
    this.props.dispatch(getGzdb("/react/myguanzhu"));
  }
  render() {
    // console.log(this.props);
    return (
      <div className="mypage">
        <div className="head">
          <span
            style={{ width: "30px" }}
            onClick={() => {
              this.props.history.go(-1);
            }}
          >
            <i className="iconfont icon-zuojiantou1" />
          </span>
          <span>{this.props.userInfo.nickname}</span>
        </div>
        <div
          data-v-b373f9d2=""
          className="user-info"
          style={{
            background:
              'url("https://tb2.bdstatic.com/tb/mobile/suser/img/home_card_back_6cdfca5.jpg")'
          }}
        >
          <span data-v-b373f9d2="" className="user-img">
            <img
              style={{ width: "100%" }}
              src={this.props.userInfo.userpicpath}
              alt=""
            />
          </span>

          <div data-v-b373f9d2="" className="user-desc">
            <p data-v-b373f9d2="" className="user-name">
              {this.props.userInfo.nickname}
            </p>{" "}
            <p data-v-b373f9d2="" className="user-means">
              贴吧菜鸟
            </p>
          </div>
        </div>
        <div>
          <Tabs
            tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => {
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#fff"
              }}
            >
              {this.props.fbtz.map((item, i) => {
                return <Invition key={i} item={item} />;
              })}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#fff"
              }}
            >
              <div style={{ width: "100%" }}>
                {this.props.gzdb.map((item, i) => {
                  return (
                    <a
                      style={{
                        width: "100%",
                        display: "inline-block",
                        padding: "8px 10px",
                        boxSizing: "border-box",
                        verticalAlign: "middle"
                      }}
                    >
                      <div style={{ float: "left" }}>
                        <img
                          src={item.picpath}
                          alt=""
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "3px",
                            marginRight: "5px",
                            verticalAlign: "top"
                          }}
                        />
                      </div>
                      <div style={{ float: "left" }}>
                        <p style={{textAlign: "left", fontSize: "16px" }}>
                         {item.name}
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                            marginTop: "5px",
                            color: "#666",
                            fontSize: "14px"
                          }}
                        >
                          快来关注我吧
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                backgroundColor: "#fff"
              }}
            >
              <img
                style={{
                  width: "200px",
                  height: "130x",
                  display: "inline-block"
                }}
                src={require("@/assets/images/wu.png")}
                alt=""
              />
              <p style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                还没有关注任何吧友
              </p>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

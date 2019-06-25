import "./index.scss";
import axios from "~/utils/axios";
export class Upload extends Component {
    state={
        touxiang:""
    }
  shangchuan = e => {
    let $target = e.target || e.srcElement;
    let file = $target.files[0];
    let mobile = localStorage.mobile;
    // console.log(file);
    // console.log(this.$refs.one.files[0]);

    let data = new FormData(); // 构建表单数据对象
    data.append("avatar", file); // 需要上传到 服务器 的数据
    // data.append("like",'wh1901');

    axios({
      url: "/react/upload-avatar",
      method: "POST",
      contentType: false,
      processData: false,
      data: data,
      params: {
        mobile
      }
    }).then(res => {
      console.log(res);
      this.state.touxiang  = res.data.imgUrl.replace(/public/,'http://localhost:1999');
      this.setState({
          touxiang:this.state.touxiang
      })
      console.log(this.state.touxiang)
      // localStorage.userInfo = JSON.stringify({avatar:res.data.imgUrl});
    });
  };
  
  render() {
    return (
      <div className="upload">
        <div className="head">
          <span>x</span>
          <span>发布到我的主页</span>
          <span>发布</span>
        </div>
        <div className="title">
          <input type="text" placeholder="加个标题哟~" maxLength="10" />
        </div>
        <div className="main">
          <textarea placeholder="来吧，尽情发挥吧" id="" rows="4" />
        </div>
        <div className="upload-pic">
            {
            this.state.touxiang&&
            <div className="show-pic">
                <img src={this.state.touxiang} alt=""/>
            </div>
            }
          <div className="up">
            <input
              className="pic"
              value=""
              type="file"
              accept="image/*"
              onChange={this.shangchuan}
            />
            <span className="heng" />
            <span className="shu" />
          </div>
        </div>
      </div>
    );
  }
}

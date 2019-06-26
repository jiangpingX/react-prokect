import "./index.scss";
import axios from "~/utils/axios";
import { connect } from "react-redux";
import {updatepersondata,changePath} from "~/actions";
@connect(
  state=>({
    touxiang:state.touxiang
  })
)
export class Personaldata extends Component {
    state = {
      nickname:"",
      sex:"",
      sign:""
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
          let path = res.data.imgUrl.replace(/public/,'http://localhost:1999');
          this.props.dispatch(changePath(path));
          // localStorage.userInfo = JSON.stringify({avatar:res.data.imgUrl});
        });
      };
      nicheng = (e)=>{
        this.state.nickname = e.target.value;
        this.setState({
            nickname:this.state.nickname
        })
      }
      xingbie = (e)=>{
        this.state.sex = e.target.value;
        this.setState({
            sex:this.state.sex
        })
      }
      qianming = (e)=>{
        this.state.sign = e.target.value;
        this.setState({
            sign:this.state.sign
        })
      }
      achieve = ()=>{
        console.log(this.props);
        this.props.dispatch(updatepersondata({url:"/react/persondata",params:{
          tel:localStorage.mobile,
          nickname:this.state.nickname,
          sex:this.state.sex,
          sign:this.state.sign,
          picpath:this.props.touxiang
        }}))
       this.props.history.push("/home/recommond");
      }
  render() {
    //  console.log(this.props);
    return (
      <div className="persondata">
        <div className="head">
          <span>我的资料</span>
          <a onClick={this.achieve}>完成</a>
        </div>
        <div className="touxiang">
          <img
            src={this.props.touxiang}
            alt=""
          />
          <input
            className="pic"
            value=""
            type="file"
            accept="image/*"
            onChange={this.shangchuan}
            
          />
        </div>
        <div className="form">
          <p>
            <span>用户名</span> <span>{localStorage.mobile}</span>
          </p>
          <p>
            <span>昵称</span> <input onChange={this.nicheng} type="text" placeholder="昵称" />
          </p>
          <p>
            <span>性别</span> <input onChange={this.xingbie} type="text" placeholder="性别" />
          </p>
          <p>
            <span>个性签名</span>{" "}
            <input type="text" onChange={this.qianming} placeholder="签名是样子的说法" />
          </p>
        </div>
      </div>
    );
  }
}

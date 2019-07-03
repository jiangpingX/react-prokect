
import axios from "~/utils/axios";
import "./index.scss";
import {getUserInfo} from "~/actions";
import { connect } from "react-redux";
import {Invition} from "~/components/invitation";
import {checkLogin} from "~/utils";
@connect(
    state=>({
        userInfo:state.userInfo
      })
)
export class BaList extends Component{

    state = {
       tiezi:[]
    }
    gofatie= ()=>{
        var name = this.props.location.query.name;
        checkLogin(()=>{
            this.props.history.push({pathname:"/uploadtomine",query:{name}})
        }   
        )
        
    }
    godetail=(_id)=>{
        var baming = this.props.location.query.name;
        this.props.history.push({pathname:"/detail",query:{_id,baming}})
    }
    componentWillMount(){
        //根据吧名差帖子
        var baming = this.props.location.query.name;
        axios.get("/react/bafindtie",{params:{baming}}).then(res=>{
            this.state.tiezi = res.data.result;
            this.setState({
                tiezi:this.state.tiezi
            })
        })
        //用户信息
        this.props.dispatch(getUserInfo({url:"/react/showPerson",params:{tel:localStorage.mobile}}))
        
    }
    componentDidUpdate(){
        // console.log(this.refs.tip);
        // console.log(this.state)
         if(this.state.tiezi.length<=0&&this.state.tiezi)
        {
            this.refs.tip.style.display="block";
        }
        else{
            this.refs.tip.style.display="none";
        }
    }
    render(){
        // console.log(this.props)
        // console.log(this.state)
        var name = this.props.location.query.name;
        
        
       
        return(
            <div className="list">
                <div className="head">
                    <div className="h_left" onClick={()=>{this.props.history.push("/home/recommond")}}>
                        <span className="iconfont icon-zhuye"></span>
                    </div>
                    <div className="h_center">
                        <a >{name&&name}</a>
                    </div>
                    <div className="h_right" onClick={this.gofatie}>
                        <a className="iconfont icon-shuxie">

                        </a>
                    </div>
                </div>
                <div className="mi">
                    <img src={require("@/assets/images/timg.jpg")} alt=""/>
                    <span> {name&&name}</span>
                    <p>wwwwwwwwwww</p>
                </div>
                <div ref="tip" style={{lineHeight:"30px",color:"black",fontWeight:600}}>去发布{name&&name}第一个帖子吧</div>
                {
                    this.state.tiezi.map((item,i)=>{
                        return(
                        <div onClick={()=>{this.godetail(item._id)}}>
                            <Invition  key={i}  item={item} />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
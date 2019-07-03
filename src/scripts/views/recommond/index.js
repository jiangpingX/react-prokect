
import {Invition} from "~/components/invitation";
import {Upload} from "~/components/upload";
import {getUserInfo} from "~/actions";
import { connect } from "react-redux";
import axios from "~/utils/axios";
import "./index.scss"
@connect(
    state=>({
        userInfo:state.userInfo
      })
)
export class Recommond extends Component{
    state = {
        tiezi:[]
     }
     godetail=(_id,baming)=>{
        this.props.history.push({pathname:"/detail",query:{_id,baming}})
    }
    componentWillMount(){
        axios.get("/react/findtiezi").then(res=>{
            // console.log(res);
            this.state.tiezi = res.data.result;
            this.setState({
                tiezi:this.state.tiezi
            })
        })

        this.props.dispatch(getUserInfo({url:"/react/showPerson",params:{tel:localStorage.mobile}}))
    }

    render(){
        return(
            <div className="rec">
                {
                   this.state.tiezi&&this.state.tiezi.map((item,i)=>{
                        return(
                            <div onClick={()=>{this.godetail(item._id,item.baming)}} key={i} className="item">
               <Invition   item={item} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

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
    componentWillMount(){
        axios.get("/react/findtiezi").then(res=>{
            console.log(res);
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
                    this.state.tiezi.map((item,i)=>{
                        return(
                            <div key={i} className="item">
               <Invition userInfo={this.props.userInfo}  item={item} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
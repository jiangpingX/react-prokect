
import {Upload} from "~/components/upload";
import {getUserInfo} from "~/actions";
import { connect } from "react-redux";
@connect(
    state=>({
        userInfo:state.userInfo
      })
)
export class UploadtoMine extends Component{
    componentWillMount(){
        this.props.dispatch(getUserInfo({url:"/react/showPerson",params:{tel:localStorage.mobile}}))//获取用户信息
    }
    render(){
        
        const name = this.props.location.query.name;
        // console.log(this.props);
        return(
            <Upload uri={'http://localhost:1999/react/upload'} userInfo={this.props.userInfo} multiple={true} name={name}></Upload>
        )
    }
}
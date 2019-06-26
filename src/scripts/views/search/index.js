



import {getBa} from "~/actions";
import { connect } from "react-redux";
import "./index.scss";
@connect(
    state=>({
        ba:state.ba
      })
)
export class Search extends Component{
    golist=(name)=>{
        this.props.history.push({pathname:"/balist",query:{name}})
    }
    componentWillMount(){
        // console.log(this.props);
        this.props.dispatch(getBa("/react/getba"))
    }

    render(){

        return(
            <div className="search">
                <div className="head">
                    <span onClick={()=>{this.props.history.go(-1)}}>
                    <i className="iconfont icon-zuojiantou1"></i>
                    搜索
                    </span>
                </div>
                <div className="tao">
                <div className="sec">
                    <div className="cont">
                        <input type="text"/>
                    </div>
                    <span className="jinba">进吧</span>
                </div>
                <ul className="ul">
                <li><a href="">wwwww</a></li>
                </ul>
                </div>
                <div className="tuijian">
                    热门推荐
                </div>
                <ul className="hot">
                    {
                        this.props.ba.map((item,index)=>{
                            return(
                                <li key={index} onClick={()=>{this.golist(item.name)}}> <a >{item.name}</a></li>
                            )
                        })
                    

                    }
                    
                </ul>
            </div>
        )
    }
}
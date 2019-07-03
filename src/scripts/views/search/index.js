



import {getBa} from "~/actions";
import { connect } from "react-redux";
import {getSerachCon} from "~/actions";
import "./index.scss";
@connect(
    state=>({
        ba:state.ba,
        searchCon:state.searchCon
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
    myfocus = ()=>{
        this.refs.ul.style.display = "block";
    }
    myblur = ()=>{
        this.refs.ul.style.display = "none";
    }
    search = ()=>{
        var keyword = this.refs.input.value;
        this.props.dispatch(getSerachCon({url:"/react/getSerachCon",params:{keyword}}))
        this.refs.ul.style.display = "block";
       
    }
    goba = (name)=>{
        this.props.history.push({pathname:"/balist",query:{name}})
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
                        <input type="text" ref="input" onFocus={this.myfocus} onBlur={this.myblur} />
                    </div>
                    <span className="jinba" onClick={this.search}>搜索</span>
                </div>
                
                <ul className="ul" ref="ul">
                   
                    {
                        this.props.searchCon&&this.props.searchCon.map((item,i)=>{
                            return(
                                <li onClick={()=>{this.goba(item.name)}} key={i}>{item.name}</li>
                            )
                        })
                       
                    }
                </ul>
                
                </div>
                <div className="tuijian">
                    热门推荐
                </div>
                <ul className="hot">
                    {
                        this.props.ba&&this.props.ba.map((item,index)=>{
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


import "./index.scss";
var timer = null;
export class Guide extends Component{
    state ={
        time:5,
    }
    componentWillMount(){
        timer = setInterval(()=>{
            if(this.state.time<=0){
                clearInterval(timer);
                this.props.history.push("/home");
            }
            else{
                this.state.time--;
                this.setState({
                    time:this.state.time
                })
            }
        },1000)
    }
    skip = ()=>{
        clearInterval(timer);
        this.props.history.push("/home");
    }
    render(){
        let {
            time
        } = this.state;
        return(
            <div className="guide">
                <div className="img">
                    <img src={require("@/assets/images/guide.jpg")} alt="导航页"/>
                </div>
                <div className="time" onClick={this.skip}>
                    跳过
                    <span> {time}</span>
                </div>
            </div>
        )
    }
}
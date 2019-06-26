import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {Guide} from "~/views/guide";
import {Home} from "~/views/home";
import {Login} from "~/views/login";
import {BaList} from "~/views/balist";
import {UploadtoMine} from "~/views/UploadtoMine";
import {Personaldata} from "~/views/Personaldata"
import {Search} from "~/views/search";
export class IndexView extends Component{
    render(){
        return(
            <Router>
                <div id="main">
                    <Route path="" exact component={Layout} />
                </div>
            </Router>
        )
    }
}

//switch标签用来避免重复匹配，只匹配有效的第一个路由 exact代表精准匹配
export class Layout extends Component{
    getChildContext(){
        return{
            props:this.props
        }
    }

    render(){
        return(
            <Switch>
                <Route path="/"  exact render={()=>(<Redirect to="/guide"  />)} />
                <Route path="/guide" component={Guide} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login}/> 
                <Route path="/balist" component={BaList}/>
                <Route path="/uploadtomine" component={UploadtoMine} />
                <Route path="/persondata" component={Personaldata}/>
                <Route path="/search" component={Search}></Route>
            </Switch>
        )
    }
}
Layout.childContextTypes = {
    props:PropTypes.object
}
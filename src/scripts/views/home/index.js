
import PropTypes from "prop-types";
import {Route,Switch,Redirect} from "react-router-dom"
import {Recommond} from "../recommond";
import {Mine} from "../mine";
import {Jinba} from "../jinba"
import {MyHeader} from "~/components/myHeader";
export class Home extends Component{
   
    render(){
        return(
            <div>
                <MyHeader/>

                <Switch>
                    <Route path="/home/recommond" component={Recommond} />
                    <Route path="/home/jinba" component={Jinba} />
                    <Route path="/home/mine" component={Mine} />
                </Switch>
            </div>
        )
    }
}

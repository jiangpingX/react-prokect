
import {Upload} from "~/components/upload";
export class UploadtoMine extends Component{

    render(){
        const name = this.props.location.query.name;
        console.log(this.props);
        return(
            <Upload uri={'http://localhost:1999/react/upload'} multiple={true} name={name}></Upload>
        )
    }
}

import {Upload} from "~/components/upload";
export class UploadtoMine extends Component{

    render(){

        return(
            <Upload uri={'http://localhost:1999/react/upload'} multiple={true}></Upload>
        )
    }
}
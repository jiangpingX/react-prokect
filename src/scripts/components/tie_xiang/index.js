import "./index.scss";
export class Tie_xiang extends Component {
  render() {
    // console.log(this.props);
    // console.log(this.props);
    const{
        userpath,
        picpath,
        userpicpath,
        nickname,
        time,
        baming,
        main
    }=this.props.content;
    return (
      <div className="all">
        <a className="item">
          <div className="con">
            <div className="info">
              <div className="info_1">
                <span className="avata">
                  <img
                    src={userpicpath}
                    alt=""
                  />
                </span>
                <div className="avata_ri">
                  <h4>{nickname}</h4>
                  <div>
                    <span>{time}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="maincontext">
              <p className="title">{main}</p>
              {
                  picpath&&
              <div className="showimg">
                <div>
                 
                  <span>
                    <img
                      src={picpath}
                      alt=""
                    />
                  </span>
                  
                </div>
              </div>
              }
            </div>
            <div className="baming">
                <span>{baming}</span>
            </div>
          </div>
        </a>
       
      </div>
    );
  }
}

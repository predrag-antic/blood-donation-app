import React from "react";
import { News } from '../models/news';
import { connect } from "react-redux";
import { RootState } from "../store/reducers/root-reducer";
import { Link } from "react-router-dom";
import Novelty from "./novelty";
import { Button } from "reactstrap";

interface Props{
    news: News[]
}

interface State{

}

class Blog extends React.Component<Props,State> {
    render(){
        const {news} = this.props;
        return(
            <div className="container pt-5 mt-5">
               {
                   this.props.news
                    // .sort((a,b) => (a.id < b.id)?1:-1)
                    .map((novelty : News) => (
                        <div key={novelty.id} className="mb-5">
                            <div className="card" style={{display:"flex", flexDirection:"row"}}>
                                <img src={novelty.picture} style={{width:"400px",height:'cover'}}></img>
                                <div style={{alignContent:"center",textAlign:'center', marginLeft:"80px",padding:"70px 0"}}>
                                    <h2 style={{textAlign:"center"}} className="card-title">{novelty.heading}</h2>
                                    <h5 style={{textAlign:"left",color:"#17A2B8"}}>{novelty.type}</h5>
                                    <Link to={`/novelty/${novelty.id}`} className="mt-4">
                                         <Button className="btn-info">Read more</Button> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state: RootState){
    return{
        news: state.news
    }
}

export default connect(mapStateToProps,null)(Blog);
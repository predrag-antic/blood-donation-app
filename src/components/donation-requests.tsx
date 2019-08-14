import React from "react";
import { Donation } from "../models/donation";
import { RootState } from "../store/reducers/root-reducer";
import { connect } from "react-redux";
import ListOfRequests  from "../components/list-of-requests";

interface Props{
    requests: Donation[]
}

interface State{

}


class Requests extends React.Component<Props,State> {
    render(){

        const {requests} = this.props;


        if(!requests){
            return (
                <div className='text-center mt-3 mb-5'>
                    <h3>There is no donation request currently.</h3>
                </div>
            )
        }
        return(
            <div className="container">
                <h1 className='text-center mt-3 mb-5'>Donation requests</h1>
                
                <ListOfRequests requests={requests} />
            </div>
        )
    }
}

function mapStateToProps(state: RootState){
    return{
        requests: state.requests
    }
}

export default connect(mapStateToProps,null)(Requests);
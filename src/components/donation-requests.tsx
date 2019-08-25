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
                <div className='text-center mt-4 mb-5'>
                    <h3>There is no donation request currently.</h3>
                </div>
            )
        }
        return(
            <div>
                <img style={{width:"100%", zIndex:-1, position:"fixed", backgroundAttachment: "fixed", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} src="https://media.istockphoto.com/photos/professional-doctor-preparing-patient-for-procedure-picture-id627290560?k=6&m=627290560&s=612x612&w=0&h=S4mnc8QZFW3SgBYDx1jdfN0mW4zUIZ6lJezvZPBWDzc=" alt=""></img>
                <div className="container pt-5 mt-5">
                    <h1 className='text-center mb-5'>Donation requests</h1>
                    
                    <ListOfRequests />
                </div>
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
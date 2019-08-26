import React, { Dispatch } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { Donation } from '../models/donation';
import { addDonationRequest } from '../store/actions/requests-actions';
import { RootState } from '../store/reducers/root-reducer';
import { History } from 'history';

interface Props {
    addDonationRequest: Function,
    request : Donation,
    lastId: number,
    history: History
}

interface State {
    location: string,
    bloodGroup: string[],
    urgency: string,
    numOfPeople: number,
    info: string,
    errors: boolean
}

class AddRequest extends React.Component<Props,State> {
    
    constructor(props:Props){
        
        super(props);

        this.state = {
            location: '',
            bloodGroup: [],
            urgency: 'Low',
            numOfPeople: 0,
            info: '',
            errors: false
        }
    }

    handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({location:event.target.value})
    }

    handleBloodGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({bloodGroup: Array.from(event.target.selectedOptions, (item) => item.value)})
    }

    handleUrgencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({urgency: event.target.value})
    }

    handleNumOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(event.target.value) > 0)
            this.setState({numOfPeople: Number(event.target.value)})
        else
            this.setState({errors:true})
    }

    handleInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({info:event.target.value})
    }

    isFormEmpty = () => {
        return !this.state.location.length || !this.state.bloodGroup.length || 
                !this.state.urgency.length || this.state.numOfPeople < 0 || !this.state.info.length;
    }


    handleSubmit = (event: { preventDefault: () => void; }) => {
        console.log("submit");
        event.preventDefault();
        if(!this.isFormEmpty()){
            var request : Donation = {
                id: this.props.lastId+1,
                location:this.state.location,
                bloodGroup: this.state.bloodGroup,
                urgency: this.state.urgency,
                numOfPeople: this.state.numOfPeople,
                info: this.state.info
            }
            this.props.addDonationRequest(request);
            console.log("success")
            this.setState({errors: false});
            this.props.history.goBack();
        }
        else {
            console.log("error")
            this.setState({errors: true});
        }
    }

    goback = () => {
        this.props.history.goBack();
    }

    render(){

        const {location,bloodGroup,urgency,numOfPeople,info} = this.state;

        return(
            <div className="container pt-5 mt-5">
                <h1 className='text-center mb-5'>Request donation</h1>
                {this.state.errors===true && (
                    <h3 style={{color:"red", border:"1px solid red", padding:"5px 5px 10px 10px", textAlign:"center"}}>Error! Fill all fields!</h3>
                )}
                <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Location: </label>
                        <input type="text" name="location" value={location} onChange={this.handleLocationChange} className="form-control" placeholder="Please enter location"></input>
                    </div>
                    <div className="form-group">
                        <label >Required blood group(s): </label>
                        <select className="form-control" multiple={true} name="bloodGroup" value={bloodGroup} onChange={this.handleBloodGroupChange}>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="0+">0+</option>
                            <option value="0-">0-</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Urgency: </label>
                        <select className="form-control" name="urgency" value={urgency} onChange={this.handleUrgencyChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>People needed: </label>
                        <input type="number" name="numOfPeople" value={numOfPeople} onChange={this.handleNumOfPeopleChange} className="form-control" placeholder="Please enter number of people required"></input>
                    </div>
                    <div className="form-group">
                        <label>More information:</label>
                        <textarea className="form-control" name="info" value={info} onChange={this.handleInfoChange}></textarea>
                    </div>
                    <div className="text-center mb-5" >
                        <button type="submit" value="Submit" className="btn btn-success mt-3" style={{width:"170px",height:"60px"}}>Submit</button>
                        <button className="btn btn-danger mt-3 ml-4" style={{width:"170px",height:"60px"}} onClick={this.goback}>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch: Dispatch<Action>){
    return {
        addDonationRequest:(request:Donation) => dispatch(addDonationRequest(request))
    }
}

function mapStateToProps(state: RootState) {
    return {
        lastId: state.requests.length
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddRequest);
import React, { Dispatch } from 'react';
import { Donation } from '../models/donation';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { updateDonationRequest,deleteDonationRequest } from '../store/actions/requests-actions';
import { RootState } from '../store/reducers/root-reducer';
import { updateUser } from '../store/actions/users-actions';
import { User } from '../models/user';

interface Props{
    requests: Donation[]
    updateDonationRequest: Function
    deleteDonationRequest: Function
    updateUser: Function
    users: User[]
}

interface State{

}



class ListOfRequests extends React.Component<Props,State> {
    
    willDonate = (request:Donation,user: User) => {
        if(request.numOfPeople>0){
            request.numOfPeople -= 1;
            this.props.updateDonationRequest(request);
            user.donations+=1;
            this.props.updateUser(user);
        }
        else
        {
            this.props.deleteDonationRequest(request.id);
        }
            
    }

    render(){
        const {users} = this.props;
        return(
            <div className="container">
                {
                    this.props.requests
                    .sort((a,b) => (a.urgency > b.urgency)?1:(a.urgency===b.urgency)?((a.numOfPeople<b.numOfPeople)?1:-1):-1)
                    .map((request: Donation)=> (
                        <div key={request.id}>
                            {
                            <div className={request.urgency==='Low'?
                            'card border-secondary mb-3 px-3 py-2': request.urgency==='Medium'?
                            'card border-info mb-3 px-3 py-2': request.urgency==='High'?
                            'card border-warning mb-3 px-3 py-2':'card border-danger mb-3 px-3 py-2'}>
                                <div className="card-header"><div style={{fontWeight: 'bold', fontSize:'20px'}}>{request.location}<div className="btn btn-secondary float-right"><a target='_blank' rel='noopener noreferrer' style={{textDecoration:"none",color:'white'}} href={`https://www.google.com/maps/place/${request.location}`}>Show</a></div></div></div>
                                    <div className="card-body text-secondary">
                                        <p className='card-text'>Required blood group(s): <strong>{request.bloodGroup}</strong></p>
                                        <p className="card-text">{request.info}</p>
                                        <p className="card-text">People needed: <strong>{request.numOfPeople}</strong></p>
                                        <p className="card-text">Urgency: <strong>{request.urgency}</strong></p>
                                    </div>
                                    <hr></hr>
                                    <div style={{textAlign:'center'}}>
                                    <button className="btn btn-danger mb-2 ml-2" title="Only push button if you are sure thay you ll donate" style={{width:"150px", alignSelf:'center'}} onClick={()=>this.willDonate(request,users[0])}>I Will Donate</button>
                                    </div>
                            </div>
                            }
  
                        </div>
                    )
                    )
                }
            </div>
        )
    }

}

function mapDispatchToProps(dispatch:Dispatch<Action>){
    return{
        updateDonationRequest:(request:Donation)=>dispatch(updateDonationRequest(request)),
        deleteDonationRequest:(requestId: number)=>dispatch(deleteDonationRequest(requestId)),
        updateUser:(user: User)=> dispatch(updateUser(user))
    }
}

function mapStateToProps(state: RootState){
    return{
        requests: state.requests,
        users: state.users
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListOfRequests);
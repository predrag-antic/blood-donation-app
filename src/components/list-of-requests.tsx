import React from 'react';
import { Donation } from '../models/donation';

interface Props{
    requests: Donation[]
}

interface State{

}

class ListOfRequests extends React.Component<Props,State> {
    render(){
        
        return(
            <div className="container">
                {
                    this.props.requests
                    // .sort((a,b) => (a.urgency > b.urgency)?1:(a.urgency===b.urgency)?((a.numOfPeople>b.numOfPeople)?1:-1):-1)
                    .sort((a,b) => a.urgency==='Critical'? 1 : a.urgency==='High'? 1 : a.urgency==='Medium'? 1: a.urgency==="Low"?1 : -1)
                    .map((request: Donation)=> (
                        <div >
                            {
                            request.urgency==='Low' &&
                            <div key={request.id} className="card border-secondary mb-3 px-3 py-2">
                                <div className="card-header">{request.location}</div>
                                    <div className="card-body text-secondary">
                                        <p className='card-text'>Blood groups need: <strong>{request.bloodGroup}</strong></p>
                                        <p className="card-text">{request.info}</p>
                                        <p className="card-text">Number of people need: <strong>{request.numOfPeople}</strong></p>
                                        <p className="card-text">Urgency: <strong>{request.urgency}</strong></p>
                                    </div>
                            </div>
                            }
                            {
                            request.urgency==='Medium' &&
                            <div key={request.id} className="card border-info mb-3 px-3 py-2">
                                <div className="card-header">{request.location}</div>
                                    <div className="card-body text-secondary">
                                        <p className='card-text'>Blood groups need: <strong>{request.bloodGroup}</strong></p>
                                        <p className="card-text">{request.info}</p>
                                        <p className="card-text">Number of people need: <strong>{request.numOfPeople}</strong></p>
                                        <p className="card-text">Urgency: <strong>{request.urgency}</strong></p>
                                    </div>
                            </div>
                            }
                            {
                            request.urgency==='High' &&
                            <div key={request.id} className="card border-warning mb-3 px-3 py-2">
                                <div className="card-header">{request.location}</div>
                                    <div className="card-body text-secondary">
                                        <p className='card-text'>Blood groups need: <strong>{request.bloodGroup}</strong></p>
                                        <p className="card-text">{request.info}</p>
                                        <p className="card-text">Number of people need: <strong>{request.numOfPeople}</strong></p>
                                        <p className="card-text">Urgency: <strong>{request.urgency}</strong></p>
                                    </div>
                            </div>
                            }
                            {
                            request.urgency==='Critical' &&
                            <div key={request.id} className="card border-danger mb-3 px-3 py-2">
                                <div className="card-header">{request.location}</div>
                                    <div className="card-body text-secondary">
                                        <p className='card-text'>Blood groups need: <strong>{request.bloodGroup}</strong></p>
                                        <p className="card-text">{request.info}</p>
                                        <p className="card-text">Number of people need: <strong>{request.numOfPeople}</strong></p>
                                        <p className="card-text">Urgency: <strong>{request.urgency}</strong></p>
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

export default ListOfRequests;
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers/root-reducer';
import { User } from '../models/user';

interface Props{
    user: User | any
}

interface State{
}


class Profile extends React.Component<Props,State> {
    render(){
        const {user} = this.props;
        return(
            <div className="container mt-5 pt-5">
                {user!==undefined?
                <div>                    
                    <h1 className="text-center mb-5">Profile</h1>
                       <div className="text-center py-4" style={{backgroundColor: "#F8F9FA", border:"3px solid black",borderRadius:"20px"}}>
                            <p>Name:</p>
                            <h2 className="mb-5" ><b>{user.name}</b></h2>
                            <hr></hr>
                            
                            <div className="mt-4" style={{display:'flex', justifyContent:'space-evenly',marginLeft:"40px"}}>
                                <div>
                                    <p>Gender:</p>
                                    <h3>
                                    {user.gender==='male'?
                                    <img className="mb-2" src="http://cdn.onlinewebfonts.com/svg/img_493659.png" style={{width:"50px"}}></img>
                                    :
                                    <img className="mb-2" src="http://cdn.onlinewebfonts.com/svg/img_493683.png"></img>}
                                    </h3>
                                </div>
                                <div>
                                    <p>Age:</p>
                                    <h3 className="mb-4"><b>{user.age}</b></h3>
                                </div>
                                <div>
                                    <p>Blood group:</p>
                                    <h3 className="mb-4"><b>{user.bloodGroup}</b></h3>
                                </div>
                            </div>
                            <hr></hr>
                            <p className="mt-4">Donations:</p>
                            <h3 className="mb-3"><b>{user.donations}</b></h3>
                        </div>
                </div>
                :
                'nema nista'
                }
            </div>
        )
    }

}

function mapStateToProps(state: RootState,props: any) {
    const users = state.users;
    let user;
    if( users!==undefined){
        if(users.length>0){
            user=users[0];
        }
    }
    console.log(user)
    return{
        user:user
    }
}


export default connect(mapStateToProps,null)(Profile);
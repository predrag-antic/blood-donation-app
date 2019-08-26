import React from 'react';
import { Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <img src="https://www.sheknows.com/wp-content/uploads/2018/08/dwnpycloik9zi6wwlmqy.jpeg" alt="" style={{width:"100%", zIndex:-1, position:"fixed"}} />
                <div style={{textAlign:"center"}} className="pt-5 mt-5">
                <Button style={{background:"#EC4B37", width:"200px", height:"60px", marginTop:"5em"}}>
                    <NavLink tag={Link} to="/requests" style={{textDecoration:"none", color:"white"}}>DONATE</NavLink>
                </Button>
                <Button style={{background:"#EC4B37", width:"200px", height:"60px", marginTop:"5em", marginLeft:"3em"}}>
                <NavLink tag={Link} to="/add-request" style={{textDecoration:"none", color:"white"}}>REQUEST</NavLink>
                </Button>
                </div>
                <div style={{textAlign:"center"}} className="pt-5 my-5">
                <Button style={{background:"grey", width:"250px", height:"50px", marginTop:'21em'}}>
                <NavLink tag={Link} to="/add-novelty" style={{textDecoration:"none", color:"white"}}>Have some news?</NavLink>
                </Button>
                </div>
            </div>
        )
    }
}

export default Home
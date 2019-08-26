import React from 'react';
import { News } from '../models/news';
import { RootState } from '../store/reducers/root-reducer';
import { connect } from 'react-redux';

interface Props{
    novelty: News | any
}

interface State{
}

class Novelty extends React.Component<Props,State> {
    

    render(){
        const {novelty} = this.props;
        return(
            <div className="container">
                {novelty!==undefined?
                    <div style={{textAlign:"center"}}>
                        <img src={novelty.picture} style={{width:'90%'}}></img>
                        <h5 className="mt-5" style={{color:"#17A2B8"}}>{novelty.type}</h5>
                        <h1 className="mt-2">{novelty.heading}</h1>
                        <p className="my-5" style={{fontSize:"18px"}}>{novelty.info}</p>
                    </div>
                    :'nema nista'
                    
                }

            </div>
        )
    }
}

function mapStateToProps(state: RootState,props: any) {
    const id = Number(props.match.params.id);
    const news = state.news;
    let novelty;
    if( news!==undefined){
        if(news.length>0){
            novelty=news[id-1];
        }
    }
    console.log(novelty)
    return{
        novelty:novelty
    }
}


export default connect(mapStateToProps,null)(Novelty);
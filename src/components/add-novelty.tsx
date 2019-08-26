import React, { Dispatch } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { Donation } from '../models/donation';
import { RootState } from '../store/reducers/root-reducer';
import { History } from 'history';
import { addNews } from '../store/actions/news-actions';
import { News } from '../models/news';

interface Props {
    addNews: Function,
    news : News,
    lastId: number,
    history: History
}

interface State {
    heading: string,
    picture: string,
    type: string,
    info: string,
    errors: boolean
}

class AddNovelty extends React.Component<Props,State> {
    
    constructor(props:Props){
        
        super(props);

        this.state = {
            heading: '',
            picture: '',
            type: 'News',
            info: '',
            errors: false
        }
    }

    handleHeadingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({heading:event.target.value})
    }

    handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({picture:event.target.value})
    }

    handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({type: event.target.value})
    }

    handleInfoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({info:event.target.value})
    }

    isFormEmpty = () => {
        return !this.state.heading.length || !this.state.picture.length || 
                !this.state.type.length || !this.state.info.length;
    }


    handleSubmit = (event: { preventDefault: () => void; }) => {
        console.log("submit");
        event.preventDefault();
        if(!this.isFormEmpty()){
            var novelty : News = {
                id: this.props.lastId+1,
                heading:this.state.heading,
                picture: this.state.picture,
                type: this.state.type,
                info: this.state.info
            }
            this.props.addNews(novelty);
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

        const {heading,picture,type,info} = this.state;

        return(
            <div className="container pt-5 mt-5">
                <h1 className='text-center mb-5'>Add news</h1>
                {this.state.errors===true && (
                    <h3 style={{color:"red", border:"1px solid red", padding:"5px 5px 10px 10px", textAlign:"center"}}>Error! Fill all fields!</h3>
                )}
                <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" name="heading" value={heading} className="form-control" placeholder="Please enter news title" onChange={this.handleHeadingChange}></input>
                    </div>
                    <div className="form-group">
                        <label >Picture url: </label>
                        <input type="text" name="picture" value={picture} className="form-control" placeholder="Please enter picture url" onChange={this.handlePictureChange}></input>
                    </div>
                    <div className="form-group">
                        <label >Type of news: </label>
                        <select className="form-control" name="type" value={type} onChange={this.handleTypeChange}>
                            <option value="News">News</option>
                            <option value="Event">Event</option>
                            <option value="FAQ">FAQ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>More information:</label>
                        <textarea className="form-control" name="info" value={info} onChange={this.handleInfoChange}></textarea>
                    </div>
                    <div className="text-center" >
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
        addNews:(news:News) => dispatch(addNews(news))
    }
}

function mapStateToProps(state: RootState) {
    return {
        lastId: state.news.length
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNovelty);
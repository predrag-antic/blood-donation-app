import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar';
import Home from './components/home'
import Requests from './components/donation-requests'
import Profile from './components/profile';
import Blog from './components/blog';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { rootSaga } from './store/sagas/root-saga';
import { requestDonationRequests } from './store/actions/requests-actions';
import rootReducer from './store/reducers/root-reducer';
import AddRequest from './components/add-request';
import { requestNews } from './store/actions/news-actions';
import Novelty from './components/novelty';
import {composeWithDevTools} from 'redux-devtools-extension';
import addNovelty from './components/add-novelty';
import { requestUser } from './store/actions/users-actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)


class App extends React.Component {
  render(){
    
    store.dispatch(requestDonationRequests());
    store.dispatch(requestNews());
    store.dispatch(requestUser());

    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
          <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/home' component={Home}/>
              <Route path='/requests' component={Requests}/>
              <Route path='/add-request' component={AddRequest}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/novelty/:id' component={Novelty}/>
              <Route path='/add-novelty' component={addNovelty}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

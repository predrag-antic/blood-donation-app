import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar';
import Home from './components/home'
import Requests from './components/donation-requests'
import Profile from './components/profile';
import TopDonations from './components/top-donations';
import Blog from './components/blog';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { rootSaga } from './store/sagas/requests-saga';
import { requestDonationRequests } from './store/actions/requests-actions';
import rootReducer from './store/reducers/root-reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(rootSaga)


class App extends React.Component {
  render(){
    
    store.dispatch(requestDonationRequests());

    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
          <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/home' component={Home}/>
              <Route path='/requests' component={Requests}/>
              <Route path='/top-donations' component={TopDonations}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/blog' component={Blog}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

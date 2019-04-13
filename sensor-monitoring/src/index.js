import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    temperatureReducer,
    humidityReducer,
    ozoneReducer,
    pm10Reducer,
    pm2_5Reducer,
    coReducer,
    aqiReducer,
    aqhiReducer,
    no2Reducer,
    sensorReducer,
} from './reducers/sensorReducer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';

const store=createStore(combineReducers({
    temperature:temperatureReducer,
    humidity:humidityReducer,
    ozone:ozoneReducer,
    pm10:pm10Reducer,
    pm2_5:pm2_5Reducer,
    co:coReducer,
    aqi:aqiReducer,
    aqhi:aqhiReducer,
    no2:no2Reducer,
    data:sensorReducer,
}),
compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
     <BrowserRouter>
     <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
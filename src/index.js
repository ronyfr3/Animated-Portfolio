import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

const pubnub = new PubNub({
      publishKey: 'pub-c-a1b5db3a-4935-4c66-84d9-963182771981',
  subscribeKey: 'sub-c-7750181a-d7f5-11eb-a02e-0298fc8e4944',
      secretKey:'sec-c-MTk3MzQ1ZGUtM2FhMy00ODJmLWFmYmMtOTQ1MTgyODAzYmVl',
      heartbeatInterval:30
});
    
  ReactDOM.render(
    <BrowserRouter>
      <PubNubProvider client={pubnub}>
        <App />
      </PubNubProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

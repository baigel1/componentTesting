import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AnswersHeadlessProvider} from "@yext/answers-headless-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnswersHeadlessProvider
    experienceKey = "test-experience"
    apiKey = "9641a03ad3de221fb9c566b0c9148351"
    locale = "en"
    experienceVersion="PRODUCTION"
  >
    <App />
  </AnswersHeadlessProvider>
 
);



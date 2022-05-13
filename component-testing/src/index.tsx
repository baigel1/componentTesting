import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import {answersSandboxEndpoints} from "./answersConfig"


ReactDOM.render(

  <AnswersHeadlessProvider
    experienceKey="test-experience"
    apiKey="9641a03ad3de221fb9c566b0c9148351"
    locale="en"
    endpoints={answersSandboxEndpoints}
  >

    <App />
  </AnswersHeadlessProvider>
 
  ,

  document.getElementById('root')
);




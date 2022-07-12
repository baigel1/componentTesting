import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import {answersSandboxEndpoints} from "./answersConfig"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Products from './Pages/Products';
import HelpArticles from './Pages/HelpArticles';
import Locations from './Pages/Locations'


ReactDOM.render(
<React.StrictMode>
  <AnswersHeadlessProvider
    experienceKey="test-experience"
    apiKey="9641a03ad3de221fb9c566b0c9148351"
    locale="en"
    endpoints={answersSandboxEndpoints}
  >
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="helpArticles" element={<HelpArticles/>}/>
        <Route path="locations" element={<Locations/>}/>
      </Routes>
    </Router>
  </AnswersHeadlessProvider>
  </React.StrictMode>
 
  ,

  document.getElementById('root')
);




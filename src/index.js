import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import MusicControl from './components/musicControl';

ReactDOM.render(
  <React.StrictMode>
    <MusicControl />
  </React.StrictMode>,
  document.getElementById('root')
);

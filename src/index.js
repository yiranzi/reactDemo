import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Demo from './App';
// import Demo from './cssDemo/Demo';
import Demo from './cssDemo/flexDemo';
// import Demo from './reactDemo/demo';
// import Demo from './componentTest/scrollTest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();

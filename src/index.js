import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './my/main'
// import './index.css';
// import Demo from './App';
// import Demo from './jsDemo/reg';
// import Demo from './jsDemo/vedio';
// import Demo from './recetRouter/main';
// import Demo from './jsDemo/pushState/pushState';
// import Demo from './cssDemo/Demo';
// import Demo from './cssDemo/flexDemo';
// import Demo from './reactDemo/demo';
// import Demo from './componentTest/scrollTest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();

// import React from 'react'
// import { Router, Route } from 'react-router'
// import { Link } from 'react-router-dom'
//
// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })
//
// const About = React.createClass({
//   render() {
//     return <h3>About</h3>
//   }
// })
//
// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })
//
// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })
//
// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>
// ), document.body)

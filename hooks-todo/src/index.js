import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const UserContext = React.createContext();
const userDetails = { 
  name: 'Andy',
  location: 'Melbourne'
}

ReactDOM.render(
<UserContext.Provider value={userDetails}>
<App />
</UserContext.Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
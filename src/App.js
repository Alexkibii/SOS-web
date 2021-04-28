import React from 'react';
import Register from './Register';
import Subscription from '././components/Subscription/Subscription';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {
   return(
     <Router>
       <Switch>
         <Route path="/">
           <Register />
          </Route>
          <Route path="/sub">
            <Subscription />
          </Route>
       </Switch>
          
     </Router>
   ) 

 }
export default App;

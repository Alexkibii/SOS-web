import React from 'react';
import Home from './Home';
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
           <Home />
          </Route>
          <Route path="/sub">
            <Subscription />
          </Route>
       </Switch>
          
     </Router>
   ) 

 }
export default App;

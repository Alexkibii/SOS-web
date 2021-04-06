
import rescue from './rescue.png'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Steps, Step } from "react-step-builder";
import './App.css';
import {  Col, Row } from "antd";
import FetchContacts from './components/FetchContacts';
import SubscriberDetails from './components/SubscriberDetails';

const useStyles = makeStyles((theme) => ({
  root: {
   marginTop: '50px',
      
        backgroundColor: 'red',
  },
}));

const Navigation = (props) => {
  console.log({ props });
  return (
    <div>
  <Button  variant="contained"
            color="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      
        <Button    variant="contained"
            color="primary"  onClick={props.next}>
          Next
        </Button>

    </div>
      
     
  );
};
function App() {

   const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };
  const classes = useStyles();
  return (
    <div className="App-header">
      <Steps config={config}>
        <Step component={SubscriberDetails} />
        <Step component={FetchContacts} />
        <Step component={SubscriberDetails} />
      </Steps>
    
    </div>
  );
}

export default App;

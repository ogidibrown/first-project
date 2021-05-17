
import Landingpage from './landingpage';
import Login from './login';
import Signup from './signup';
import Dashboard from './dashboard';
import {Switch, Route} from 'react-router-dom';



const Approute = () =>{

    return(
        <div>
        <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
        </div>

    )
}

export default Approute;
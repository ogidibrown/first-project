import './landingpage.css';
import { useHistory } from 'react-router-dom';
import {LoginButton, SignupButton} from './Button.style'
import Image from '../src/images/brandy.jpg';
import LandingComponents from './components/landingcomponents'


const Landingpage = () => {

    const History = useHistory();
    const gotoLogin= (e) =>{
        History.push('/login')
        e.preventDefault();
    }
    const gotoSignup= (e) =>{
        History.push('/signup')
        e.preventDefault();
    }
    



    return(
             
        <div className= "mainlp">
            <div className="toplp">
                <div className="lefttoplp">
                    <img className="imgs" src={Image} alt="alter"/>
                    <h1 className="brand">BROWNHOST</h1>
                </div>


                   <div className="righttoplp">
                <LoginButton onClick={gotoLogin}>Login</LoginButton>
                <SignupButton onClick={gotoSignup}>Signup</SignupButton>

                     </div>
                     <LandingComponents/>
                     
            </div>
            
                 
    
            
                
    

        </div>


           
    )
}


export default Landingpage;

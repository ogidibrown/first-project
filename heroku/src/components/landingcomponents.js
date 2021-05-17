import landingcompo from './landingcompo.module.css';
import {Aboutus, Events} from '../Button.style';
import Select from '../components/select';
import {useAppContext} from '../store/context';



const LandingComponents = () =>{
    const {updateValues} = useAppContext({})
    return(
            <div className={landingcompo.main}>
                    <div className={landingcompo.downlp}>
                     <div className={landingcompo.topdownlp}>
                        <h1 className= {landingcompo.textone}>Find Your Next Hostel</h1>
                        <h3 className={landingcompo.texttwo}>You are just a step away from your comfortable hostel with a single click</h3>

                     </div>
                     <div className={landingcompo.middledownlp}>
                     <div style={{display:'flex', border:'2px solid white', borderRadius:20, width:450, height:50,  backgroundColor:'white', alignItems:'center', justifyContent:"center"}}>
                            <input style={{border:'none',paddingLeft:20, outline:'none', width:300, height:40, }} type="text" placeholder="search for your region" />
                            <button className={landingcompo.searchbtn}>Search</button>

                        </div>
                     </div>
                     <div className={landingcompo.downdownlp}>
                             <label className={landingcompo.visit}>Visit your School:</label>
                             <Select onChange={updateValues} className="select"/>
                            <Aboutus>About Us</Aboutus>
                            <Events>Events</Events>
                             </div>
                        
                        
                             


                 </div>
            </div>
    )
}
export default LandingComponents;

import React, {createContext, useContext, useState,} from 'react';



const AppContext = createContext();



const AppProvider = ({children})=> {
    const [values,setValues] = useState({})

    const Brandname = "BROWNHOT"
    function updateValues(e){
        console.log(e.target.value);
        setValues({...values,[e.target.name] : e.target.value})

    }

    return(
        <AppContext.Provider value={{updateValues,values, Brandname}}>
            {children}
        </AppContext.Provider>

)
} 
const useAppContext = () => useContext(AppContext);

export {
    useAppContext,
    AppProvider
}
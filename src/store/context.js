
import React, {createContext, useContext, useState,} from 'react';



const AppContext = createContext();



const AppProvider = ({children})=> {
    const [values,setValues] = useState({})

    const Brandname = "BROWNHOT"
    function updateValues(e){
        setValues({...values,[e.target.name] : e.target.value})


    }
    const Messages =(text)=>{
        alert(text)
    }
    return(
        <AppContext.Provider value={{updateValues,values, Brandname,Messages}}>
            {children}
        </AppContext.Provider>

)
} 
const useAppContext = () => useContext(AppContext);

export {
    useAppContext,
    AppProvider
}
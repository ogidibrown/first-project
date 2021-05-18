


const Inputfield = ({label,type,placeholder,name,onChange,className}) =>{
    return(
       
       <div className="main">
           <label >{label}</label>
        <input type={type} placeholder={placeholder} name={name} className={className} onChange={onChange}  />
    
        </div>
    
    
    )
    
    }
    
    export default Inputfield;
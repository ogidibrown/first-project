



const Select = ({onChange, className }) =>{

    return(
        <div>

<select className={className} onChange={onChange}>
<option value="select">--select--</option>
  <option value="KNUST">KNUST</option>
  <option value="ug">UG(legon)</option>
  <option value="uew">UEW</option>
  <option value="audi">UCC</option>
</select>

        </div>




    )
}


export default Select;
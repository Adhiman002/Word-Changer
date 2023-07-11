import React from 'react'

const Alert = (props) => {
    const Capitalized=(word)=>{
        const str=word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                        <strong>{Capitalized(props.alert.typ)} :</strong> {props.alert.msg}
                    </div>}
    </div>
  );
}
export default Alert;

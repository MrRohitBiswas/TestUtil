import React from "react";

export default function Alert(props) {
    const changeFirstLetter =(str)=>{
        return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{changeFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
      </div>
  );
}

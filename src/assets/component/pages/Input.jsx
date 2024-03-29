import React from 'react'

function Input({type="text",id,name,title,value,onChange,errors,onBlur,touched}) {
  return (
    <>
    <div className='input-groub mb-3'>
        <label htmlFor={id}>{title}</label>
        <input type={type} name={name} className="form-control" id={id} value={value}
         onChange={onChange} onBlur={onBlur}/>
        { touched[name]&&errors[name]&& <p className='text text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}

export default Input
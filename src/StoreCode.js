import React from 'react'
import style from "./StoreCode.module.css"
import { Link } from 'react-router-dom'

function StoreCode() {
  return (
    <div className={style.StoreCode}>
      <h1>Become a Guide at StoreCode</h1>
     <Link to={"/Register"} ><button>Register</button></Link> 
    </div>
  )
}

export default StoreCode
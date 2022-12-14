import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate=useNavigate()
    const forward=()=>{
        navigate(1)
    }
    const backward=()=>{
        navigate(-1)
    }
  return (
    <div className="row">
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router 6 Demo</h2>
        <button onClick={forward}>εθΏ</button>
        <button onClick={backward}>ει</button>
        <hr />
      </div>
    </div>
  </div>
  )
}

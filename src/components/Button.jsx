import React from "react"

export default function Button(props){

  const handleClick= ()=>{
    props.setRandomNumber(Math.floor(Math.random() * 151 + 1))
  }
  return(
    <button className="button" onClick={handleClick}>POKEMON ALEATORIO</button>
  )
}
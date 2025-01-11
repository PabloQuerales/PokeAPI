import React, {useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Button from "./Button";


export default function Container(){
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 151 + 1))
  return(
    <div className="container d-flex justify-content-center flex-column align-items-center mt-3 gap-4">
      <Header/>
      <Card randomNumber={randomNumber}/>
      <Button setRandomNumber={setRandomNumber}/>
    </div>
  )
}
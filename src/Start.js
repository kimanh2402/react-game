import React from "react";
import BgImage from '../src/images/bg.png'
import Gif from '../src/images/giphy.gif'
import BiDo from '../src/images/bido.png'
import { useState } from "react";
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Game from './Game'

export default function Start() {
  // React state to manage form elements

  const [isReset, setIsReset] = useState(true);
  // Update state with user input

  const handleSubmit = () => {
    setIsReset(!isReset) ;

  };
  const abc =() =>{    
      ReactDOM.render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>,
  document.getElementById("root")
);
  };

  // JSX code to accept user input
  const renderInputName = (
    <>
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${BgImage})`,
        backgroundColor: `black`,
        margin: `auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`
      }} className="intro">
        <div>
          <img src={Gif} alt='a'></img>
        <center>
          <button id="user-submit" style={{ marginTop: '-300px'}}onClick={handleSubmit}>
          Start
        </button>
        </center>
      </div>
      </div>
      
    </>
  );

  // JSX code to display entered value
  const renderResetName = (
    <>
     <>
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        background: `url(${BgImage})`,
        backgroundColor: `black`,
        margin: `auto`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: `center center`
      }} className="intro">
        <center style={{
        margin: 'auto',
        marginTop: '40px',
        width: '70%',
        height: '70%',
        backgroundColor: `rgba(240, 145, 74, 0.517)`
        }} >
        <h1>B???n c?? bi???t quy lu???t c???a tr?? ch??i?</h1>
        <h2>B???n c???n ????nh b???i nh???ng tr??i b?? ????? <img src={BiDo} style={{height:'15%',width:'6%'}} alt='a'></img> v?? ghi ??i???m, tuy nhi??n b???n s??? kh??ng th??? ????nh b???i nh???ng con ma.</h2>
        <h2>M??n cu???i b???n s??? g???p m???t con ghost r???t ????ng s???, hay c???n th???n nh??!</h2>
        <h2>B???n h??y ch???n h??nh ???nh ghost n???u nh?? kh??ng mu???n g???p ghost trong Round 2 nh?? </h2>
        <img src={Gif} style={{marginTop:'-100px',marginLeft:'800px',height:'20%',width:'10%'}} alt='a'></img>    
        <br>
        </br>
        <center><button id="user-submit" 
                  onClick={abc}>
          Continue
        </button>
        </center>
      </center>
      </div>
      
    </>
    </>
  );
  // Conditional rendering based on isReset State value
  return (
    
    <div className="main">{ isReset ? renderInputName :renderResetName}
      </div>
  );
}

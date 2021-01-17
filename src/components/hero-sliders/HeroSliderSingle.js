import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {GoZap } from "react-icons/go";
import {BsArrowRepeat} from "react-icons/bs";

const Button = styled.button`
padding: 20px;
color: white;
width:  ${props => props.color ? '150px' : '250px'  };
border-radius: 10px;
position: relative;
border: 0;
box-shadow: none;
background: ${props => props.color ? 'purple' : '#F7A901'  };
margin: 6px;
&: hover .goZap {
  right:15px;
  transition: all .2s ease-out;
}
&: focus {
  outline: none;
}
`;

const GoZAPWraped = styled(GoZap)`
 position: absolute;
 right: 10px;
 top:10;
 color: white;
`;

const ArrowWraped = styled(BsArrowRepeat)`
 position: absolute;
 right: 10px;
 top:10;
 color: white;
`;

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div
      className="slide d-flex bg-image--1 align__center poss--relative"
      style={{
        width: "100%",
        backgroundImage: `url(https://somia.netlify.app/img/bg-img/bg-5.png)`
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="slide__inner">
              <h1>{data.heading}</h1>
              <h3>{data.title}</h3>
             {
             //buutons 
             }

             <div>
               <Button color={true}>Buy CHND <GoZAPWraped className="goZap"/></Button>
               <Button>Download Masternode <ArrowWraped className="goZap"/></Button>
             </div>

             <div>
               <p style={{color: 'white', margin: '7px', fontSize: '18px'}}>Stable Release 19.0.3</p>
             </div>

            </div>
          </div>
          
        </div>
      </div>
      {/* particle */}
      
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object
};

export default HeroSliderOneSingle;

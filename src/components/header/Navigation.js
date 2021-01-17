import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <div class="container-fluid">
      <ul className="mainmenu">
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>CashHand</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/wallets"}>Wallets</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/cold-staking"}>Staking</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/team"}>Team</Link>
        </li>

        
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/"}>
            Exchange <IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>Crex 24</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-two"}>Hotbit</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/home-three"}>
                 Binance (Soon)
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/roadmap"}>roadmap</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navigation;

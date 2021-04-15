import React,{useState} from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import grey from '@material-ui/core/colors/grey';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
    <React.Fragment>
        <div className="d-lg-block d-none">
        <div className="bg-primary padLeft">
            <p className="text-white p-2 text-left mb-0">Store made with SOKO</p>
        </div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-white padLeft nav-shadow mt-0 padRight">
        <span className=" fa fa-home fa-2x text-secondary pl-4"></span>
            <a className="navbar-brand text-left pl-3" href="#">
                <b>Target</b><br/>
                <font className="smallFont">Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</font>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/bag" className="p-2 mr-3">
                    <LocalMallIcon style={{color:grey[900]}}/>
                    </Link> 
                </li>
                <li>
                Bag
                </li>
                <li className="nav-item ml-5">
                    <Link to="/cartItems" className="p-2 mr-3">
                        <AccountCircleRoundedIcon style={{color:grey[900]}}/> 
                    </Link>
                </li>
                <li>Account</li>
                </ul>
            </div>
            
        </nav>
        </div>
        <div className="d-lg-none">
        <div className="bg-primary pl-2">
            <p className="text-white p-2 mb-0 text-left">Store made with SOKO</p>
        </div>
        <nav className="navbar mt-0 navbar-expand-lg navbar-light bg-white pl-4 pr-4 nav-shadow">
            <a className="navbar-brand" href="#"><h3>Target</h3></a>
            <AccountCircleRoundedIcon className="mr-3 ml-auto"/>

            <Link to="/bag" className="p-2  mr-3">
                    <LocalMallIcon style={{color:grey[900]}}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navPad text-left">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item">                    
                    <a className="nav-link" href="#">Latest</a>    
                </li>                
                <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
        </div>
    </React.Fragment>
    );
}
 
export default Nav;
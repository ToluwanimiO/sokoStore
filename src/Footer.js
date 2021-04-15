import React from 'react';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import { yellow } from '@material-ui/core/colors';
const Footer = () => {
    return ( 
        <div>
             <div className="bg-primary row mt-5 softenRow">
                    <div className="container padIn">
                        <div className="row">
                            <div className="col-4  pt-4 pb-4">
                                <DoneAllOutlinedIcon style={{fontSize:'40px',color:yellow[500]}}/>
                                <p className="featuredTitle">Sterling Products</p>
                            </div>
                            <div className="col-4 pb-4 pt-4">
                                <LockOpenOutlinedIcon style={{fontSize:'40px',color:yellow[500]}}/>
                                <p className="featuredTitle">Buyer Protection</p>
                            </div>
                            <div className="col-4 pb-4 pt-4">
                                <LocalShippingOutlinedIcon style={{fontSize:'40px',color:yellow[500]}}/>
                                <p className="featuredTitle">Fastest Delivery</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="smallFont">STORE DETAILS</p>
                    <h5>Target</h5>
                    <p className="text-secondary smallFont">Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
                </div>
        </div>
     );
}
 
export default Footer;
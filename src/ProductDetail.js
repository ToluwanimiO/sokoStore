import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import StarIcon from '@material-ui/icons/Star';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { useHistory } from "react-router-dom";
import Footer from './Footer';

const ProductDetail = (props) => {
    const history = useHistory();
    const {itemIndex} = useParams()
    const getStars=(num)=>{
        let stars = [];
        for (let i = 0; i<num ; i++){
            stars.push(<span key={i}><StarIcon style={{color:amber[400]}}/></span>)
        }
        for (let i = 0; i<5-num ; i++){
            stars.push(<span key={i}><StarIcon style={{color:grey[400]}}/></span>)
        }
        return stars;
    }
    let {products} = props
    
    let [productDetails,setProductDetails] =useState([{image:products[itemIndex],quantity:1,price:30000,totalPrice:30000}]);
    const AddQuanIcon=(indexNumber)=>{
        setProductDetails(productDetails.map((item,index)=>index==indexNumber?{...item,quantity:item.quantity+1,totalPrice:(item.quantity+1)*item.price}:item))
    }
    const SubtractQuanIcon=(indexNumber)=>{
        setProductDetails(productDetails.map((item,index)=>(index==indexNumber && item.quantity>1)?{...item,quantity:item.quantity-1,totalPrice:(item.quantity-1)*item.price}:item))
    }
    return ( 
        <div>
        <div  className="container mb-4">
            <span className="fa fa-angle-left goBack" onClick={()=>{history.goBack();}}></span>
            <div className="row shadow border mr-md-5 ml-md-5 " >
                <div className="col-md-6" style={{backgroundImage:`url(${productDetails[0].image})`,backgroundSize:'cover', backgroundPosition:'center'}}>

                </div>
                <div className="d-lg-none mt-2 text-center pt-3">
                    <img src={productDetails[0].image} width="70%" height="250px"/>
                </div>
                <div className="col-md-6 pb-5 pt-4 pl-4">
                    <h2>Description Title of Product</h2>
                    {getStars(3)}
                    <div className="mt-2 mb-2">
                        <span className="bg-light mt-2 mb-2 p-1" style={{fontSize:"13px"}}><CheckIcon style={{fontSize:"1em"}}></CheckIcon> Verified</span>
                        <span className="bg-light ml-2  p-1" style={{fontSize:"13px"}}>20 Items left</span>
                        {/* <span className="bg-light ml-2 p-1" style={{fontSize:"13px"}}>Location</span> */}
                        <span className="bg-light ml-2 p-1" style={{fontSize:"13px"}}>7 reviews</span>
                        <span className="d-lg-inline-block d-none text-success ml-2 p-1" style={{fontSize:"13px", fontWeight:"700"}}><AssignmentTurnedInIcon></AssignmentTurnedInIcon>154 orders</span>
                        <span className="d-lg-none d-block text-success p-1 mt-2" style={{fontSize:"13px", fontWeight:"700"}}><AssignmentTurnedInIcon></AssignmentTurnedInIcon>154 orders</span>
                    </div>
                    <h5 className="mb-0">UGX 30,000<span style={{fontSize:'12px', color:'#6c757d'}}> /per item</span></h5>
                    <span style={{fontSize:"14px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper mauris vitae nulla
                        condimentum rhoncus. Proin sed imperdiet risus. Morbi porttitor finibus ornare. Aenean tincidunt
                        id lectus sit amet pulvinar.
                    </span>
                    
                    <span className="row mt-4 ml-1 mb-5">
                        <button className="quanIcon" onClick={()=>AddQuanIcon(0)}><AddIcon fontSize="small"></AddIcon></button>
                        <button className="quanIcon" style={{backgroundColor:'#ced4da'}}>{productDetails[0].quantity}</button>
                        <button className="quanIcon" onClick={()=>SubtractQuanIcon(0)}><RemoveIcon fontSize="small"></RemoveIcon></button>
                        <span className="ml-4">Total Price: UGX {productDetails[0].totalPrice}</span>
                    </span>
                   
                   <div className="row">
                       <div className="col-1"></div>
                   <button className="btn applyBtn col-4">
                        Buy now
                    </button>
                    <div className="col-2"></div>
                    <button className="btn add2BagBtn col-4">
                        Add to bag  
                    </button>
                    <div className="col-1"></div>

                   </div>
                    
                </div>
            </div>
            <div className="d-lg-block d-none ml-md-5 mt-md-5">
                <p className="text-secondary d-block">RELATED PRODUCTS</p>
                {products.map(item=>
                    <img src={products[0]} className="mr-4 relatedImage"/>
                )}
            </div>
            <div className="d-lg-none ml-md-5 mt-md-5">
                <p className="text-secondary d-block">RELATED PRODUCTS</p>
                {products.map((item,index)=>index==2?<React.Fragment></React.Fragment>:
                    <img src={products[0]} className="mr-4 relatedImage"/>
                )}
                <span className="fa fa-angle-right fa-3x text-primary"></span>
            </div>
        </div>
        <Footer/>
        </div>
     );
}
 
export default ProductDetail;
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Emoji from './assets/sadEmoji.png'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Link} from 'react-router-dom'
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      paddingLeft:'10em',
    },
    tabs: {
    //   borderRight: `1px solid ${theme.palette.divider}`,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
      },
  }));
  
const ProductList = (props) => {
    const classes = useStyles();
    let  [value, setValue] = React.useState(0);
    const [category, setCategory] = React.useState("default");
    const handleCategory = event => setCategory(event.target.value);
    const labels = [{label:'Electronics',number:12},{label:'Face Masks',number:3},{label:'Fresh Food',number:8},
                    {label:'Grocery',number:6},{label:'Home',number:24},{label:'Kids',number:9}]
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  const getList=()=>{
    let {products} = props
    let productList = []
    for (let index = 0; index < labels[value].number; index++) {
        productList.push(
            <div className="shadow border row mb-5" key={index}>
            <Link to={`/product/${index%3}`} className="col-md-3 mb-1" style={{backgroundImage:`url(${products[index%3]})`,backgroundSize:'cover'}}>
            </Link>
            <Link to={`/product/${index%3}`} className="d-lg-none mt-2 text-center pt-3">
                <img src={products[index%3]} width="70%" height="200px"/>
            </Link>
            <div className="col-md-6 pt-3 pb-5 text-left">
                Description Title of Product <br/>
                <font className="smallFont">UGX 130,000</font>
            </div>
            <div className="d-lg-block d-none col-md-3 p-4">
                <button className="btn btn-outline-primary pt-1 pb-1"><AddIcon fontSize="small"/>  Add</button>
            </div>
            <div className="d-lg-none col-md-3 text-right pb-2" style={{marginTop:'-3em'}}>
                <button className="btn btn-outline-primary pt-1 pb-1"><AddIcon fontSize="small"/>  Add</button>
            </div>
        </div>
        )
        
    }
    return productList;
}
    return ( 
        <div>
            <div className="container-fluid">
                <div className="row border-top">
                    <div className="d-lg-block d-none col-md-3 p-0 mt-3">
                    <div className={classes.root}>
                        <Tabs
                            orientation="vertical"
                            value={value}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            {labels.map((item,index)=>(
                                <div>
                                   <Tab onClick={()=>handleChange(index)} label={item.label+"("+item.number+")"} />
                                </div>
                            ))}
                            <span className="text-primary mt-4">
                                <b>View all categories</b>                                
                                <span className="fa fa-angle-right ml-3" style={{fontWeight:"800"}}></span>
                            </span>
                            
                        </Tabs>
                    </div>
                    </div>
                    <div className="d-lg-none pl-5 pt-2 d-sm-flex justify-content-between">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={handleCategory}
                        >
                            {labels.map((item,index)=>(index==0?
                                <MenuItem value="default" onClick={()=>handleChange(index)}>{item.label+"("+item.number+")"}</MenuItem>
                            :
                                <MenuItem value={item.label} onClick={()=>handleChange(index)}>{item.label+"("+item.number+")"}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    </div>
                    <div className="col-md-6 pt-3 pl-5 pr-5 border-left fixedItems">
                        <div className="d-flex">
                            <span>
                                <b>{labels[value].label}</b>
                                <button className="btn btn-primary ml-2 pt-0 pb-0">{labels[value].number}</button>
                            </span>                            
                        </div>
                        <hr/>
                        {getList()}
                    </div>
                    <div className="col-md-3 border-left pt-3 pl-5 pr-5">
                        <span>
                            <b>Bag</b>
                            <button className="btn btn-primary ml-2 pt-0 pb-0">0</button><br/>
                            <img src={Emoji}/>
                            <p className="text-center">
                                <b>It's empty here</b><br/>
                                Start shopping to add items to your bag
                            </p>
                        </span>  
                    </div>
                </div>
               

            </div>
            <Footer/>
        </div>
     );
}
 
export default ProductList;
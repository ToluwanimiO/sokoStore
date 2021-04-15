import logo from './logo.svg';
import './App.css';
import Product from './assets/product.jpg'
import Product2 from './assets/product2.jpg'
import Product3 from './assets/product3.jpg'

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Bag from './Bag'
import Nav from './Nav'
function App() {
  let products = [Product,Product2,Product3]
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <ProductList products={products}/>
          </Route>
          <Route path="/bag" exact>
            <Bag/>
          </Route>
          <Route path="/product/:itemIndex" exact>
            <ProductDetail products={products}/>
          </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;

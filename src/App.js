import React, { useContext, useEffect } from 'react'
import { Switch, Route, Link} from "react-router-dom";
import Home from './component/content/Home';
import Header from './component/layout/Header';
import Login from './component/content/Login';
import Product_Markup from './component/content/Product_Markup';
import Product_Perfume from './component/content/Product_Perfume';
import Product_Foundation from './component/content/Product_Foundation';
import Product_Skin from './component/content/Product_Skin';
import Product_Lips from './component/widget/Product_Lips';
import ProductMen from './component/widget/ProductMen';
import ProductSerum from './component/widget/ProductSerum';
import ProductSunscreen from './component/widget/ProductSunscreen';
import ProductScrub from './component/widget/ProductScrub';
import Home_Dior from './component/content/Home_Dior';
import ProductAdd from './component/content/ProductAdd';
import ProductAll from './component/content/ProductAll';
import ProductCustomer from './component/content/ProductCustomer';
import ProductPayment from './component/content/ProductPayment';
import Product from './component/content/Product';
import ProductCart from './component/content/ProductCart';
import ProductEdit from './component/content/ProductEdit';
import Profile from './component/content/Profile';
import ProductDetail from './component/content/ProductDetail';
import ProductOrder from './component/content/ProductOrder';
import Address from './component/content/Address';
import { LoginContext } from './store/LoginProvider';
import ProfileUser from './component/content/ProfileUser';
import ProductHistory from './component/content/ProductHistory';
import OrderDetail from './component/content/OrderDetail';
import AdminOrderDetail from './component/content/AdminOrderDetail';
import Footer from './component/layout/Footer';


export default function App() {
  const { login,setLogin } = useContext(LoginContext);

  const setData = () => {
    if(localStorage.memberID){
      setLogin(true)
    }
  }

  useEffect(() => {
    setData()
  }, []);
  
  return (
    <div>
      <Header/>
      <div className="container-fluid">
         <Switch>
           {/* <Route  path="/register" ><Register/></Route>
           <Route  path="/login" > <Login/></Route>
           <Route  path="/" ><Home/> </Route> */}
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/profileUser' component={ProfileUser} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/product' component={Product} />
              <Route exact path='/productdetail/:productID' component={ProductDetail} />
              <Route exact path='/productCart' component={ProductCart} />
              <Route exact path='/productOrder' component={ProductOrder} />
              <Route exact path='/productHistory' component={ProductHistory} />
              <Route exact path='/order/:orderID' component={OrderDetail} />
              <Route exact path='/Address' component={Address} />
              <Route exact path='/product_perfume' component={Product_Perfume} />
              <Route exact path='/product_Markup' component={Product_Markup} />
              <Route exact path='/product_foundation' component={Product_Foundation} />
              <Route exact path='/product_skin' component={Product_Skin} />
              <Route exact path='/product_lips' component={Product_Lips} />
              <Route exact path='/productMen' component={ProductMen} />
              <Route exact path='/productSerum' component={ProductSerum} />
              <Route exact path='/productSunscreen' component={ProductSunscreen} />
              <Route exact path='/productScrub' component={ProductScrub} />
              <Route exact path='/home_dior' component={Home_Dior} />
              <Route exact path='/admin/product/add' component={ProductAdd} />
              <Route exact path='/admin/product/all' component={ProductAll} />
              <Route exact path='/admin/product/customer' component={ProductCustomer} />
              <Route exact path='/admin/product/payment' component={ProductPayment} />
              <Route exact path='/admin/order/:orderID' component={AdminOrderDetail} />
              <Route exact path='/admin/product/edit/:productID' component={ProductEdit} />
       </Switch>
      </div>
      <Footer/>
    </div>
  )
}


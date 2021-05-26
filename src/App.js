import MainLayout from './layouts/MainLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import AuthPage from './pages/auth';
import Error404Page from './pages/error404';
import CheckoutPage from './pages/checkout';
import ContactPage from './pages/contact';
import FaqPage from './pages/faq';
import OrderCompletePage from './pages/orderComplete';
import ProductPage from './pages/product';
import ShippingPage from './pages/shipping';
import ShoppingCartPage from './pages/shoppingCart';
import StoreLocatorPage from './pages/storeLocator';
import AccountPage from './pages/account';
import PrivateRoute from './core/PrivateRoute';
import { Provider } from 'react-redux';
import store from './redux';
import './assets/css/main.scss';
import { routerConfig } from './core/routerConfig';
import routers from './routers';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					{
						routerConfig(routers)
					}
					{/* <MainLayout>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/shop" component={ShopPage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/blog" component={BlogPage} />
							<Route path="/auth" component={AuthPage} />
							<Route path="/checkout" component={CheckoutPage} />
							<Route path="/contact" component={ContactPage} />
							<Route path="/faq" component={FaqPage} />
							<Route path="/order-complete" component={OrderCompletePage} />
							<Route path="/product" component={ProductPage} />
							<Route path="/shipping" component={ShippingPage} />
							<Route path="/shopping-cart" component={ShoppingCartPage} />
							<Route path="/store-locator" component={StoreLocatorPage} />
							<PrivateRoute path="/account" component={AccountPage} />
							<Route component={Error404Page} />
						</Switch>
					</MainLayout> */}
				</div>
			</Router>
		</Provider>
	);
}

export default App;

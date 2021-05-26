import MainLayout from './layouts/MainLayout';
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

// Account subpages
import AccountAddressEdit from './pages/account/components/AccountAddressEdit';
import AccountAddresses from './pages/account/components/AccountAddresses';
import AccountInfo from './pages/account/components/AccountInfo';
import AccountOrder from './pages/account/components/AccountOrder';
import AccountOrders from './pages/account/components/AccountOrders';
import AccountPayment from './pages/account/components/AccountPayment';
import AccountPaymentEdit from './pages/account/components/AccountPaymentEdit';
import AccountWishlist from './pages/account/components/AccountWishlist';

let routers = [
	{
		component: MainLayout,
		path: '/',
		routers: [
			{
				component: HomePage,
				path: '/',
				exact: true,
			},
			{
				component: ShopPage,
				path: '/shop',
			},
			{
				component: AboutPage,
				path: '/about',
			},
			{
				component: BlogPage,
				path: '/blog',
			},
			{
				component: AuthPage,
				path: '/auth',
			},
			{
				component: CheckoutPage,
				path: '/checkout',
			},
			{
				component: ContactPage,
				path: '/contact',
			},
			{
				component: FaqPage,
				path: '/faq',
			},
			{
				component: OrderCompletePage,
				path: '/order-complete',
			},
			{
				component: ProductPage,
				path: '/product',
			},
			{
				component: ShippingPage,
				path: '/shipping',
			},
			{
				component: ProductPage,
				path: '/product',
			},
			{
				component: ShoppingCartPage,
				path: '/shopping-cart',
			},
			{
				component: StoreLocatorPage,
				path: '/store-locator',
			},
			{
				component: AccountPage,
				path: '/account',
				// exact: true,
				auth: true,
				routers: [
					{
						component: AccountWishlist,
						path: '/wishlist',
					},
					{
						component: AccountInfo,
						path: '/info',
					},
					{
						component: AccountAddresses,
						path: '/addresses',
					},
					{
						component: AccountAddressEdit,
						path: '/addresses-edit',
					},
					{
						component: AccountPayment,
						path: '/payment',
					},
					{
						component: AccountPaymentEdit,
						path: '/payment-edit',
					},
					{
						component: AccountOrder,
						path: '/orders/:slug',
					},
					{
						component: AccountOrders,
						path: '/orders'
					},
					{
						component: AccountOrders,
						exact: true,
					},
				],
			},

			{
				component: Error404Page,
			},
		],
	},
];

export default routers;
